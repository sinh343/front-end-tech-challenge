import { Checkbox, FormControlLabel } from "@material-ui/core";
import React from "react";

export interface ISearchCheckboxProps {
  label: string,
  checked: boolean,
  onChange: (...arg: any[]) => void
}

export const SearchCheckbox = ({ label, checked, onChange }: ISearchCheckboxProps) => {
  return <FormControlLabel
    labelPlacement="end"
    label={label}
    control={<Checkbox color="primary" checked={checked} onChange={onChange} />}
  />
}