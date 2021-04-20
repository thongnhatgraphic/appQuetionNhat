import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  withStyles,
} from '@material-ui/core';
import { ErrorMessage } from '@hookform/error-message';
import { style } from './style';

QuestionsWrite.propTypes = {
  classes: PropTypes.object,
  receiveValue: PropTypes.func,
  name: PropTypes.string,
  register: PropTypes.func,
  control: PropTypes.object,
  Controller: PropTypes.func,
  errors: PropTypes.object,
};

function QuestionsWrite(props) {
  const {
    classes,
    receiveValue,
    name,
    register,
    control,
    Controller,
    errors,
    ...remainProps
  } = props;

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
          <Typography className={classes.pos} color="textSecondary">
            {remainProps.question}
          </Typography>
          <section>
            {/* <Controller
              render={({ field }) => (
                <TextField
                  type="text"
                  defaultValue=""
                  onChange={field.onChange}
                  inputRef={field.ref}
                />
              )}
              name={name}
              control={control}
              rules={{
                required: {
                  value: true,
                  message: 'Chưa nhập đáp án. Nếu k thì nhập đại',
                },
                minLength: {
                  value: 2,
                  message: 'Tối thiểu 2 ký tự',
                },
              }}
            />
          
            <ErrorMessage
              errors={errors}
              name={name}
              render={({ message }) => (
                <p style={{ color: 'red', fontSize: '12' }}>{message}</p>
              )}
            /> */}
            <TextField
              fullWidth
              {...register(name, {
                required: {
                  value: true,
                  message: 'Chưa nhập đáp án. Nếu k thì nhập đại',
                },
                minLength: {
                  value: 2,
                  message: 'Tối thiểu 2 ký tự',
                },
              })}
              control={control}
              name={name}
              variant="outlined"
              size="small"
              error={!!errors[name]}
              helperText={errors[name] ? errors[name].message : ''}
            />
          </section>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default withStyles(style)(QuestionsWrite);
