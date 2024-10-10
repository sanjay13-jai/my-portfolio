import { Box, Typography } from '@mui/material';

const About: React.FC = () => {
  return (
    <Box id="about" sx={{ padding: '4rem 2rem', textAlign: 'center', backgroundColor: '#F6F1D1' }}>
      <Typography variant="h4" sx={{ color: '#006D77' }}>About Me</Typography>
      <Typography variant="body1" sx={{ marginTop: '1rem', maxWidth: '800px', margin: 'auto', color: '#006D77' }}>
        I am a Full Stack Developer with expertise in building dynamic and interactive user interfaces using React.js 
        and Next.js, as well as backend development with Python, Django, and Flask. My passion lies in creating scalable 
        and efficient web solutions that ensure cross-browser compatibility and optimal performance. 
        I enjoy collaborating with backend teams to enhance website functionality and deliver user-centric products. 
        Additionally, I am proficient in managing projects using version control systems like Git and task-tracking 
        software such as Jira, which allows for smooth collaboration and project management.
      </Typography>
    </Box>
  );
};

export default About;
