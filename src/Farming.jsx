import React, { useState } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  cursor: 'pointer',
}));

const Farming = () => {
  const [open, setOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (index) => {
    setSelectedCard(index);
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedCard(null);
    setOpen(false);
  };

  const cards = Array.from(Array(6)).map((_, index) => (
    <Grid item xs={2} sm={4} md={4} key={index}>
      <Item onClick={() => handleCardClick(index)}>xs=2</Item>
    </Grid>
  ));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {cards}
      </Grid>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          {selectedCard !== null && (
            <>
              <Typography variant="h6" component="div">
                Card {selectedCard}
              </Typography>
              <Typography paragraph>
                This is the information about the selected card.
                You can replace this with your own content.
              </Typography>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default Farming;




