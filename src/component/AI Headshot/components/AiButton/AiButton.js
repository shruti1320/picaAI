import React from 'react';
import './AiButton.scss';
// import { Button } from 'react-bootstrap';

export default function AiButton({children}) {
  return (
    <div>
      <button className='AiButton'>{children}</button>
    </div>
  )
}
