import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Link } from "react-router-dom";
type Props = {
  selected: string;
  handleChange: (event: SelectChangeEvent) => void;
  stores: {
    id: string;
  }[];
};
const StoreSelect = ({ stores, selected, handleChange }: Props) => {
  return (
    <section className="space-y-4 mt-10 mb-6 shadow-sm">
      <FormControl
        sx={{
          width: "100%",
        }}
        size="small"
      >
        <Select
          id="demo-select-small"
          value={selected}
          onChange={handleChange}
          sx={{
            width: "100%",
            margin: "0",
            padding: "0",
          }}
        >
          {stores.map((store) => (
            <MenuItem
              key={store.id}
              value={store.id}
              sx={{
                width: "100%",
              }}
              selected={store.id === stores[0].id}
            >
              <Link to={`/admin/${store.id}/home`}>{store.id}</Link>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </section>
  );
};

export default StoreSelect;
