import React from 'react';
import { Typography, Card, CardContent } from '@mui/material';

const NewsBox = ({ title, content }) => (
  <Card sx={{ margin: '1rem', padding: '1rem', boxShadow: 3 }}>
    <CardContent>
      <Typography variant="h6" component="div" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {content}
      </Typography>
    </CardContent>
  </Card>
);

export default NewsBox;
