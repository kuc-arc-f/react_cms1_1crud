import React, { Component } from 'react';
//import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

import Head from './component/Layouts/Head';
import About from './component/About';
import Home from './component/Home';
import Show from './component/Show';
import Test from './component/Test';
/* task */
import TaskCreate from './component/Task/Create';
import TaskIndex from './component/Task/Index';
import TaskEdit from './component/Task/Edit';
// Edit
//
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Head />
            <Route exact path='/' component={Home}/>
            <Route path="/show/:id" component={Show} />
            <Route path='/about' component={About}/>
            <Route path='/test' component={Test}/>
            <Route path='/task' component={TaskIndex}/>
            <Route path='/task_create' component={TaskCreate}/>
            <Route path='/task_edit/:id' component={TaskEdit}/>
            
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
