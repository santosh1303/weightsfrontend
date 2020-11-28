
import './styles.css';
import Home from './components/home/home';
import TeamWeights from './components/teamweights/teamweights';
import Login from './components/login/login';
import AddEmployee from './components/addemployee/addemployee';
import EnterWeight from './components/enterweight/enterweight';
import MyWeights from './components/myweights/myweights';
//import Container from "./components/container";
//import Footer from "./components/footer";
import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <div>
        <BrowserRouter>
          <Route exact path="/" component={Home}/>
          <Route path="/home" component={Home}/>
          <Route path="/teamweights" component={TeamWeights}/>
          <Route path="/login" component={Login}/>
          <Route path="/enterweight" component={EnterWeight}/>
          <Route path="/myweights" component={MyWeights}/>
          <Route path="/addemployee" component={AddEmployee}/>
        </BrowserRouter>
    </div>
  );
}

export default App;
