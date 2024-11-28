import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import NewsBox from '../../components/Cards/NewsBox';

const news = [
  { title: 'Abertura de Novas Aulas de Yoga', content: 'A partir do próximo mês, nossa academia oferecerá novas aulas de yoga focadas em meditação e relaxamento. As aulas serão conduzidas por instrutores experientes e ocorrerão todas as segundas e quartas às 7h.' },
  { title: 'Desconto Exclusivo para Membros', content: 'Estamos oferecendo um desconto exclusivo de 20% para todos os nossos membros que renovarem suas assinaturas anuais até o final deste mês. Aproveite essa oportunidade para manter sua saúde em dia com um preço especial!' },
  { title: 'Novo Equipamento de Musculação', content: 'Acabamos de receber novos equipamentos de musculação de última geração! Venha conferir e experimentar a tecnologia mais moderna para otimizar seus treinos e alcançar seus objetivos mais rapidamente.' },
  { title: 'Evento de Corrida de Rua', content: 'Participe do nosso evento anual de corrida de rua! Inscreva-se na recepção e garanta sua vaga para um dia de atividade física, diversão e premiações para os melhores colocados. O evento será realizado no próximo domingo às 8h.' },
];

const NewsSection = () => (
  <Box sx={{ padding: '2rem', backgroundColor: '#f9f9f9', borderRadius: '8px', margin: '2rem 0' }}>
    <Typography variant="h4" align="center" gutterBottom>
      Últimas Notícias
    </Typography>
    <Grid container spacing={3}>
      {news.map((item, index) => (
        <Grid item xs={12} sm={6} key={index}>
          <NewsBox title={item.title} content={item.content} />
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default NewsSection;
