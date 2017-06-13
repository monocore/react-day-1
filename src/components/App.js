import React from "react";
import Form from "react-jsonschema-form";
import Widgets from "./Widgets";
import schema from "../json/schema.json";
import uiSchema from "../json/ui-schema.json";
import formData from "../json/form-data.json";

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