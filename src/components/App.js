import React, { Component } from "react";
import Form from "react-jsonschema-form";
import Widgets from "./Widgets";

const schema = {
  title: "Waardeovername",
  type: "object",
  required: ["title"],
  properties: {
    naam: {
      type: "string",
      title: "Naam"
    },
    psnId: {
      type: "string",
      title: "Pensioennummer",
    },
    title: {
      type: "string",
      title: "Title",
      default: "A new task"
    },
    done: {
      type: "boolean",
      title: "Done?",
      default: false
    }
  }
};

const uiSchema = {
  naam: {
    "ui:widget": "inlineText"
  }
};

const log = (type) => console.log.bind(console, type);

const App = () => (
  <Form
    schema={schema}
    uiSchema={uiSchema}
    widgets={Widgets}
    onChange={log("changed")}
    onSubmit={log("submitted")}
    onError={log("errors")}
  />
);

export default App;