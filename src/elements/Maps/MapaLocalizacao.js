import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Box, Typography, Grid, Container } from "@mui/material";

const containerStyle = {
  width: "100%",
  height: "300px",
};

const center = {
  lat: -22.9068,
  lng: -43.1729,
};

const MapaLocalizacao = () => {
  return (
    <Container maxWidth="md">
      <Box mt={4}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Mapa de Localização
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <LoadScript googleMapsApiKey="AIzaSyDR611r4Og5Klp5UtV7YHyB_SCj0ErxnJ8">
              <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
                <Marker position={center} />
              </GoogleMap>
            </LoadScript>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default MapaLocalizacao;
