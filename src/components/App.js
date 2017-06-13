import React, { Component } from "react";
import Form from "react-jsonschema-form";

const schema = {
  title: "Waardeovername",
  type: "object",
  required: ["title"],
  properties: {
    title: {type: "string", title: "Title", default: "A new task"},
    done: {type: "boolean", title: "Done?", default: false}
  }
};

const log = (type) => console.log.bind(console, type);

const App = () => (
  <Form
    schema={schema}
    onChange={log("changed")}
    onSubmit={log("submitted")}
    onError={log("errors")}
  />
);

export default App;