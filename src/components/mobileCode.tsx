import React from "react";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Phone = () => {
  return (
    <div >
      <label>Téléphone</label>
     
      <PhoneInput
        
        country={"tn"}
        value="+216 50450450 "
         inputStyle={{width:'440px',height: '45px'}} 
         onChange={phone => console.log({ phone })}
      />
      </div>
)}
export default Phone