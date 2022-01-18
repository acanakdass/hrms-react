import { Route } from 'react-router';
import { Container } from 'semantic-ui-react';
import './App.css';
import Login from './layouts/Auth/Login';
import Dashboard from './layouts/Dashboard';
import Navi from './layouts/Navi';
import MaterilaUiTestPage from './pages/MaterilaUiTestPage';


function App() {
  return (
    <div className="App">
      <Navi />
      <Container >
        <Route exact path="/auth/login" component={Login} />
        <Route path="/" component={Dashboard} />
        <Route path="/materialTest" component={MaterilaUiTestPage} />
      </Container>
    </div>
  );
}

export default App;

