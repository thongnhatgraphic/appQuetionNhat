/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILD = 'FETCH_DATA_FAILD';

export const SUBMIT_VALUE = 'SUBMIT_VALUE';
export const SUBMIT_VALUE_SUCCESS = 'SUBMIT_VALUE_SUCCESS';
export const SUBMIT_VALUE_FAILD = 'SUBMIT_VALUE_FAILD';
