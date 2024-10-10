import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
const Home: React.FC = () => {
  return (
    <Box
      id="home"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        backgroundColor: '#006D77', // Deep Teal
        color: '#FFFFFF',
        padding: '0 2rem',
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h2">Hi, I'm Sanjay</Typography>
        <Typography variant="h6" sx={{ margin: '1rem 0' }}>
          Full Stack Developer | React, TypeScript, Django
        </Typography>
        <Button  variant="contained" size="large" color="secondary">
          <Link to="about" smooth={true} duration={500}>Know More</Link>
        </Button>
      </motion.div>
    </Box>
  );
};

export default Home;
