import { TextField } from "@material-ui/core";
import React from "react";
import { Controller } from "react-hook-form";

const CustomTextField = ({
  control,
  name,
  placeholder,
  label,
  autoFocus,
  type = "text",
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          placeholder={placeholder}
          fullWidth
          autoFocus={autoFocus}
          margin="dense"
          id={name}
          type={type}
        />
      )}
    />
  );
};

export default CustomTextField;
