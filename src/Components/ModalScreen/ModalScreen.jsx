import React, { Component } from 'react';
import { Button, FormGroup, InputGroup, FormControl, Glyphicon } from 'react-bootstrap';
import Axios from 'axios';

import './ModalScreen.scss';

export default class ModalScreen extends Component {
   state = {};

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
         <div className="innerModal">
            <h4>GoBuddy is here to help you! You can type something like 'I want to buy multiple domains' or 'Secure my site', and let GoBuddy take you to where you need to go!"</h4>
            
            <FormGroup>
               <InputGroup id="queryInput">
                  <FormControl type="text" placeholder="How much is my domain worth?" onSubmit={() => console.log("SUBMIT")}/>
                  <InputGroup.Addon className="glyphbtn">
                  {/* <Glyphicon glyph="music" /> */}
                     <Button bsStyle="primary" bsSize="xsmall">
                        <Glyphicon glyph="check" onClick={() => console.log("SUBMIT-CLICK")}></Glyphicon>
                     </Button>
                  </InputGroup.Addon>
               </InputGroup>
            </FormGroup>

            <hr/>
            <p>OR</p>
            <hr/>
            
            <div className="btnContainer">
               <Button className="gdbutton" bsStyle="success" onClick={() => this.props.onClick('NEW')} block>I'm new to GoDaddy!</Button>
            </div>
         </div>
      );
   }

   renderNew() {
      return (
         <div className="innerModal">
            <h4>Yeng, get to coding you pussy!</h4>
            
            <div className="btnContainer">
               <Button className="gdbutton" bsStyle="success" onClick={() => this.props.onClick('SPLASH')} block>YENG!!!</Button>
            </div>
         </div>
      );
   }

   render() {
      return (
         <div className="modalContainer">
            {this.props.type == "NEW" ? this.renderNew() : this.renderSplash()}            
         </div>
      );
   }
}