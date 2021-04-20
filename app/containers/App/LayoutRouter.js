import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import MenuAppBar from '../../components/Header/Header';

LayoutRouter.propTypes = {
  route: PropTypes.object,
  resultRedirect: PropTypes.bool,
  component: PropTypes.func,
};

function LayoutRouter(props) {
  return (
    <div>
      <Grid container>
        <Route {...props} />
      </Grid>
    </div>
  );
}

const mapStateToProps = state => ({
  resultRedirect: state.signin.resultRedirect,
});

export default connect(
  mapStateToProps,
  null,
)(LayoutRouter);
