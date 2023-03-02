import React from "react";
import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";

const Textbox = () => {
  return (
    <GrammarlyEditorPlugin clientId="client_8c8KKkyqc51B1Vt9dtf7mz">
      <textarea />
    </GrammarlyEditorPlugin>
  );
};

export default Textbox;
