import React from "react";
import { useState } from "react";

function searched() {
   
    return(
        console.log("searched!")
    )
}

export default function Search(props) {
  return (
    <section>
<form>
  <label>
    
    <input type="text" name="name" placeholder="Search" onKeyUp={props.onInput}/>
  </label>
  <input type="submit" value="Submit"  onSubmit={searched()}/>
</form>
    </section>

    
  );
}
