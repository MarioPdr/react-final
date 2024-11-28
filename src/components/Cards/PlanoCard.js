import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

const PlanoCard = ({ titulo, descricao, preco }) => {
  return (
    <Card sx={{ 
      height: "100%", 
      textAlign: "center", 
      transition: "transform 0.3s ease-in-out, background-color 0.3s ease-in-out",
      "&:hover": {
        transform: "scale(1.05)",
        backgroundColor: "#e0f7fa", // Adicionando a mudança de cor no fundo
      }
    }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {titulo}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {descricao}
        </Typography>
        <Typography variant="h5" color="primary" gutterBottom>
          {preco}
        </Typography>
        <Button variant="contained" color="primary">
          Assinar
        </Button>
      </CardContent>
    </Card>
  );
};

export default PlanoCard;
