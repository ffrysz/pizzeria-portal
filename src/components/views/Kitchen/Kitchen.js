import React from 'react';
import PropTypes from 'prop-types';
import styles from './Kitchen.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';

const demoContent = [
  { id: '1', table: 1, order: '-', meals: 'pizza pepperoni' },
  { id: '2', table: 2, order: '-', meals: 'spaghetti carbonara with extra cheese' },
  { id: '3', table: '-', order: 123, meals: 'pizza toscana without olives' },
  { id: '4', table: '-', order: 234, meals: 'sandwich, cola' },
  { id: '5', table: 4, order: '-', meals: 'beef burger' },
  { id: '6', table: '-', order: 456, meals: 'curry chicken, steak, water' },
];

const Kitchen = (props) => {

  return (
    <Paper className={styles.component}>
      <h2>Kitchen&apos;s view</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Queue</TableCell>
            <TableCell>Table no.</TableCell>
            <TableCell>Order no.</TableCell>
            <TableCell>Meals</TableCell>
            <TableCell>Completed</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoContent.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>
                {row.table}
              </TableCell>
              <TableCell>
                {row.order}
              </TableCell>
              <TableCell>
                {row.meals}
              </TableCell>
              <TableCell>
                <Checkbox></Checkbox>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

Kitchen.propTypes = {
};

export default Kitchen;