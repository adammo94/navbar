import React, { Component } from 'react'
import './component2.css'
import publicIP from 'react-native-public-ip';
let ajpi=null;
publicIP()
  .then(ip => {
        // '47.122.71.234'
        console.log(ip);
        console.log(ip);
        ajpi=ip;


  })
  .catch(error => {
    console.log(error);
    // 'Unable to get IP address.'
  });

export default class Component2 extends Component {

state = {cos: null, ajpi: null};

  render() {
    return (
      <div>
<p className="nic">nic nic{ajpi}</p>
      </div>
    )
  }
}
