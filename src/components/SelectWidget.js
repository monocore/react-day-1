import React from "react";
import Select2 from "react-select2-wrapper";

const SelectWidget = (props) => {
  return (
    <Select2
      options={
        {
          placeholder: 'Selecteer een pensioenuitvoerder',
        }
      }
    />
  );
};

export default SelectWidget;