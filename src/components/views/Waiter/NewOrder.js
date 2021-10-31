import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const NewOrder = (props) => {

  return (
    <Paper className={styles.component}>
      <h2>Create new order</h2>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell align='center'>Table no.</TableCell>
            <TableCell align='center'>
              <Select defaultValue={1}>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
              </Select>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='center'>Menu</TableCell>
            <TableCell align='center'>
              <FormControlLabel
                control={<Checkbox />}
                label="Pizza"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Pasta"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Ravioli"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Lasagne"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Chicken soup"
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='center'>Extras</TableCell>
            <TableCell align='center'>
              <FormControlLabel
                control={<Checkbox />}
                label="Tomato dip"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Extra hot"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Double cheese"
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='center'>Additonal wishes</TableCell>
            <TableCell align='center'>
              <TextField
                id="standard-number"
                label="Additional wishes"
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='center'>Total</TableCell>
            <TableCell align='center'>100 EUR</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Button className={styles.editBtn}>Create</Button>
    </Paper>
  );
};

NewOrder.propTypes = {
};

export default NewOrder;