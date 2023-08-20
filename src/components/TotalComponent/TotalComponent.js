import React from 'react';
import './TotalComponent.css';

const TotalComponent = ({ name, value, icon, isIconCssApplied}) => {
  return (
    <div className='total-component-container'>
        <span className='total-component-container-text'>{name}</span>
        <div className='total-component-inner-container'>
            <span className={`${isIconCssApplied ? "total-component-container-icon": ""}`}>{icon}</span>
            <span className='total-component-container-value'>{value}</span>
        </div>
    </div>
  )
}

export default TotalComponent