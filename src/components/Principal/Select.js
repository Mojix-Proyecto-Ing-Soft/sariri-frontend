import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function SelectLabels({ numGuests, setNumGuests, isParent }) {
  const [age, setAge] = React.useState(isParent ? 1 : 0);

  const handleChange = (event) => {
    setAge(event.target.value);
    if(isParent){
      setNumGuests([event.target.value, numGuests[1]])
    }else{
      setNumGuests([numGuests[0], event.target.value]);
    }
  };

  return (
    <div>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          {!isParent && <MenuItem value={0}>0</MenuItem>}
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
        </Select>
    </div>
  );
}