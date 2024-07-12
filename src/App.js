import Homepage from './Homepage';
import './App.css';
import Video from './GoogleVideo';
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Blog from "./Blog";
import Summary from "./Article";
import Podcast from './Podcast';

function App(){
  return(
    <div>
         <Homepage/>
    <Video/>
    <Blog/>
    <Podcast/>
<Router>
  <Routes>
    <Route path="/read-more" element={<Summary/>}></Route>
  </Routes>
</Router>
    </div>

  )}
export default App;
