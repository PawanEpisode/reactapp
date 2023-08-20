import React from 'react';
import ReactDom from 'react-dom';
import './Modal.css';

import { ReactComponent as Cross } from "../../assets/icons/cut.svg";

export default function Modal({ open, children, onClose, heading, continueButtonText }) {
  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div className='modal-overlay' onClick={onClose}/>
      <div className='modal-container'>
        <div className='modal-header'>
            <span className='modal-heading'>{heading}</span>
            <span className="modal-close" onClick={onClose}><Cross /></span>
        </div>
        
        {children}

        <div className='modal-footer'>
        <button className='modal-footer-btn' onClick={onClose}>{continueButtonText}</button>
        </div>
      </div>
    </>,
    document.getElementById('portal')
  )
}