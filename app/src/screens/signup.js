import React, {Component} from "react";
import {Link} from 'react-router-dom';

//import assets
import Logo from '../assets/logo.png';

import { IoCalendarClearOutline } from 'react-icons/io5';
import {SiGoogleclassroom} from 'react-icons/si';
import { LineChart, Line, XAxis, YAxis, ReferenceLine, Tooltip } from "recharts";

import data from '../data.json';


class Singup extends Component {
  constructor(props) {
    super(props);
  } 
  
    render() {
      const styles = {
        fontFamily: "sans-serif",
        textAlign: "center"
      };
   
      
          return (
         <div style={{}}>
            <div style={{alignContent:'left', width: '100%', display:'inline-block', textAlign:'left', alignSelf:'left', position:'absolute', left:0, top:0}}>
            <img src={Logo} height="40vh" width="60vh" style={{ marginRight:'2.5%', float:'left'}}></img>
            <Link to="/new"> <div style={{fontFamily:"Montserrat", fontWeight:400, fontSize:"2.75vh", color:"#FFF", marginTop:10}}>Home</div></Link>
            </div >
            <div style={{marginTop:'10%', alignContent:'center'}}>
              
                <div style={{ marginRight:"5%", display:'inline-block'}}>
                <Link to="/class"><button type="primary" style={{backgroundColor:"#2196F3", height:"5.5vh", width: "120vh", border:"none", borderRadius:40, color:'white', fontFamily:'Montserrat',  fontSize:'2vh'}}> <IoCalendarClearOutline/> Signup</button></Link>
                <br></br>
                <input style={{fontSize:20,borderRadius:10, height:25, marginTop:'1.5%'}} placeholder="First name"></input>
                <input style={{fontSize:20,borderRadius:10, height:25, marginTop:'1.5%'}} placeholder="Last name"></input>
                <br></br>
                <input style={{fontSize:20,borderRadius:10, height:25, marginTop:'1.5%'}} placeholder="Email address"></input>
=                <br></br>
                <input style={{fontSize:20,borderRadius:10, height:25, marginTop:'1.5%'}} placeholder="Password"></input>
                <input style={{fontSize:20,borderRadius:10, height:25, marginTop:'1.5%'}} placeholder="Confirm Password"></input>
              <br></br>
                <button style={{backgroundColor:'#2196F3', borderRadius:10, padding:'2.5%', color:'#FFFFFF', marginTop:'5%'}}>Register</button>
               
                </div>

            </div>
                                

         </div>   
        );
    }
}

export default Singup;