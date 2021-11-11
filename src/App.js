import './styles/style.css';
import Introduction from './components/Introduction';
import Navbar from './components/Navbar';
import Project from './components/Project';
import { project1 } from './assets/project1';
import { project2 } from './assets/project2';

function App() {
  return (
    <div>
      <Introduction></Introduction>
      <Navbar></Navbar>
      <Project project={project1}/>
      <Project project={project2}/>
    </div>
  );
}

export default App;
