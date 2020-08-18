import React,{Component} from "react";

class Forms extends Component{
    constructor(props) {
        super(props);
        this.state = {value: '',password:""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
   handleChange=(event)=>{
    this.setState({value: event.target.value});
    }
    handleChangeP=(event)=> {
        this.setState({password: event.target.value});
        }

  handleSubmit=(event)=> {
    alert('A name was submitted: ' + this.state.value);
    let str=this.state.password;    
    let star="*"
    alert('A password was submitted: ' + star.repeat(str.length));
    event.preventDefault();
  }
        render(){
            return (
                <form onSubmit={this.handleSubmit}>
                  <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} /><br/>
                    Password:
                    <input type="password" value={this.state.password} onChange={this.handleChangeP}></input>
                  </label>
                  <input type="submit" value="Submit" />
                </form>
              )
    }
}
export default Forms; 