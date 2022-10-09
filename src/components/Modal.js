import React, { useState } from "react";
import styled from "styled-components";

const Modal = ({ modalText, hideModal }) => {
   const Backdrop = styled.div`
      background-color: rgba(0, 0, 0, 0.7);
      width: 100vw;
      height: 100vh;

      position: absolute;
      top: 0;
      left: 0;

      display: flex;
      justify-content: center;
      align-items: center;

      z-index: 100;
   `;

   const ModalBg = styled.div`
      background-color: white;
      padding: 1.2rem 2.5rem 1.8rem;
      border-radius: 10px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 200;
   `;

   const Button = styled.button`
      ${"" /* margin-top: 0.5rem; */}
      background: transparent;
      border: none;

      font-size: 0.8rem;
      color: #1273af;
      font-weight: bold;

      justify-self: flex-end;
      align-self: flex-end;
      cursor: pointer;
   `;

   return (
      <Backdrop className="backdrop" onClick={hideModal}>
         <ModalBg className="modalBg">
            <h3>{modalText}</h3>
            <Button onClick={hideModal}>Theek Hai Na</Button>
         </ModalBg>
      </Backdrop>
   );
};

export default Modal;
