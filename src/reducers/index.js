import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux';

import projectsReducer from './projectsReducer';
import selectedProjectReducer from './selectedProjectReducer';
import employeeReducer from './employeesReducer';

const reducers = {
  routing: routerReducer,
  employees: employeeReducer,
};
export default combineReducers(reducers);
