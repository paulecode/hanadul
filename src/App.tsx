import NavBar from './components/NavBar/NavBar';
import Homescreen from './screens/Homescreen';

function App() {
  return (
    <div className="w-screen h-dvh flex flex-col dark:bg-neutral-800 bg-neutral-50">
      <NavBar />
      <Homescreen />
    </div>
  );
}

export default App;
