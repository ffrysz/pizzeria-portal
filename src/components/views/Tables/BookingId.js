import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tables.module.scss';
import { useParams, useLocation } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const BookingId = (props) => {

  let { id } = useParams();
  let { query } = useLocation();

  return (
    <Paper className={styles.component}>
      <h2>Booking {id} {query} view</h2>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell align='center'>Table no.</TableCell>
            <TableCell align='center'></TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='center'>Number of people</TableCell>
            <TableCell align='center'></TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='center'>Duration</TableCell>
            <TableCell align='center'></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
};

BookingId.propTypes = {
};

export default BookingId;