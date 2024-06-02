import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/hello">
          <h1>Hello</h1>
        </Route>
      </Switch>
    </Router>
  );
    
  
}

export default App;
