import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state={data:"Comment to Change Heading!", CommentList:
    
    [
      
    ] ,
    count:1
  
  };
    this.updateState = this.updateState.bind(this); 
    this.commentAddState=this.commentAddState.bind(this);

  };
  updateState(e)
  {
    this.setState({data:e.target.value});
  }
  commentAddState(e)
  {
    this.setState(
        { count:this.state.count + 1}
      );
    var value = { id:this.state.count,name:this.state.data};
    this.setState({CommentList:[...this.state.CommentList,value]});
  }

  render() {
    return (
      <div className="App">
          <img src={logo} height= "300px" alt="logo" />

          <h2>{this.state.data=="Comment to Change Heading!"? "MyApp" : this.state.data}</h2>
          <input type="text" value ={this.state.data} placeholder="Change Me!" onChange={this.updateState}/>
         <center>
          <table>
            <tr>
             {this.state.CommentList.map((person, id) => 
             <li key = {id}> 
                <strong>  id:</strong>  {person.id} <strong>Your Comment:</strong> {person.name} </li>)}
              </tr>
          <button onClick={this.commentAddState}>Add me</button> 
          </table>
          </center>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
       <Footer name="Props1" array={[1,2,3]}></Footer>
      </div>
    );
  }
}
class Footer extends Component
{
  render()
  {return (<div>
    <p><strong> I'm a Footer, buddy</strong></p>
    <p> Here are my String type and array type : {this.props.name} , {this.props.array[1]}</p>
  </div>
 ); } 

}
export default App;
