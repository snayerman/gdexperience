import React, { Component } from 'react';
import { Button, FormGroup, InputGroup, FormControl, Glyphicon } from 'react-bootstrap';

import './ModalScreen.scss';

export default class ModalScreen extends Component {
   state = {};

   render() {
      return (
         <div className="modalContainer">
            <div className="innerModal">
               <h4>GoBuddy is here to help you! You can type something like 'I want to buy multiple domains' or 'Secure my site', and let GoBuddy take you to where you need to go!"</h4>
               
               <FormGroup>
                  <InputGroup id="queryInput">
                     <FormControl type="text" placeholder="How much is my domain worth?" />
                     <InputGroup.Addon className="glyphbtn">
                     {/* <Glyphicon glyph="music" /> */}
                        <Button bsStyle="primary" bsSize="xsmall">
                           <Glyphicon glyph="check"></Glyphicon>
                        </Button>
                     </InputGroup.Addon>
                  </InputGroup>
               </FormGroup>

               <hr/>
               <p>OR</p>
               <hr/>
               
               <div className="btnContainer">
                  <Button className="gdbutton" bsStyle="success" block>I'm new to GoDaddy!</Button>
               </div>
            </div>
         </div>
      );
   }
}