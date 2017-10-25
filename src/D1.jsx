import React from 'react';

// import D4 from './D4';



class D1 extends React.Component {
  constructor(){
    super()
    console.log("loaded D1 constructor")
  }
  render() {
    console.log("rendering D1")
    return (

      <div>
        D1y
      

      </div>

    );
  }

};


window.D1 = D1;
export default D1;