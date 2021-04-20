import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
  FormGroup,
  FormHelperText,
} from '@material-ui/core';
import { ErrorMessage } from '@hookform/error-message';
import { style } from './style';

QuestionMultiChoice.propTypes = {
  classes: PropTypes.object,
  name: PropTypes.string,
  setValue: PropTypes.func,
  Controller: PropTypes.func,
  control: PropTypes.object,
  errors: PropTypes.object,
};

function QuestionMultiChoice(props) {
  const {
    classes,
    errors,
    name,
    setValue,
    Controller,
    control,
    ...remainProps
  } = props;

  const [checked, setChecked] = useState([]);

  const isChecked = value => checked.some(item => item === value);
  const handleChecked = value => {
    const result = checked.some(item => item === value);
    let newArr = [];
    if (result) {
      newArr = checked.filter(item => item !== value);
    } else {
      newArr = [...checked, value];
    }
    setChecked(newArr);
    setValue(name, newArr);
    return newArr;
  };

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
          <FormGroup>
            <Grid container>
              {remainProps.answer.map(item => (
                <Grid item xs={6}>
                  <Controller
                    key={item}
                    rules={{
                      required: {
                        value: true,
                        message: 'Please checked to test your Luck',
                      },
                    }}
                    name={name}
                    control={control}
                    render={({ field }) => {
                      return (
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={isChecked(item)}
                              onChange={() => {
                                field.onChange(handleChecked(item));
                              }}
                            />
                          }
                          label={item}
                        />
                      );
                    }}
                  />
                </Grid>
              ))}
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
            </Grid>
          </FormGroup>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default withStyles(style)(QuestionMultiChoice);
// {
//   /* <FormControlLabel
//   key={item}
//   value={item}
//   control={
//     <Checkbox
//       color="primary"
//       {...register(`${name}`)}
//       onChange={() => handleChecked(item)}
//       checked={isChecked(item)}
//     />
//   }
//   label={item}
//   labelPlacement="end"
// />; */
// }
