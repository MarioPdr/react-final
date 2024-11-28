import React, { useState, useEffect } from "react";
import Cards from "../../components/Cards/Cards";
import Grid from "@mui/material/Grid";

const GridProdutos = () => {
  const [produto, setProduto] = useState([]);
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/xfiveco/mock-api-images/main/images.json")
      .then((response) => response.json())
      .then((response) => {
        setProduto(response.data);
      })
      .catch((error) => console.log("Erro ao buscar produtos", error));
  }, []);

  return (
    <>
      {produto.map((produto, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Cards image={produto.sizes.xs} description={produto.title} price={"R$ 0,00"} />
        </Grid>
      ))}
    </>
  );
};

export default GridProdutos;
