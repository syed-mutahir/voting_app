import React,{Component} from 'react';
import firebase from 'firebase';
import Nav from './Nav';
import {Redirect} from 'react-router-dom';

class SignIn extends Component{
    state={
        Email:'',
        Pass:'',
        isLoggedIn:false
    }

    handleInput = (e)=>{
            this.setState({
                [e.target.name]:e.target.value
            })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        const data = this.state;
        firebase.auth().signInWithEmailAndPassword(data.Email,data.Pass)
        .then(()=>{this.setState({isLoggedIn:true})
        })
        .catch((error)=>{console.log(error)})
    }
    render()
    {
        if(this.state.isLoggedIn===true)
        {
            return <Redirect to="/voting" />
        }
        else
        {
            return(
                <div>
                    <Nav />
                
                <form onSubmit={this.handleSubmit}>
                    <input type="email" name="Email" value={this.state.Email} onChange={this.handleInput} />
                    <input type="password" name="Pass"  value={this.state.Pass} onChange={this.handleInput} />
                    <input type="submit" value="Sign In" />
                </form>
                </div>
            );
        }
    }
}
export default SignIn;