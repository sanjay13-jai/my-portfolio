import { Box, Typography, Link, IconButton } from '@mui/material';
import { Email, LinkedIn, Phone } from '@mui/icons-material';

const Contact: React.FC = () => {
  return (
    <Box id="contact" sx={{ padding: '4rem 2rem', textAlign: 'center', backgroundColor: '#FF6B6B' }}>
      <Typography variant="h4" sx={{ color: '#FFFFFF' }}>Contact Me</Typography>

      <IconButton href="mailto:sanjay1332002@gmail.com" sx={{ margin: '1rem' }}>
        <Email sx={{ color: '#FFFFFF' }} />
      </IconButton>

      <IconButton href="https://www.linkedin.com/in/sanjay-vijayakumar01" sx={{ margin: '1rem' }}>
        <LinkedIn sx={{ color: '#FFFFFF' }} />
      </IconButton>

      <IconButton href="tel:+918056079408" sx={{ margin: '1rem' }}>
        <Phone sx={{ color: '#FFFFFF' }} />
      </IconButton>

      <Typography variant="body1" sx={{ marginTop: '1rem', color: '#FFFFFF' }}>
        Email: <Link href="mailto:sanjay1332002@gmail.com" sx={{ color: '#FFFFFF' }}>sanjay1332002@gmail.com</Link>
      </Typography>

      <Typography variant="body1" sx={{ marginTop: '0.5rem', color: '#FFFFFF' }}>
        Phone: +91 8056079408
      </Typography>
    </Box>
  );
};

export default Contact;
