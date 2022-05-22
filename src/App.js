import React, {Component} from 'react';
import Die from './Die';
import './App.css';

class App extends Component {
   render() {
     return (
       <div className="App">  
       <Die face='five'/>  
       <Die face='six'/>
       <Die face='one'/>
       <Die face='two'/>
       <Die face='three'/>
       <Die face='four'/>               
       </div>
     )
   }
}

export default App;
