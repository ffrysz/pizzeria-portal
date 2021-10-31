import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';
import { useParams } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const OrderId = (props) => {

  let { id } = useParams();

  return (
    <Paper className={styles.component}>
      <h2>Order {id}</h2>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell align='center'>Table no.</TableCell>
            <TableCell align='center'>3</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='center'>Menu</TableCell>
            <TableCell align='center'>Pizza</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='center'>Extras</TableCell>
            <TableCell align='center'>Double cheese</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='center'>Additonal wishes</TableCell>
            <TableCell align='center'>None</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='center'>Total</TableCell>
            <TableCell align='center'>13 EUR</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Button className={styles.editBtn}>Edit order</Button>
    </Paper>
  );
};

OrderId.propTypes = {
};

export default OrderId;