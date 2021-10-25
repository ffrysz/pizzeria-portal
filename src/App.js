import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout.js';
import { BrowserRouter, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import { StylesProvider } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import Homepage from './components/views/Homepage/Homepage.js';
import Login from './components/views/Login/Login.js';
import Tables from './components/views/Tables/Tables.js';
import Booking from './components/views/Tables/Booking.js';
import NewBooking from './components/views/Tables/NewBooking.js';
import BookingId from './components/views/Tables/BookingId.js';
import Events from './components/views/Tables/Events.js';
import NewEvent from './components/views/Tables/NewEvent.js';
import EventId from './components/views/Tables/EventId.js';
import Waiter from './components/views/Waiter/Waiter.js';
import Order from './components/views/Waiter/Order.js';
import NewOrder from './components/views/Waiter/NewOrder.js';
import OrderId from './components/views/Waiter/OrderId.js';
import Kitchen from './components/views/Kitchen/Kitchen.js';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2B4C6F',
    },
    // secondary: {
    //   main: '#11cb5f',
    // },
  },
});

function App() {
  return (
    <BrowserRouter>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <MainLayout>
            <AnimatedSwitch
              atEnter={{
                top: 200,
                opacity: 0,
              }}
              atLeave={{
                top: 200,
                opacity: 0,
              }}
              atActive={{
                top: 0,
                opacity: 1,
              }}
            >
              <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
              <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />
              <Route exact path={`${process.env.PUBLIC_URL}/tables`} component={Tables} />
              <Route exact path={`${process.env.PUBLIC_URL}/tables/booking`} component={Booking} />
              <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/new`} component={NewBooking} />
              <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/:id`} component={BookingId} />
              <Route exact path={`${process.env.PUBLIC_URL}/tables/events`} component={Events} />
              <Route exact path={`${process.env.PUBLIC_URL}/tables/events/new`} component={NewEvent} />
              <Route exact path={`${process.env.PUBLIC_URL}/tables/events/:id`} component={EventId} />
              <Route exact path={`${process.env.PUBLIC_URL}/waiter`} component={Waiter} />
              <Route exact path={`${process.env.PUBLIC_URL}/waiter/order`} component={Order} />
              <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/new`} component={NewOrder} />
              <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/:id`} component={OrderId} />
              <Route exact path={`${process.env.PUBLIC_URL}/kitchen`} component={Kitchen} />
            </AnimatedSwitch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;
