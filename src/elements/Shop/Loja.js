import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Cards from "../../components/Cards/Cards";
import GridStyles from "../../components/Grid/GridStyles";
import camisa from "../../assets/camisabasica.jpg";
import tenis from "../../assets/teniscorrida.jpg";
import meia from "../../assets/meiapreta.jpg";
import short from "../../assets/shortbasico.jpg";

const initialProducts = [
  {
    id: 1,
    image: camisa,
    description: "Camisa básica Preta",
    price: "R$ 49,90",
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: 2,
    image: tenis,
    description: "Tênis de Corrida",
    price: "R$ 199,90",
    sizes: ["38", "39", "40", "41"],
  },
  {
    id: 3,
    image: short,
    description: "Short básico preto",
    price: "R$ 69,90",
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: 4,
    image: meia,
    description: "Meia Preta",
    price: "R$ 19,90",
    sizes: ["Único"],
  },
];

const Loja = () => {
  const [products] = useState(initialProducts);
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const [selectedSizes, setSelectedSizes] = useState({}); 
  const [errorMessage, setErrorMessage] = useState(""); 

  const handleAddToCart = (product) => {
    const selectedSize = selectedSizes[product.id];
    if (selectedSize) {
      setErrorMessage(""); 
      console.log(`Produto: ${product.description}, Tamanho: ${selectedSize} adicionado ao carrinho.`);
      setSelectedSizes((prev) => ({ ...prev, [product.id]: null }));
    } else {
      setErrorMessage("Por favor, selecione um tamanho.");
    }
  };

  return (
    <Box sx={{ marginTop: "40px" }}>
      {errorMessage && (
        <Box sx={{ marginBottom: "20px", textAlign: "center" }}>
          <Typography variant="h6" color="error">
            {errorMessage}
          </Typography>
        </Box>
      )}

      <Grid container spacing={3} sx={GridStyles.container}>
        <Grid item xs={12}>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            color="white"
            sx={{ marginBottom: "20px" }}
          >
            Loja de Produtos
          </Typography>
        </Grid>

        {products.map((product) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={product.id}
            sx={GridStyles.item}
            onMouseEnter={() => setHoveredProductId(product.id)}
            onMouseLeave={() => setHoveredProductId(null)}
          >
            <Box sx={{ position: "relative" }}>
              <Cards
                image={product.image}
                description={product.description}
                price={product.price}
              />
              {hoveredProductId === product.id && (
                <>
                  <Box
                    sx={{
                      position: "absolute",
                      top: "60%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      display: "flex",
                      gap: 1,
                      backgroundColor: "rgba(0, 0, 0, 0.6)",
                      borderRadius: "10px",
                      padding: "10px",
                    }}
                  >
                    {product.sizes.map((size) => (
                      <Box
                        key={size}
                        onClick={() => setSelectedSizes((prev) => ({ ...prev, [product.id]: size }))}
                        sx={{
                          width: 30,
                          height: 30,
                          backgroundColor: selectedSizes[product.id] === size ? "blue" : "white",
                          borderRadius: "50%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          cursor: "pointer",
                          fontWeight: "bold",
                        }}
                      >
                        {size}
                      </Box>
                    ))}
                  </Box>
                  <Box sx={{ textAlign: "center", marginTop: "10px" }}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleAddToCart(product)}
                      sx={{ width: "100%" }}
                    >
                      Comprar
                    </Button>
                  </Box>
                </>
              )}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Loja;
