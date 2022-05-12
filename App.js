import './App.css';
import React from 'react';
import FooterComponent from './components/FooterComponent';
import ListTenantComponent from './components/ListTenantComponent';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import CreateTenantComponent from './components/CreateTenantComponent';
function App() {
  return (
    <div>
		<Router>
			<div className='container'>
				<HeaderComponent/>
				<div className='container'>
				<Switch>
					<Route path="/" exact component={ListTenantComponent}></Route>
					<Route path="/create" component={CreateTenantComponent}></Route>
				</Switch>
				</div>
				<FooterComponent/>
			</div>
		</Router>
	</div>
      

  ); 
}

export default App;
