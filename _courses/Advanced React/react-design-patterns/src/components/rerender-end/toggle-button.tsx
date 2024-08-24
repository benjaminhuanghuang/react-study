import { useState } from "react";
import { Button } from "../rerender-slow/button";
import { ModalDialog } from "../rerender-slow/modal-dialog";
import React from "react";

const ToggleButtonWithDialog = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button onClick={() => setVisible(true)}>Show dialog</Button>
      {visible && <ModalDialog onClose={() => setVisible(false)} />}
    </>
  );
};

export default ToggleButtonWithDialog;
