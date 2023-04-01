/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import './App.css';
import { Paper, Typography, Stack, TextField, InputAdornment, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Axios from 'axios';

export const App = () => {

  const [prompt, setPrompt] = useState<string>('');
  const [response, setResponse] = useState<string>('');

  const handleSend = async () => {
    try {
      const url = `http://localhost:3002/api/completion?prompt=${prompt}`;
      const res = await Axios.get(url);
      setResponse(res.data);
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="App">
      <Paper elevation={12} className='paper'>
        <Stack spacing={2} direction='column' className='paperZone'>
          <TextField
          label='Insert propmt'
          variant='outlined'
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          sx={{ width: '35vw', alignSelf: 'center', top: '5vh', position: 'relative' }}
          multiline
          maxRows={3}
          InputProps={{
            endAdornment: <InputAdornment position='end'><IconButton size='large' onClick={handleSend}><SendIcon /></IconButton></InputAdornment>
          }}
          />
          <TextField
          variant='outlined'
          value={'Response: \n' + response}
          sx={{ width: '35vw', alignSelf: 'center', top: '8vh', position: 'relative' }}
          multiline
          maxRows={5}
          disabled
          />
        </Stack>
      </Paper>
    </div>
  );
}