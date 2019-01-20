import React, { Component } from 'react';
import '../styles/App.css';

import Splash from './Splash';
import HomeDashboard from './HomeDashboard';
import Navigation from './Navigation';

class App extends Component {
    render() {
    
      return (  
	     	<div className="App">
	     		<Navigation />
	        	<HomeDashboard />
	     	</div>
    	);
  	}
}

export default App;
