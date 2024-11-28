import React from "react";
import Grid from "@mui/material/Grid";
import GridStyles from "./GridStyles";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const GridExemplo = ({ data }) => {
  return (
    <Grid 
      container 
      spacing={3} 
      sx={GridStyles.container} 
      className="container"
    >
      {data.map((item) => (
        <Grid 
          item 
          xs={12} 
          sm={6} 
          md={4} 
          key={item.id} 
          sx={GridStyles.item} 
          className="item"
        >
          <Card>
            <CardMedia
              component="img"
              height="200"
              image={item.image}
              alt={item.description}
              sx={GridStyles.image}
            />
            <CardContent>
              <Typography variant="h6" sx={GridStyles.title}>
                {item.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default GridExemplo;
