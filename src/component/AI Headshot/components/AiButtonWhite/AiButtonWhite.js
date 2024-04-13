import React from 'react';
import './AiButtonWhite.scss';
// import { Button } from 'react-bootstrap';

export default function AiButtonWhite({children}) {
  return (
    <div>
      <button className='AiButtonWhite'>{children}</button>
    </div>
  )
}
