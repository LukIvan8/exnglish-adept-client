import React from "react";
import MaterialList from "@/components/material-list";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { RootState } from "@/state/root";

const Index = () => {
  const listing = useSelector((state: RootState) => state.materials.items);

  return (
    <div>
      <Box sx={{ width: 560, margin: "0 auto" }}>
        <MaterialList list={listing} />
      </Box>
    </div>
  );
};

export default Index;
