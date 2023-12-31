import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import BasicTextFields from './BAInput';
import BAButton from './BAButton';
import IconButtons from './BAIconButton';
import BasicSelect from './BASelect';
import ControlledSwitches from './BASwitch';
import './App.css';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData (<BasicTextFields/>,<BAButton/>,<IconButtons/>,<BasicSelect/>,<ControlledSwitches/>),
  createData(<BasicTextFields/>, <BAButton/>,<IconButtons/>,<BasicSelect/>,<ControlledSwitches/>),
  createData(<BasicTextFields/>, <BAButton/>,<IconButtons/>,<BasicSelect/>,<ControlledSwitches/>),
  createData(<BasicTextFields/>, <BAButton/>,<IconButtons/>,<BasicSelect/>,<ControlledSwitches/>),
  createData(<BasicTextFields/>, <BAButton/>,<IconButtons/>,<BasicSelect/>,<ControlledSwitches/>),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table className='ab' sx={{ minWidth: 650,}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>input </TableCell>
            <TableCell align="right">button</TableCell>
            <TableCell align="right">icon button</TableCell>
            <TableCell align="right">select</TableCell>
            <TableCell align="right">switch</TableCell>
            <TableCell align="right">date picker</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}