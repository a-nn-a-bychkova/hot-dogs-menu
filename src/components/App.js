import { useDispatch } from 'react-redux';
import Container from './Container';
import AppBar from './AppBar';
import AllHotDogsView from '../views/AllHotDogsView';

function App() {
  return (
    <>
      <AppBar />
      <Container>
        <AllHotDogsView />
      </Container>
    </>
  );
}

export default App;
