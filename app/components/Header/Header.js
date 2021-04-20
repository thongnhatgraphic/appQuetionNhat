import AppBar from '@material-ui/core/AppBar';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import * as actions from './../../containers/SignInPage/actions';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

MenuAppBar.propTypes = {
  user: PropTypes.object,
  logOutCreator: PropTypes.func,
};

function MenuAppBar(props) {
  const { user, logOutCreator } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Typography variant="subtitle2" gutterBottom>
              User: {user.name} - ({` ${user.displayName} `})
            </Typography>
            <div>
              <MenuItem
                onClick={() => {
                  logOutCreator();
                }}
              >
                Log Out
              </MenuItem>
            </div>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapToStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  logOutCreator: () => {
    dispatch(actions.logOutAccount());
  },
});
export default connect(
  mapToStateToProps,
  mapDispatchToProps,
)(MenuAppBar);
