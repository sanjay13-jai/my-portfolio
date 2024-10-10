import { Box, Grid, Card, CardContent, Typography, CardActions, Button } from '@mui/material';

const projects = [
  {
    title: 'HydraSave',
    description: 'Data normalization tool built using React and Next.js',
    link: 'http://www.hydrasave.com/',
  },
  {
    title: 'AI Chatbot (JAISAN)',
    description: 'Interactive AI chatbot using Llama 3.1 and Langchain',
    link: '#',
  },
];

const Projects: React.FC = () => {
  return (
    <Box id="projects" sx={{ padding: '4rem 2rem', textAlign: 'center', backgroundColor: '#FF6B6B' }}>
      <Typography variant="h4" sx={{ color: '#FFFFFF' }}>Projects</Typography>
      
      <Grid container spacing={4} sx={{ marginTop: '2rem' }}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card sx={{ 
              backgroundColor: '#1A1F36', 
              color: '#FFFFFF', 
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 16px 32px rgba(0, 0, 0, 0.3)',
              },
              borderRadius: '15px',
            }}>
              <CardContent>
                <Typography variant="h5">{project.title}</Typography>
                <Typography variant="body2" sx={{ marginTop: '0.5rem' }}>
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href={project.link} target="_blank" color="secondary">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
