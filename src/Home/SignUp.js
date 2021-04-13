import React,{Component} from 'react';
import firebase from 'firebase';
import Nav from './Nav';

class SignUp extends Component{
    state={
        Email:'',
        Pass:''
    }

    handleInput = (e)=>{
            this.setState({
                [e.target.name]:e.target.value
            })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        const data = this.state;
        firebase.auth().createUserWithEmailAndPassword(data.Email,data.Pass)
        .then((value)=>{console.log(value)})
        .catch((error)=>{console.log(error)})
    }
    render()
    {
        return(
            <div>
                <Nav />
            
            <form onSubmit={this.handleSubmit}>
                <input type="email" name="Email" value={this.state.Email} onChange={this.handleInput} />
                <input type="password" name="Pass"  value={this.state.Pass} onChange={this.handleInput} />
                <input type="submit" value="Sign Up" />
            </form>
            </div>
        );
    }
}
export default SignUp;