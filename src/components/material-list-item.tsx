import React from "react";
import { ListItem, ListItemText, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";

const MaterialListItem: React.FC<{
  id: number;
  title: string;
  description: string;
  preview: string;
}> = ({ id, title, description, preview }) => {
  return (
    <Link style={{ textDecoration: "none" }} href={`/materials/${id}`}>
      <ListItem alignItems="flex-start" sx={{ gap: "10px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "200px",
            aspectRatio: "16/9",
          }}
        >
          <img
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              width: "auto",
              height: "auto",
              alignSelf: "center",
            }}
            alt="preview"
            src={preview}
          />
        </Box>
        <ListItemText
          primary={
            <Typography component="p" variant="h5" color="text.primary">
              {title}
            </Typography>
          }
          secondary={
            <Typography component="span" variant="body2" color="text.primary">
              {description}
            </Typography>
          }
        />
      </ListItem>
    </Link>
  );
};

export default MaterialListItem;
