import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import './App.css';
import TourCard from './components/TourCard';

function App() {
  return (
    <div className="App">

      <Container >
        <Grid container spacing={8}>
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
          

        </Grid>
      </Container>
 
      
    </div>
  );
}

export default App;
