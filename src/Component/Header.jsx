import React from 'react';
import '../index.css';
let btn ={
    backgroundColor:'transparent',
    color:'seagreen',
    border:'2px solid seagreen',
    outline:'none',
    padding:'14px 16px',
    borderRadius:'10px',
    fontSize:'20px',
    fontWeight:'600'
}

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Name:"Shah",
            course: "Adit 🚀", 
            greet:'Welcome to React World 🌏'  

        }
    }

    action(){
        this.setState(
            {
                greet:'Wow wonderful your just subscribe us now 🔥' 
            }
        )
    }

   


   render(){
       return(
           <div>
               <h1>{this.state.greet}</h1>
               <h1>Hello {this.state.Name}</h1>
               <h1>Your Course is {this.state.course}</h1>
               <button style={btn}onClick={()=> this.action()} >Subscribe now</button>
           </div>
       );
   }
}


export default Header;