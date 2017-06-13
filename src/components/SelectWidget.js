import React from "react";
import Select2 from "react-select2-wrapper";
import puos from "../json/puos.json";

const SelectWidget = (props) => {
  return (
    <Select2
      className="form-control"
      data={puos}
      options={
        {
          placeholder: 'Selecteer een pensioenuitvoerder',
        }
      }
    />
  );
};

export default SelectWidget;