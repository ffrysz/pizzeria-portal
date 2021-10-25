import React from 'react';
import PropTypes from 'prop-types';
import styles from './Login.module.scss';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';


const Login = (props) => {

  return (
    <Paper>
      <Container maxWidth='xs' className={styles.component}>
        <TextField label="Username" variant="outlined" className={styles.field} />
        <TextField label="Password" variant="outlined" className={styles.field} />
        <Button variant='outlined'>Log in</Button>
      </Container>
    </Paper>
  );
};

Login.propTypes = {
};

export default Login;