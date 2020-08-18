import React, { Component } from 'react';
class Lifecycle extends Component{
    
    constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
        this.hello = this.hello.bind(this);
      }
    //   static getDerivedStateFromProps(props, state) {
    //     return {favoritecolor: props.favcol };
    //   }
    componentDidMount(){
      document.title="Hellooooooo";
    }
    componentDidUpdate(){
      document.title="sandyyy";
    }
      hello=()=>{
        document.title="tadadddaaa"
         console.log("here am");
         const f="blue";
         this.setState({favoritecolor:f});
        }
      howRU=()=>{
alert("hello")
      }
      render() {
        return <div>
          <h1>My Favorite Color is {this.state.favoritecolor}</h1>
          <button onClick={this.hello}>Click Here!!!!</button>
         {this.hello}
         <form onSubmit={this.howRU}></form>
          </div>
      }
}
export default Lifecycle;