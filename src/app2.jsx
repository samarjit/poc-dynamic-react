import React, { Component } from 'react';

import ComponentContainer from './ComponentContainer';
//import * as Babel from 'babel-standalone'
// import D1 from './D1'

class App extends Component {
  
  constructor(){
    super();
    this.state = {};
    this.state.components = [];
    
  }
  
  loadPlugins() {
    // console.log(this.state.pluginName)
    
    // var input = '';
    // 
    require.ensure([],() => {
        this.state.components.push(this.state.pluginName);
        ComponentContainer[this.state.pluginName] =   require("./D1"/*+this.state.pluginName*/).default;
        this.forceUpdate();
      })

    // fetch("D1.bundle.js").then((resp)=>{

      
        // ComponentContainer['D1'] = D1;
    //   resp.text().then((input) => { 
    //     console.log("load plugins")
    // //     //var input = 'const getMessage = () => "Hello World";';

    //     var output;
    //     try {
    //       // output = Babel.transform(input, { presets: ['react', 'es2015'] }).code;
    //       document.getElementById('output').innerHTML = input;
    //       // eval(output)
    //     }catch(e){ console.log("err",e); }
        
    //     ComponentContainer['D1']=eval(input);
        this.forceUpdate();
    //   });

    // });
  }


  render() {

    



    return (

      <div>

        <h2>Dynamic Components Loading</h2>
        <input type="text"  onChange={ (e) => this.state.pluginName = e.target.value} placeholder="Plugin Name D1,D2,...D4 etc"/>
        <button onClick={this.loadPlugins.bind(this)}>Load</button>
        {this.state.components.map((componentId) => {

          let Component = ComponentContainer[componentId];

          return <Component>{componentId}</Component>;

        })}
        
        
      </div>

    );

  }

}



export default App;