import React, { Component } from 'react';
import '../styles/App.css';

import Splash from './Splash';
import HomeDashboard from './HomeDashboard';

class App extends Component {
    render() {
    
      return (  
	     	<div className="App">
	        	<HomeDashboard />
	     	</div>
    	);
  	}
}

export default App;
