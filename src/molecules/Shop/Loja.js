import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Cards from "../../components/Cards/Cards";
import GridStyles from "../../components/Grid/GridStyles";
import camisa from "../../assets/camisabasica.jpg";
import tenis from "../../assets/teniscorrida.jpg";
import meia from "../../assets/meiapreta.jpg";
import short from "../../assets/shortbasico.jpg";

const Loja = () => {
  const products = [
    {
      id: 1,
      image: camisa,
      description: "Camisa básica Preta",
      price: "R$ 49,90"
    },
    {
      id: 2,
      image: tenis,
      description: "Tênis de Corrida",
      price: "R$ 199,90"
    },
    {
      id: 3,
      image: short,
      description: "Short básico preto",
      price: "R$ 69,90"
    },
    {
      id: 4,
      image: meia,
      description: "Meia Preta",
      price: "R$ 19,90"
    },
  ];

  return (
    <Box sx={{ marginTop: "40px" }}>
      <Grid container spacing={3} sx={GridStyles.container}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center" gutterBottom color="white" sx={{ marginBottom: "20px" }}>
            Loja de Produtos
          </Typography>
        </Grid>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id} sx={GridStyles.item}>
            <Cards image={product.image} description={`${product.description} - ${product.price}`} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Loja;
