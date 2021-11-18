import './styles/style.css';
import Introduction from './components/Introduction';
import Navbar from './components/Navbar';
import Project from './components/Project';
import { project1, project2, project3, project4 } from './assets/project-information';

function App() {
  return (
    <div>
      <Introduction></Introduction>
      <Navbar></Navbar>
      <Project project={project1}/>
      <Project project={project2}/>
      <Project project={project3}/>
      <Project project={project4}/>
    </div>
  );
}

export default App;
