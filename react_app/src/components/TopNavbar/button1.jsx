import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button} from 'react-bootstrap'


function Button1() {
    return (
    <div className="text-center">
    <Button onClick={() => window.location = 'mailto:scottwright.qrf@gmail.com'}>Contact Us</Button>
    </div>
    );
  }

export default Button1;