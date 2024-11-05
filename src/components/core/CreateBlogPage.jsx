import { useState } from 'react';
import { db } from '../../firebaseConfig';
import { collection, addDoc } from "firebase/firestore";
import { TextField, Button, Typography, Paper, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CreateBlogPage = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState('');
  const [content, setContent] = useState(['']);  // Initialize as an array for paragraphs
  const navigate = useNavigate();

  const handleAddParagraph = () => {
    setContent([...content, '']);
  };

  const handleContentChange = (index, newContent) => {
    const updatedContent = [...content];
    updatedContent[index] = newContent;
    setContent(updatedContent);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Add a new document to the 'blogs' collection in Firebase
      await addDoc(collection(db, 'blogs'), {
        title,
        author,
        image,
        content,
      });

      // Reset the form fields
      setTitle('');
      setAuthor('');
      setImage('');
      setContent(['']);
      alert("Blog post added successfully!");
      navigate('/blogpage')

    } catch (error) {
      console.error("Error adding blog post: ", error);
      alert("Failed to add blog post.");
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 3, maxWidth: 600, mx: 'auto', mt: 5 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Create New Blog Post
      </Typography>
      <Divider sx={{ mb: 2 }} />

      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{ mb: 2 }}
          required
        />
        
        <TextField
          label="Author"
          variant="outlined"
          fullWidth
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          sx={{ mb: 2 }}
          required
        />
        
        <TextField
          label="Image URL"
          variant="outlined"
          fullWidth
          value={image}
          onChange={(e) => setImage(e.target.value)}
          sx={{ mb: 2 }}
          required
        />

        <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>Content</Typography>
        {content.map((paragraph, index) => (
          <TextField
            key={index}
            label={`Paragraph ${index + 1}`}
            variant="outlined"
            fullWidth
            multiline
            rows={3}
            value={paragraph}
            onChange={(e) => handleContentChange(index, e.target.value)}
            sx={{ mb: 2 }}
          />
        ))}
        <Button variant="outlined" color="primary" onClick={handleAddParagraph}>
          Add Another Paragraph
        </Button>

        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 3 }}>
          Submit Blog Post
        </Button>
      </form>

    </Paper>
  );
};

export default CreateBlogPage;
