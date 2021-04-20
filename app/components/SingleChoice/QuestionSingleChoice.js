import React from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
  FormHelperText,
} from '@material-ui/core';
import { Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { style } from './style';

QuestionSingleChoice.propTypes = {
  classes: PropTypes.object,
  errors: PropTypes.func,
  control: PropTypes.object,
  name: PropTypes.string,
  Controller: PropTypes.func,
};

function QuestionSingleChoice(props) {
  const { classes, errors, name, control, ...remainProps } = props;
  return (
    <Grid item xs={3} lg={3} md={3} sm={6}>
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Câu {remainProps.id}:
          </Typography>
          <br />
          <FormControl component="fieldset">
            <Typography className={classes.pos} color="textSecondary">
              {remainProps.question}
            </Typography>
            <Controller
              control={control}
              name={name}
              rules={{
                required: {
                  value: true,
                  message:
                    'Please checked if you lucky you can answer right this qs',
                },
              }}
              render={({ field }) => (
                <RadioGroup
                  aria-label="gender"
                  value={field.value || null}
                  onChange={e => field.onChange(e.target.value)}
                >
                  <Grid container>
                    <Grid item xs={6}>
                      {' '}
                      <FormControlLabel
                        value="a"
                        control={<Radio />}
                        label={remainProps.answer.a}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FormControlLabel
                        value="b"
                        control={<Radio />}
                        label={remainProps.answer.b}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FormControlLabel
                        value="c"
                        control={<Radio />}
                        label={remainProps.answer.c}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FormControlLabel
                        value="d"
                        control={<Radio />}
                        label={remainProps.answer.d}
                      />
                    </Grid>
                  </Grid>
                </RadioGroup>
              )}
            />
            {errors && (
              <ErrorMessage
                errors={errors}
                name={name}
                render={({ message }) => (
                  <FormHelperText style={{ color: '#f44336' }}>
                    {message}
                  </FormHelperText>
                )}
              />
            )}
          </FormControl>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default withStyles(style)(QuestionSingleChoice);
