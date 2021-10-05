import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from './Container';
import AppBar from './AppBar';
import AllHotDogsView from '../views/AllHotDogsView';
import { menuSelectors } from '../redux';

function App() {
  const dispatch = useDispatch();


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
