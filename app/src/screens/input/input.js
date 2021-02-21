import React, {Component} from "react";
import {Link} from 'react-router-dom';

//import assets
import Logo from '../../assets/logo.png';

import { IoCalendarClearOutline } from 'react-icons/io5';
import {SiGoogleclassroom} from 'react-icons/si';
import { LineChart, Line, XAxis, YAxis, ReferenceLine, Tooltip } from "recharts";

import data from '../../data.json';


class IInput extends Component {
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
            <Link to="/"> <div style={{fontFamily:"Montserrat", fontWeight:400, fontSize:"2.75vh", color:"#FFF", marginTop:10}}>Home</div></Link>
            </div >
            <div style={{marginTop:'10%', alignContent:'center'}}>
              
                <div style={{ marginRight:"5%", display:'inline-block'}}>
                <Link to="/class"><button type="primary" style={{backgroundColor:"#2196F3", height:"5.5vh", width: "120vh", border:"none", borderRadius:40, color:'white', fontFamily:'Montserrat',  fontSize:'2vh'}}> <IoCalendarClearOutline/> Input Health Data</button></Link>
                <br></br>
                <input style={{fontSize:20,borderRadius:10, height:25, marginTop:'1.5%'}} placeholder="Systolic blood pressure"></input>
                <input style={{fontSize:20,borderRadius:10, height:25, marginTop:'1.5%'}} placeholder="Diastolic blood pressure"></input>
                <br></br>
                <input style={{fontSize:20,borderRadius:10, height:25, marginTop:'1.5%'}} placeholder="Pulse rate"></input>
                <input style={{fontSize:20,borderRadius:10, height:25, marginTop:'1.5%'}} placeholder="Weight"></input>
                <br></br>
                <input style={{fontSize:20,borderRadius:10, height:25, marginTop:'1.5%'}} placeholder="Blood sugar level"></input>
                <input style={{fontSize:20,borderRadius:10, height:25, marginTop:'1.5%'}} placeholder="Medication"></input>
              <br></br>
                <button style={{backgroundColor:'#2196F3', borderRadius:10, padding:'2.5%', color:'#FFFFFF', marginTop:'5%'}}>Confirm</button>
               
                </div>

            </div>
                                

         </div>   
        );
    }
}

export default IInput;