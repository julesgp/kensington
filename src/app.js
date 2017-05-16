import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import HeaderMenu from 'HeaderMenu.js';


class App extends Component {
	constructor(){
		super();
		this.state()={
			displayHeaderMenu:true,
		};
	}

    render(){
    	let displayHeader= "";
    	if(this.state.displayHeaderMenu === true){
    		showGame = (
    			<HeaderMenu />
    		)
    	}

    	return (
    	    {showGame}
    	)
    }
}
ReactDOM.render(<App />, document.getElementById('app'));