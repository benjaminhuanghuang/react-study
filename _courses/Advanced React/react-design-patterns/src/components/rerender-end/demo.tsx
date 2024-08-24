import React, {useState} from 'react'
//
import { Button } from "./button";
import { SlowComponent } from "./slow-component";
import { AdditionalComplexThings, BlaBla } from "./dummy-components";
import { ModalDialog } from "./modal-dialog";
import ToggleButtonWithDialog from './toggle-button';

/*
    Only the ToggleButtonWithDialog component is rerendered
*/
const demo = () => {
    const [visible, setVisible] = useState(false);
  return (
    <>
      <ToggleButtonWithDialog />
      <SlowComponent />
      <BlaBla />
      <AdditionalComplexThings />
    </>
  )
}

export default demo