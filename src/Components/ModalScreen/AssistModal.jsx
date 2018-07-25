import React, { Component } from 'react';
import { ButtonToolbar, Button, FormGroup, InputGroup, FormControl, Glyphicon } from 'react-bootstrap';
import Axios from 'axios';
import LaunchPage from '../../LaunchPage';
// import { selectModal } from '../../Actions/ActionCreators';

import './ModalScreen.scss';
const wellStyles = { maxWidth: 450, margin: '0 auto ', color:'white'};


export default class AssistModal extends Component {
   state = {
      firstQuestion: true,
      second: false,
      third: false,
      launchLoaded: false
   };
   
   renderFirst() {
      return (
         <div style={{backgroundColor:'#49a34c', textAlign:'center'}}>
         <div className="innerModal">
         <img
               src="./assets/GD_HEAD_RGB_FC.svg"
               type="image/svg+xml"
               style={{height:'15vh'}}
            >
            </img>
            <h4 style={{marginRight:'20px', marginLeft:'20px', marginBottom:'20px', color:'white'}}>What goals do you have <b>with</b> GoDaddy?</h4>
            <FormGroup controlId="formControlsTextarea" style={{marginRight:'40px', marginLeft:'40px', marginBottom:'20px'}}>
               <InputGroup id="queryInput">
                  <FormControl componentClass="textarea" style={{height:'10vh'}} type="text" placeholder="Try: I need to start an online presence for my business" onSubmit={() => console.log("SUBMIT")}/>
                  <InputGroup.Addon className="glyphbtn">
                     <Button bsStyle="primary" bsSize="xsmall" style={{color:'black', backgroundColor:'white'}}>
                        <Glyphicon glyph="chevron-right" onClick={() => this.setState({firstQuestion:false, second:true, third:false})}></Glyphicon>
                     </Button>
                  </InputGroup.Addon>
               </InputGroup>
            </FormGroup>
         </div>
         </div>
      );
   }
   
   renderSecond() {
      return (
         <div style={{backgroundColor:'#49a34c', textAlign:'center'}}>
         <div className="innerModal">
         <img
               src="./assets/GD_HEAD_RGB_FC.svg"
               type="image/svg+xml"
               style={{height:'15vh'}}
            >
            </img>
            <h4 style={{marginRight:'20px', marginLeft:'20px', marginBottom:'20px', color:'white'}}>Great! We're glad to help you create your online presence.
            </h4>
            <h5 style={{color:'white'}}>To help us find the right products for you, could you tell us if you have any technical experience?
            </h5>
            <div style={wellStyles}>
               <ButtonToolbar style={{marginTop:'10px',height:'15vh', align:'center', color:'white'}}>
                  <Button style={{height:'8vh', color:'white', backgroundColor:'#d02f85'}}bsStyle="primary">
                     I'm a developer <br/> pro!
                  </Button>
                  <Button style={{height:'8vh', color:'white', backgroundColor:'#d02f85'}} bsStyle="primary">
                     I've dabbled <br/>with HTML.
                  </Button>
                  <Button onClick={()=>this.setState({firstQuestion:false,second:false,third:true})}style={{height:'8vh', color:'white', backgroundColor:'#d02f85'}} bsStyle="primary">
                     I'm new!
                  </Button>
               </ButtonToolbar>
            </div>
         </div>
         </div>
      );
   }

   lastSegue() {
      this.props.selectModal('LAUNCH');
   }

   renderThird() {
      //call action here
      // this.props.selectModal('LAUNCH');
      return (
         <div style={{backgroundColor:'#49a34c', textAlign:'center'}}>
         <div className="innerModal">
         <img
               src="./assets/GD_HEAD_RGB_FC.svg"
               type="image/svg+xml"
               style={{height:'15vh'}}
            >
            </img>
            <h4 style={{marginRight:'20px', marginLeft:'20px', marginBottom:'20px', color:'white'}}>Don't fret! We love helping those without technical experience.
            </h4>
            <h5 style={{color:'white'}}>Would you consider having a custom web designer build your site for you?
            </h5>
            <FormGroup controlId="formControlsTextarea" style={{marginRight:'40px', marginLeft:'40px', marginBottom:'20px'}}>
               <InputGroup id="queryInput">
                  <FormControl componentClass="textarea" type="text" placeholder="" onSubmit={() => console.log("SUBMIT")}/>
                  <InputGroup.Addon className="glyphbtn">
                     <Button bsStyle="primary" bsSize="xsmall" style={{color:'black', backgroundColor:'white'}}>
                        <Glyphicon glyph="chevron-right" onClick={() => this.props.selectModal('LAUNCH')}></Glyphicon>
                     </Button>
                  </InputGroup.Addon>
               </InputGroup>
            </FormGroup>
         </div>
         </div>
      );
   }

   componentDidUpdate() {
      if(this.props.modal === "LAUNCH" && !this.state.launchLoaded)
         this.setState({ firstQuestion: false, second: false, third: false, launchLoaded: true });
   }

   render() {
      if(this.state.firstQuestion) {
         return(
            <div>
               {this.renderFirst()}
            </div>
         )
      } else if(this.state.second) {
         return(
            <div>
               {this.renderSecond()}
            </div>
         )
      } else if(this.state.third) {
         return(
            <div>
               {this.renderThird()}
            </div>
         )
      } else {
         return(
            <div>
               <LaunchPage/>
            </div>
         )
      }

   }

  
}