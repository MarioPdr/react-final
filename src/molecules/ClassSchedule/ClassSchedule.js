import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box } from '@mui/material';

const schedule = [
  { day: 'Segunda-feira', classes: [{ time: '07:00', name: 'Yoga' }, { time: '09:00', name: 'Pilates' }, { time: '18:00', name: 'Spinning' }] },
  { day: 'Terça-feira', classes: [{ time: '07:00', name: 'Crossfit' }, { time: '09:00', name: 'Musculação' }, { time: '18:00', name: 'Zumba' }] },
  // Adicione mais dias e aulas conforme necessário
];

const ClassSchedule = () => (
  <Box sx={{ padding: '2rem', backgroundColor: '#f5f5f5', borderRadius: '8px', boxShadow: 3, margin: '2rem auto', maxWidth: '800px' }}>
    <Typography variant="h4" component="div" sx={{ textAlign: 'center', marginBottom: '1.5rem', fontSize: '2rem' }}>
      Horários das Aulas
    </Typography>
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontSize: '1.2rem' }}>Dia</TableCell>
            <TableCell sx={{ fontSize: '1.2rem' }}>Horário</TableCell>
            <TableCell sx={{ fontSize: '1.2rem' }}>Aula</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {schedule.map((day) => (
            <React.Fragment key={day.day}>
              {day.classes.map((classItem, index) => (
                <TableRow key={index}>
                  {index === 0 && (
                    <TableCell rowSpan={day.classes.length} sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                      {day.day}
                    </TableCell>
                  )}
                  <TableCell sx={{ fontSize: '1rem' }}>{classItem.time}</TableCell>
                  <TableCell sx={{ fontSize: '1rem' }}>{classItem.name}</TableCell>
                </TableRow>
              ))}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
);

export default ClassSchedule;
