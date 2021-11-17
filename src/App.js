import './css/style.css';
import Mes from './images/John-Doe.jpg';
import About from './component/about.js';
import Conta from './component/contcat.js';
import Footer from './component/footer.js';
import Navve from './component/Navbar.js';
import Proj from './component/project.js';
import Proj1 from './images/proj1.jpg';
import Proj2 from './images/proj2.jpg';
import Proj3 from './images/proj3.jpg';
import Proj4 from './images/proj4.jpg';

function App() {
  const name = "John Doe"
  const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptatibus ex natus quis beatae perspiciatis repellat laudantiumaliquam"
  const projects = [{name:"project1",src:Proj1},{name:"project2",src:Proj2},{name:"project3",src:Proj3},{name:"project4",src:Proj4}]
  const year= "2020"
  return (
    <div className="App">
     <Navve name={name} />
     <About img={Mes} name={name} />
     <Proj projects={projects} lorem={lorem} />
     <Conta/>
     <Footer year={year} />
     
     

    </div>
  );
}

export default App;
