import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tables.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const NewEvent = (props) => {

  return (
    <Paper className={styles.component}>
      <h2>Create new event</h2>
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
            <TableCell align='center'>Number of people</TableCell>
            <TableCell align='center'>
              <TextField
                id="standard-number"
                label="People"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='center'>Date</TableCell>
            <TableCell align='center'>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Pick a date"
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </MuiPickersUtilsProvider>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='center'>Time</TableCell>
            <TableCell align='center'>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardTimePicker
                  margin="normal"
                  id="time-picker"
                  label="Pick starting time"
                  KeyboardButtonProps={{
                    'aria-label': 'change time',
                  }}
                />
              </MuiPickersUtilsProvider>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Button className={styles.editBtn}>Create</Button>
    </Paper>
  );
};

NewEvent.propTypes = {
};

export default NewEvent;