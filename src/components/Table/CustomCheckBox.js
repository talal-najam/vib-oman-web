import { Checkbox, FormControlLabel } from "@material-ui/core";
import React from "react";
import { Controller } from "react-hook-form";

const CustomCheckBox = ({ control, label, name }) => {
  return (
    <FormControlLabel
      control={
        <Controller
          name={name}
          control={control}
          defaultValue={false}
          render={({ field }) => <Checkbox {...field} />}
        />
      }
      label={label}
    />
  );
};

export default CustomCheckBox;
