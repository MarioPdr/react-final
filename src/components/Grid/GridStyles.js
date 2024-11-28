const GridStyles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center', 
    padding: '24px', 
    gap: 16, 
    backgroundColor: '#1f1f1f',
    borderRadius: '12px', 
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '16px',
    backgroundColor: '#ffffff', 
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)', 
    transition: 'transform 0.3s ease, box-shadow 0.3s ease', 
    '&:hover': {
      transform: 'scale(1.04)', 
      boxShadow: '0 6px 20px rgba(0, 0, 0, 0.25)', 
    },
    '&:focus-within': {
      outline: '2px solid #4caf50', 
      transform: 'scale(1.05)',
    },
  },
  image: {
    borderRadius: '8px', 
    objectFit: 'cover',
    width: '100%',
    height: '160px', 
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
  },
  title: {
    marginTop: '12px',
    fontWeight: '600', 
    textAlign: 'center',
    color: '#222222',
    fontSize: '1.1rem', 
    lineHeight: '1.5', 
  },
};

export default GridStyles;
