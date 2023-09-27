import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function IconButtons() {
  return (
    <Stack
    >
      <IconButton color="primary" aria-label="add to shopping ">
        <AddShoppingCartIcon sx={{ bgcolor: "#cddc39" }} position="right" style={{ fontSize: 40 }}
        />
      </IconButton>
    </Stack>
  )
}
