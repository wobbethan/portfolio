
import { BrowserRouter } from "react-router-dom";
import { About,Contact,Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from './components';
import Stars from "./components/canvas/Stars";
import Background from "./components/canvas/Background";




const App = () => {

  return (
    <BrowserRouter>
    <div className = "relative z-0" style = {{backgroundColor: '#022f40'}}> 
      <div className = "bg-primary bg-cover bg-no-repeat bg-center" style = {{backgroundColor: '#022f40'}}> 
          <Navbar />
          <Hero />
      </div>
     
      <StarsCanvas />

      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      
      <div className = "relative z-0 bg-primary" style = {{backgroundColor: '#000000'}}
>
        <Contact />
        <StarsCanvas />

        
      </div>
    </div>
    
    </BrowserRouter>
  )
}

export default App
