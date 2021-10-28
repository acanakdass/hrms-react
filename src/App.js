import { Route } from 'react-router';
import { Container, Sidebar } from 'semantic-ui-react';
import './App.css';
import Login from './layouts/Auth/Login';
import Dashboard from './layouts/Dashboard';
import Navi from './layouts/Navi';


function App() {
  return (
    <div className="App">
      <Navi />
      <Container >
        <Route exact path="/auth/login" component={Login} />
        <Dashboard />
      </Container>
    </div>
  );
}

export default App;
