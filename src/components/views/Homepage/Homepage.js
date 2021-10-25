import React from 'react';
import PropTypes from 'prop-types';
import styles from './Homepage.module.scss';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const Homepage = (props) => {

  return (
    <Paper className={styles.component}>
      <h2>Stats of today&apos;s orders</h2>
      <Table>
        <TableHead className={styles.tableHeader}>
          <TableRow>
            <TableCell align='center'>Stat</TableCell>
            <TableCell align='center'>On site</TableCell>
            <TableCell align='center'>Take away</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align='center'>Meals ordered</TableCell>
            <TableCell align='center'>68</TableCell>
            <TableCell align='center'>112</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='center'>Average waiting time [min]</TableCell>
            <TableCell align='center'>25</TableCell>
            <TableCell align='center'>18</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='center'>Number of vegetarian meals ordered</TableCell>
            <TableCell align='center'>12</TableCell>
            <TableCell align='center'>24</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='center'>Total amount of ordered drinks [litres]</TableCell>
            <TableCell align='center'>55</TableCell>
            <TableCell align='center'>60</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <h2>Reservations and events planned for today</h2>
      <Table>
        <TableHead className={styles.tableHeader}>
          <TableRow>
            <TableCell align='center'>Hour</TableCell>
            <TableCell align='center'>Type</TableCell>
            <TableCell align='center'>People</TableCell>
            <TableCell align='center'>Table no.</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align='center'>10:00</TableCell>
            <TableCell align='center'>event</TableCell>
            <TableCell align='center'>12</TableCell>
            <TableCell align='center'>4, 5</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='center'>10:00</TableCell>
            <TableCell align='center'>reservation</TableCell>
            <TableCell align='center'>2</TableCell>
            <TableCell align='center'>2</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='center'>12:00</TableCell>
            <TableCell align='center'>event</TableCell>
            <TableCell align='center'>24</TableCell>
            <TableCell align='center'>1,2,3,4</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='center'>14:30</TableCell>
            <TableCell align='center'>reservation</TableCell>
            <TableCell align='center'>4</TableCell>
            <TableCell align='center'>3</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='center'>16:30</TableCell>
            <TableCell align='center'>reservation</TableCell>
            <TableCell align='center'>2</TableCell>
            <TableCell align='center'>1</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
};

Homepage.propTypes = {
};

export default Homepage;