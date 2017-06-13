import React, { Component } from "react";
import Form from "react-jsonschema-form";
import Widgets from "./Widgets";

const schema = {
  "title": "Waardeovername",
  "type": "object",
  "required": ["title"],
  "properties": {
    "naam": {
      "type": "string",
      "title": "Naam"
    },
    "psnId": {
      "type": "integer",
      "title": "Pensioennummer",
    }
  }
};

const uiSchema = {
  "naam": {
    "ui:widget": "inlineText"
  }
};

const formData = {
  "naam": "I.S. Boneva-Rensink",
  "psnId": 6205911
};

const log = (type) => console.log.bind(console, type);

const App = () => (
  <Form
    schema={schema}
    uiSchema={uiSchema}
    formData={formData}
    widgets={Widgets}
    onChange={log("changed")}
    onSubmit={log("submitted")}
    onError={log("errors")}
  >
    <button type="submit" className="btn btn-primary">Versturen</button>
  </Form>
);

export default App;