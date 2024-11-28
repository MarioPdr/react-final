import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';

const Cards = ({ image, description, price }) => {
  return (
    <Card sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 400 }}>
      <img src={image} alt={description} style={{ width: '100%', height: 'auto' }} />
      <CardContent sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <Typography variant="h6" component="div" sx={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
          {description}
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '1rem', color: 'gray', marginBottom: '1rem' }}>
          {price}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', flexGrow: 1 }}>
          <Button variant="contained" color="primary" sx={{ fontSize: '1rem', padding: '10px 20px' }}>
            Comprar
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Cards;