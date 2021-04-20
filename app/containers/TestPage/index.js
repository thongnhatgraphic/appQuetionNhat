import {
  Box,
  Button,
  Checkbox,
  TextField,
  Toolbar,
  Typography,
  withStyles,
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { useForm, Controller, FormProvider } from 'react-hook-form';
import QuestionMultiChoice from '../../components/MultiChoice/QuestionMultiChoice';
import QuestionSingleChoice from '../../components/SingleChoice/QuestionSingleChoice';
import QuestionsWrite from '../../components/WriteAnswer/QuestionsWrite';
import * as actions from './actions';
import reducer from './reducer';
import saga from './saga';
import { style } from './style';
import MenuAppBar from '../../components/Header/Header';

TestPage.propTypes = {
  classes: PropTypes.object,
  listQuesTionReceive: PropTypes.array,
  fetchListQuestionCreator: PropTypes.func,
  isSuccess: PropTypes.bool,
  match: PropTypes.object,
  submitValuesCreator: PropTypes.func,
  user: PropTypes.object,
};
const key = 'testPage';

function TestPage(props) {
  useInjectSaga({ key, saga });
  useInjectReducer({ key, reducer });
  const {
    fetchListQuestionCreator,
    isSuccess,
    match,
    listQuesTionReceive,
    submitValuesCreator,
    classes,
    user,
  } = props;
  const {
    register,
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors },
    ...methods
  } = useForm();

  useEffect(() => {
    if (isSuccess) {
      fetchListQuestionCreator();
    } else {
      match.history.goBack();
    }
  }, [isSuccess]);

  const showAllListQuestion = list => (
    <Grid container spacing={3}>
      {list.map(question => {
        if (question.type === 'radio') {
          return (
            <QuestionSingleChoice
              key={question.id}
              {...question}
              errors={errors}
              control={control}
              Controller={Controller}
            />
          );
        }
        if (question.type === 'checkbox') {
          return (
            <QuestionMultiChoice
              key={question.id}
              name={question.name}
              control={control}
              setValue={setValue}
              errors={errors}
              Controller={Controller}
              {...question}
            />
          );
        }
        return (
          <QuestionsWrite
            key={question.id}
            name={question.name}
            register={register}
            control={control}
            Controller={Controller}
            errors={errors}
            {...question}
          />
        );
      })}
    </Grid>
  );

  const handleSubmitForm = data => {
    let newData = {};
    let x;
    for (x in data) {
      newData = {
        ...newData,
        [x]:
          typeof data[x] === 'object' ? data[x] : data[x].toLowerCase().trim(),
      };
    }
    submitValuesCreator(newData);
    reset();
  };

  return (
    <div>
      <MenuAppBar user={user} />
      <Toolbar />
      <div className={classes.main}>
        <Typography variant="h2" gutterBottom className={classes.align}>
          Bài Test Giải Trí
        </Typography>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(handleSubmitForm)}>
            {/* <TextField {...register('test')} /> */}
            {showAllListQuestion(listQuesTionReceive)}
            <Box component="span" m={1}>
              <Button />
            </Box>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Button type="submit" variant="contained" color="primary">
                Xem Kết Quả
              </Button>
            </Grid>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  listQuesTionReceive: state.dataQuestions.listQuestion,
  isSuccess: state.signin.resultRedirect,
  user: state.signin.user,
});

const mapDispatchToProps = dispatch => ({
  fetchListQuestionCreator: () => dispatch(actions.fetchListQuestion()),
  submitValuesCreator: data => dispatch(actions.submitValue(data)),
});

export default withStyles(style)(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(TestPage),
);
