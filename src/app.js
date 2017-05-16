import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import HeaderMenu from './components/HeaderMenu.js';


class App extends Component {
	constructor(){
		super();
		this.state={
			displayCareers:true,
		};
	}

    render(){
    	let careers = "";
    	if(this.state.displayCareers === true){
    		careers = (
    			<HeaderMenu />
    		)
    	}

    	return (
    		<div>
    			{careers}
    		</div>
    	)
    }
}
ReactDOM.render(<App />, document.getElementById('app'));