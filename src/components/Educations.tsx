import { Box, Typography } from '@mui/material';

const Education: React.FC = () => {
  return (
    <Box id="education" sx={{ padding: '4rem 2rem', textAlign: 'center', backgroundColor: '#F6F1D1' }}>
      <Typography variant="h4" sx={{ color: '#006D77' }}>Education</Typography>
      
      <Typography variant="h6" sx={{ marginTop: '2rem' }}>B.E. in Computer Science Engineering (2019 - 2023)</Typography>
      <Typography variant="body2" sx={{ marginTop: '0.5rem', color: '#006D77' }}>
        Prince Dr. K. Vasudevan College of Engineering and Technology, Chennai
      </Typography>
    </Box>
  );
};

export default Education;
