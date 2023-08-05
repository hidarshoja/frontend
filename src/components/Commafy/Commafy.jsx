import React from 'react';

export default function Commafy(num) {
  
    num.toString().replace( /\B(?=(?:\d{3})+)$/g, "," );
  
}
