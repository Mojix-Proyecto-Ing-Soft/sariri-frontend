import * as React from 'react';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { fontGrid } from '@mui/material/styles/cssUtils';
import { responsiveFontSizes } from '@material-ui/core';
import { sizeHeight } from '@mui/system';
import { useState } from 'react';

export default function BasicDateRangePicker({ setNroNoches }) {
  const [value, setValue] = useState([null, null]);

  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      localeText={{ start: 'Check-in', end: 'Check-out' }}
    >
      <DateRangePicker
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          setNroNoches(calculateNights(newValue));
        }}
        disablePast
        renderInput={(startProps, endProps) => (

          <React.Fragment>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> hasta </Box>
            <TextField {...endProps} />
          </React.Fragment>
        )}
      />


    </LocalizationProvider>
  );
}

const calculateNights = (dateRange) => {
  if(dateRange[0] && dateRange[1]){
    const startDate = new Date(`${dateRange[0].$M}/${dateRange[0].$D}/${dateRange[0].$y}`);
    const endDate = new Date(`${dateRange[1].$M}/${dateRange[1].$D}/${dateRange[1].$y}`);

    const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    console.log("days " + diffDays)

    return diffDays;
  }else return 1
}