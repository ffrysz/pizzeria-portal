import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tables.module.scss';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const Tables = (props) => {

  const hello = 'HELLO';

  return (
    <Paper className={styles.component}>
      <h2>Reservations and events</h2>
      <Table>
        <TableHead className={styles.tableHeader}>
          <TableRow>
            <TableCell align='center'>Hour</TableCell>
            <TableCell align='center'>Table 1</TableCell>
            <TableCell align='center'>Table 2</TableCell>
            <TableCell align='center'>Table 3</TableCell>
            <TableCell align='center'>Table 4</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align='center'>10:00</TableCell>
            <TableCell align='center'>
              <Button component={Link} to={{ pathname: `${process.env.PUBLIC_URL}/tables/booking/237`, query: { hello } }}>Reservation 237</Button>
            </TableCell>
            <TableCell align='center'>-</TableCell>
            <TableCell align='center'>
              <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/237`}>Reservation 234</Button>
            </TableCell>
            <TableCell align='center'>-</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='center'>10:30</TableCell>
            <TableCell align='center'>
              <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/237`}>Reservation 237</Button>
            </TableCell>
            <TableCell align='center'>-</TableCell>
            <TableCell align='center'>-</TableCell>
            <TableCell align='center'>-</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='center'>11:00</TableCell>
            <TableCell align='center'>
              <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/237`}>Reservation 237</Button>
            </TableCell>
            <TableCell align='center'>-</TableCell>
            <TableCell align='center'>
              <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/237`}>Reservation 224</Button>
            </TableCell>
            <TableCell align='center'>
              <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/237`}>Reservation 224</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='center'>11:30</TableCell>
            <TableCell align='center'>-</TableCell>
            <TableCell align='center'>-</TableCell>
            <TableCell align='center'>
              <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/237`}>Reservation 234</Button>
            </TableCell>
            <TableCell align='center'>-</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='center'>12:00</TableCell>
            <TableCell align='center'>-</TableCell>
            <TableCell align='center'>
              <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/events/237`}>Event 239</Button>
            </TableCell>
            <TableCell align='center'>
              <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/events/237`}>Event 239</Button>
            </TableCell>
            <TableCell align='center'>
              <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/events/237`}>Event 239</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='center'>12:30</TableCell>
            <TableCell align='center'>-</TableCell>
            <TableCell align='center'>
              <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/events/237`}>Event 239</Button>
            </TableCell>
            <TableCell align='center'>
              <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/events/237`}>Event 239</Button>
            </TableCell>
            <TableCell align='center'>
              <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/events/237`}>Event 239</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='center'>13:00</TableCell>
            <TableCell align='center'>-</TableCell>
            <TableCell align='center'>
              <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/events/237`}>Event 239</Button>
            </TableCell>
            <TableCell align='center'>
              <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/events/237`}>Event 239</Button>
            </TableCell>
            <TableCell align='center'>
              <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/events/237`}>Event 239</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
};

Tables.propTypes = {
};

export default Tables;