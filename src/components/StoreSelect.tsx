import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Link } from "react-router-dom";
import { useGetStoresQuery } from "../store/services/store";
import { useSelector } from "react-redux";
import type { RootState } from "../store";

type Props = {
  selected: string;
  handleChange: (event: SelectChangeEvent) => void;
};
const StoreSelect = ({ selected, handleChange }: Props) => {
  const user = useSelector((state: RootState) => state.user);

  const { data, isLoading, isSuccess } = useGetStoresQuery(user?.uid);
  const { stores } = data || [];

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
          {isLoading && <MenuItem value="loading">Loading...</MenuItem>}
          {!isLoading &&
            stores.map((store) => (
              <MenuItem
                key={store.store_name}
                value={store.store_name}
                sx={{
                  width: "100%",
                }}
                selected={store.store_name === stores[0].store_name}
              >
                <Link to={`/admin/${store.store_name}/home`}>
                  {store.store_name}
                </Link>
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </section>
  );
};

export default StoreSelect;
