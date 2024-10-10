import { Box, Typography } from '@mui/material';

const Experience: React.FC = () => {
  return (
    <Box id="experience" sx={{ padding: '4rem 2rem', textAlign: 'center', backgroundColor: '#F6F1D1' }}>
      <Typography variant="h4" sx={{ color: '#006D77' }}>Professional Experience</Typography>
      
      <Box sx={{ marginTop: '2rem', maxWidth: '800px', margin: 'auto' }}>
        <Typography variant="h6">Frontend Developer - Tito (July 2023 - Present)</Typography>
        <Typography variant="body2" sx={{ marginTop: '0.5rem', color: '#006D77' }}>
          Developed the HydraSave web application for Nitto, a data normalization tool that enables users to input raw data 
          processed and displayed in graphical and tabular formats. I built dynamic user interfaces using React.js and 
          Next.js, implemented user authentication, and collaborated with backend developers to improve website functionality.
          I utilized Jira for project management and Git for version control.
        </Typography>
      </Box>
      
      <Box sx={{ marginTop: '2rem', maxWidth: '800px', margin: 'auto' }}>
        <Typography variant="h6">AI Chatbot Developer (Personal Project)</Typography>
        <Typography variant="body2" sx={{ marginTop: '0.5rem', color: '#006D77' }}>
          Developed an AI chatbot named JAISAN using Ollama's LLM (Llama 3.1) integrated with Langchain. The chatbot 
          features a user-friendly interface developed with Streamlit, facilitating engaging conversations. It dynamically 
          processes user inputs, delivering relevant and context-aware responses in real-time.
        </Typography>
      </Box>
    </Box>
  );
};

export default Experience;
