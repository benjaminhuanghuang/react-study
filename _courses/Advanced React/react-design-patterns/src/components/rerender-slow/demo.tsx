import React, {useState} from 'react'
//
import { Button } from "./button";
import { SlowComponent } from "./slow-component";
import { AdditionalComplexThings, BlaBla } from "./dummy-components";
import { ModalDialog } from "./modal-dialog";

const demo = () => {
    const [visible, setVisible] = useState(false);
  return (
    <>
    {/* add the button */}
    <Button onClick={() => setVisible(true)}>Open Dialog</Button>
    {/* add the dialog itself */}
    {visible ? <ModalDialog onClose={() => setVisible(false)} /> : null}
    <SlowComponent />
    <BlaBla />
    <AdditionalComplexThings />
  </>
  )
}

export default demo