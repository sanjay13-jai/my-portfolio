import { Box, Typography, LinearProgress, Grid } from '@mui/material';

const skills = [
  { name: "React.js", level: 75 },
  { name: "Next.js", level: 80 },
  { name: "JavaScript", level: 75 },
  { name: "TypeScript", level: 70 },
  { name: "Python", level: 80 },
  { name: "Django", level: 75 },
  { name: "Flask", level: 65 },
  { name: "SQL", level: 70 },
  { name: "Git", level: 90 },
  { name: "Problem Solving", level: 85 }
];

const Skills: React.FC = () => {
  return (
    <Box id="skills" sx={{ padding: '4rem 2rem', textAlign: 'center', backgroundColor: '#FF6B6B' }}>
      <Typography variant="h4" sx={{ color: '#FFFFFF' }}>Skills</Typography>
      <Grid container spacing={3} sx={{ marginTop: '2rem' }}>
        {skills.map((skill) => (
          <Grid item xs={12} sm={6} key={skill.name}>
            <Typography variant="h6" sx={{ color: '#FFFFFF', textAlign: 'left' }}>{skill.name}</Typography>
            <LinearProgress 
              variant="determinate" 
              value={skill.level} 
              sx={{ 
                height: 10, 
                borderRadius: 5, 
                backgroundColor: '#FFFFFF',
                '& .MuiLinearProgress-bar': {
                  backgroundColor: '#D9BF77',
                },
              }} 
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
