import React, { Component } from 'react';
import { ButtonToolbar, Button, FormGroup, InputGroup, FormControl, Glyphicon } from 'react-bootstrap';
import Axios from 'axios';
import AssistModal from './AssistModal';
import './ModalScreen.scss';
const wellStyles = { maxWidth: 450, margin: '0 auto ', color:'white'};

export default class ModalScreen extends Component {
   state = {
      onDomain:false
   };

   submit() {
      let options = {
         method: 'POST',
         headers: { 'content-type': 'application/x-www-form-urlencoded' },
         url: 'http://localhost:8080/api/ENDPOINT_HERE',
         data: {} //BODY goes here
      }

      Axios(options)
         .then((res) => {
            //You have data
         }).catch((err) => {
            console.log(err);
         })
   }


   renderSplash() {
      return (
         <div style={{backgroundColor:'#49a34c', textAlign:'center'}}>
         <div className="innerModal">
         <img
               src="./assets/GD_HEAD_RGB_FC.svg"
               type="image/svg+xml"
               style={{height:'15vh'}}
            >
            </img>
            <h4 style={{marginRight:'20px', marginLeft:'20px', marginBottom:'20px', color:'white'}}>GoBuddy is here to help you!<br/><br/> Type what you need and we'll send you in the right direction.</h4>
            {/* <h4>GoBuddy is here to help you! You can type something like 'I want to buy multiple domains' or 'Secure my site', and let GoBuddy take you to where you need to go!"</h4> */}
            <FormGroup style={{marginRight:'40px', marginLeft:'40px', marginBottom:'20px'}}>
               <InputGroup id="queryInput">
                  <FormControl type="text" placeholder="Try: how much is my domain worth?" onSubmit={() => console.log("SUBMIT")}/>
                  <InputGroup.Addon className="glyphbtn">
                  {/* <Glyphicon glyph="music" /> */}
                     <Button bsStyle="primary" bsSize="xsmall" style={{color:'black', backgroundColor:'white'}}>
                        <Glyphicon glyph="chevron-right" onClick={() => this.setState({onDomain:true})}></Glyphicon>
                     </Button>
                  </InputGroup.Addon>
               </InputGroup>
            </FormGroup>

            <p style={{color:'white'}}>OR</p>
            <div style={wellStyles}>

            <div className="btnContainer" style={{marginTop:'20px'}}>
               <Button style={{marginLeft:'40px', marginRight:'40px', marginBottom:'20px', backgroundColor:'#d02f85', borderColor:'#d02f85' }}
               className="gdbutton" bsStyle="success" onClick={() => this.props.onClick('NEW')} block>I'm new to GoDaddy!</Button>
            </div>
            </div>
         </div>
         </div>
      );
   }

   // renderNew() {
   //    return (
   //       <div className="innerModal">
   //          <h4>Yeng, get to coding you pussy!</h4>
            
   //          <div className="btnContainer">
   //             <Button className="gdbutton" bsStyle="success" onClick={() => this.props.onClick('SPLASH')} block>YENG!!!</Button>
   //          </div>
   //       </div>
   //    );
   // }
   
   renderDomain() {
      return (
         <div style={{backgroundColor:'#49a34c', textAlign:'center'}}>
         <div className="innerModal">
         <img
               src="./assets/GD_HEAD_RGB_FC.svg"
               type="image/svg+xml"
               style={{height:'15vh'}}
            >
            </img>
            <h4 style={{marginRight:'20px', marginLeft:'20px', marginBottom:'20px', color:'white'}}>GoBuddy is here to help you!<br/><br/> Type what you need and we'll send you in the right direction.</h4>
            <FormGroup style={{marginRight:'40px', marginLeft:'40px', marginBottom:'20px'}}>
               <InputGroup id="queryInput">
                  <FormControl type="text" placeholder="" onSubmit={() => console.log("SUBMIT")}/>
                  <InputGroup.Addon className="glyphbtn">
                  {/* <Glyphicon glyph="music" /> */}
                     <Button bsStyle="primary" bsSize="xsmall" style={{color:'black', backgroundColor:'white'}}>
                        <Glyphicon glyph="chevron-right" ></Glyphicon>
                     </Button>
                  </InputGroup.Addon>
               </InputGroup>
            </FormGroup>
            <h4 style={{marginRight:'20px', marginLeft:'20px', marginBottom:'20px', color:'white'}}>Check out our comprehensive guide for renewing your domain!</h4>
            {/* <ButtonToolbar style={{marginTop:'10px',height:'15vh', align:'center', color:'white'}}> */}
            <a target="_blank" href="https://www.godaddy.com/help/renew-my-domain-19070">
               <Button style={{height:'8vh', color:'white', backgroundColor:'#2f61a2', align:'center'}}bsStyle="primary">
               Domain Renewal Guide
               </Button>
            </a>
               {/* </ButtonToolbar> */}
         </div>
         </div>
      );
   }

   renderNew() {
      return(
         <AssistModal/>
      )
   }

   render() {
      if(this.state.onDomain) {
         return (
            <div className="modalContainer">
               {this.renderDomain()}            
            </div>
         );
      } else {
         return (
            <div className="modalContainer">
               {this.props.type == "NEW" ? this.renderNew() : this.renderSplash()}            
            </div>
         );
      }
   }
}