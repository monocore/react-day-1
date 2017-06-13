import React from "react";

const InlineTextWidget = (props) => {
  return (
    <input
      type="text"
      className="form-control col-sm-10"
      value={props.value}
      required={props.required}
      onChange={(event) => props.onChange(event.target.value)}
    />
  );
};

export default InlineTextWidget;