import React, {Component} from "react";
import {Link} from 'react-router-dom';
import './landing.css';

//import assets
import Logo from '../../assets/logo.png';

import { IoCalendarClearOutline } from 'react-icons/io5';
import {SiGoogleclassroom} from 'react-icons/si';
import { LineChart, Line, XAxis, YAxis, ReferenceLine, Tooltip } from "recharts";

import data from '../../data.json';
import BasicTable from "./table";


class Landing extends Component {
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
                <Link to="/class"><button type="primary" style={{backgroundColor:"#2196F3", height:"5.5vh", width: "120vh", border:"none", borderRadius:40, color:'white', fontFamily:'Montserrat',  fontSize:'2vh'}}> <IoCalendarClearOutline/>  Health data summary</button></Link>
                <br></br>
                <BasicTable></BasicTable>
               

                
                <br></br>
                <Link to="/class"><button type="primary" style={{backgroundColor:"#529EB6", height:"5.5vh", width: "120vh", border:"none", borderRadius:40, color:'white', fontFamily:'Montserrat',  fontSize:'2vh', marginTop:'2.5%'}}> <SiGoogleclassroom/>   Dashboard </button></Link>
                <br></br>
                <LineChart width={1700} height={300} data={data} margin={{ top: 40, right: 40, bottom: 40, left: 0 }} style={{fontSize:15}}>
                    <Line type="monotone" dataKey="Weight" stroke="#298784" strokeWidth={1} />
                    <Line type="monotone" dataKey="Bloodsugar" stroke="#298184" strokeWidth={1} />
                    <Line type="monotone" dataKey="SpO2" stroke="#A98184" strokeWidth={1} />
                    <Line type="monotone" dataKey="Heartrate" stroke="#C98184" strokeWidth={1} />

                    
                    <XAxis dataKey={"Time"} />
                    <YAxis />
                    <Tooltip /> 
                </LineChart>
                </div>

            </div>
                                

         </div>   
        );
    }
}

export default Landing;