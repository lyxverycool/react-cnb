import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory,IndexRoute} from 'react-router';
import First from './components/first';
import Plate from './components/plate';
import About from './components/about';
import Contact from './components/contact';
import Fun from './components/fun';
import List from './components/list';
import Details from './components/details';

require ("./style/common.css");
require ("./style/index.css");
require ("./style/plate.css");
require ("./style/test.scss");

class Main extends Component {
    render() {
      return (
          <div>{this.props.children}</div>
      );
    }
};
const route =(
	<Router history={hashHistory}>
       <Route path="/" component={Main}>
       	   <IndexRoute component={First}/>
	         <Route path="/first" component={First}/>
	    	   <Route path="/plate" component={Plate}/>
	    	   <Route path="/about" component={About}/>
	    	   <Route path="/contact" component={Contact}/>
	    	   <Route path="/fun" component={Fun}/>
	    	   <Route path="/list" component={List}/>
           <Route path="/details/:id" component={Details}/>  
  	   </Route>
  	</Router>
)
ReactDOM.render(	
	 <div>
      {route}
   </div>,
  document.getElementById('app')
);



