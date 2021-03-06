import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import News from "./components/News";


class Routing extends React.Component{
  // myStyle = {
  //   borderStyle: "dotted dash",
  //   marginTop: "0px",
  //   position: "absolute",
  //   right: "40%"
  // }

    render() {
  return (
    <Router>
      <div>
        {/* <div style={this.myStyle}>Blake Tholen Clark</div> */}
        <nav>
        <div className="topnav" id="myTopnav">
          <Link  id="home" to="/">Home</Link>

          <Link  to="/About/">About</Link>

          <Link to="/News/">News</Link>

          <Link to="/Contact/">Contact</Link>
          <Link className="myname" to="">LS3</Link>
          {/* <Link href="javascript:void(0);" className="icon" onClick="myFunction()">
            <i className="fa fa-bars"></i>
            </Link> */}

          
          
          </div>
        
          
        </nav>


      </div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/About/" component={About} />
        <Route path="/Contact/" component={Contact} />
        <Route path="/News/" component={News} />
        
        
        </Switch>
        
    </Router>
  );
}
}
export default Routing;