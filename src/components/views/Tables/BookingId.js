import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tables.module.scss';
import { useParams } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const BookingId = (props) => {

  let { id } = useParams();

  return (
    <Paper className={styles.component}>
      <h2>Booking {id} view</h2>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell align='center'>Table no.</TableCell>
            <TableCell align='center'>2</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='center'>Number of people</TableCell>
            <TableCell align='center'>4</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='center'>Duration</TableCell>
            <TableCell align='center'>1,5 h</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Button className={styles.editBtn}>Edit booking</Button>
    </Paper>
  );
};

BookingId.propTypes = {
};

export default BookingId;