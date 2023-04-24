import React from "react";
import { IMaterialItem } from "@/data/list";
import MaterialListItem from "@/components/material-list-item";
import { List } from "@mui/material";

const MaterialList: React.FC<{ list: IMaterialItem[] }> = ({ list }) => {
  return (
    <List>
      {list.map((item, key) => (
        <React.Fragment key={key}>
          <MaterialListItem
            id={item.id}
            preview={item.preview}
            title={item.title}
            description={item.description}
          />
        </React.Fragment>
      ))}
    </List>
  );
};

export default MaterialList;