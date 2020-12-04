import { Paper, Button } from '@material-ui/core';
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import logo from '../../logo.svg';
import './App.css';

function App() {
  return (
    <Container maxWidth="sm" className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App + Material-UI
        </Typography>
        <Button variant="contained" color="primary">
          Primary Button
        </Button>
        <Button variant="contained" color="secondary">
          Secondary Button
        </Button>
    </Container>
  );
}

export default App;