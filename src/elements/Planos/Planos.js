import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import PlanoCard from "../../components/Cards/PlanoCard";

const planos = [
  {
    titulo: "Plano Básico",
    descricao: "Acesso à academia das 6h às 18h de segunda a sexta.",
    preco: "R$ 99,90/mês",
  },
  {
    titulo: "Plano Premium",
    descricao: "Acesso ilimitado + aulas em grupo.",
    preco: "R$ 149,90/mês",
  },
  {
    titulo: "Plano Família",
    descricao: "Acesso para até 4 pessoas da mesma família.",
    preco: "R$ 199,90/mês",
  },
  {
    titulo: "Plano Anual",
    descricao: "Pagamento anual com desconto de 20%.",
    preco: "R$ 999,90/ano",
  },
];

const Planos = () => {
  return (
    <Box sx={{ padding: "2rem", backgroundColor: "#1f1f1f" }}>
      <Typography variant="h4" align="center" gutterBottom color="white">
        Planos de Assinatura
      </Typography>
      <Grid container spacing={3}>
        {planos.map((plano, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <PlanoCard
              titulo={plano.titulo}
              descricao={plano.descricao}
              preco={plano.preco}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Planos;
