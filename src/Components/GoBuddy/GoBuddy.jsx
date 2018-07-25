import React, { Component } from 'react';
import Modal from 'react-responsive-modal';

import './GoBuddy.scss';

import ModalScreen from '../ModalScreen/ModalScreen';

export default class GoBuddy extends Component {
   state = {
      mouseOver: false,
      chatboxLoading: false,
      modalOpen: false
   };

   animateLogo(mouseOver) {
      this.setState({ mouseOver });

      if(mouseOver)
         this.setState({ chatboxLoading: true });
      else if(!mouseOver && this.state.chatboxLoading) {
         setTimeout(() => {
            this.setState({ chatboxLoading: false })
         }, 2000);
      }
   }

   closeModal() {
      this.setState({ modalOpen: false });
   }

   renderModal() {
      console.log("Modal Open: ", this.state.modalOpen);
      return (
         <Modal classNames={{ modal: 'modalContainer' }} open={this.state.modalOpen} onClose={this.closeModal.bind(this)} center>
            <ModalScreen />
         </Modal>
      );
   }

   render() {
      console.log("State: ", this.state);
      return (
         <div className="gobuddy">
            <img
               className={this.state.mouseOver ? "gdhead-animation" : ""}
               src="./assets/GD_HEAD_RGB_FC.svg"
               type="image/svg+xml"
               onMouseEnter={() => this.animateLogo(true)}
               onMouseLeave={() => this.animateLogo(false)}
               onClick={() => this.setState({ modalOpen: !this.state.modalOpen })}
            >
            </img>

            <div className={this.state.chatboxLoading ? "bubble fade-in" : "bubble fade-out"}>
               <div style={{opacity: "1 !important"}}>Need help navigating GoDaddy?</div>
            </div>
            
            {this.renderModal()}
         </div>
      );
   }
}