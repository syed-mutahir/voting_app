import React,{Component} from 'react';
import firebase from 'firebase';
import {Redirect} from 'react-router-dom';
import './css/Voting.css';

class Voting extends Component{
    state ={
        counter1:0,
        counter2:0,
        isLoggedOut:false
    };
    componentDidMount(){
       var contestant1= firebase.database().ref().child('contestants');
        contestant1.on('value',(snapshot)=>{
            var data = snapshot.val();
            this.setState({
                counter1:data.contestants1.value,
                counter2:data.contestant2.value
            });
        });
    }

    handleCounter1 = () =>{
        this.setState({
            counter1:this.state.counter1+1
        });
     setTimeout(()=>{
     const data = {value:this.state.counter1}
     firebase.database().ref().child('contestants')
     .child('contestants1').update(data).then(()=>{this.setState({isLoggedOut:true})});
     }
     ,500) 
    }

    handleCounter2 = () =>{
        this.setState({
            counter2:this.state.counter2+1
        })
        setTimeout(()=>{
            const data = {value:this.state.counter2}
            firebase.database().ref().child('contestants')
            .child('contestant2').update(data).then(()=>{this.setState({isLoggedOut:true})});
            }
            ,500)
        
    }
    render(){
        if(this.state.isLoggedOut===true)
        {
            return <Redirect to="/signin" />
        }
        else
        {
            return(
                <div className="votingContainer">
                    <h1 style={{textAlign:'center'}}>Voting App</h1>
                    <div className="innerContainer">
                        <div className="rightSideBar">
                            <p>{this.state.counter1}</p>
                            <button onClick={this.handleCounter1}>vote 1</button>
                        </div>
                        <div className="leftSideBar">
                            <p>{this.state.counter2}</p>
                            <button onClick={this.handleCounter2}>vote 2</button>
                        </div>
                    </div>
                </div>
            );
        }
    
    }
}
export default Voting;