import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";




export default class App extends Component {

  constructor() {
    super();
    this.state = {
      mode: "light",
      text: "dark",
      progress : 0,
      
    };
}


 setProgress = (progress) => {
  this.setState({progress:progress})
}
apikey = process.env.REACT_APP_API_KEY

  render() {
  
    const toggleMode = () => {
      if (this.state.mode === "light") {
        this.setState({mode:"dark"});
        this.setState({text:"light"});
        console.log('if block')
        document.body.style.backgroundColor = "#262626";
        // showAlert("Dark Mode has been enabled", "success");
      } else {
        this.setState({mode:"light"});
        this.setState({text:"dark"});
        console.log('else block')
        document.body.style.backgroundColor = "white";
        // showAlert("Light Mode has been enabled", "success");
      }
    };
    return (
      <div>
        <Router>
      <LoadingBar
        color='#f11946'
        height={3}
        progress={this.state.progress}
        
      />  
        <NavBar mode={this.state.mode} text={this.state.text} toggleMode={toggleMode}/>
        <Switch>
          <Route exact path="/" element={<News setProgress={this.setProgress} mode={this.state.mode} apikey= {this.apikey} key="general" pageSize={6} text={this.state.text} category={"general"}/>}></Route>
          <Route exact path="/business" element={<News setProgress={this.setProgress} apikey= {this.apikey} key="business" pageSize={6} text={this.state.text} category={"business"}/>}></Route> 
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apikey= {this.apikey} key="entertainment" pageSize={6} text={this.state.text} category={"entertainment"}/>}></Route> 
          <Route exact path="/health" element={<News setProgress={this.setProgress} apikey= {this.apikey} key="health" pageSize={6} text={this.state.text} category={"health"}/>}></Route>
          <Route exact path="/science" element={<News setProgress={this.setProgress} apikey= {this.apikey} key="science" pageSize={6} text={this.state.text} category={"science"}/>}></Route>
          <Route exact path="/sports" element={<News setProgress={this.setProgress}  apikey= {this.apikey} key="sports" pageSize={6} text={this.state.text} category={"sports"}/>}></Route>
          <Route exact path="/technology" element={<News setProgress={this.setProgress} apikey= {this.apikey} key="technology" pageSize={6} text={this.state.text} category={"technology"}/>}></Route> 
        </Switch>
        </Router>
        
        
       
      </div>
    )
  }
}


