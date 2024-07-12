import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Blog from "./Blog";
import Summary from "./Article";

function App(){
  return(
<Router>
  <Blog/>
  <Routes>
    <Route path="/read-more" element={<Summary/>}></Route>
  </Routes>
</Router>
  )
}

export default App;
