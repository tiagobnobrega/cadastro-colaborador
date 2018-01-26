import { createAction } from 'redux-actions';

export const TYPES = {
  EMPLOYEE_REQUEST: 'EMPLOYEE_REQUEST',
  EMPLOYEE_LIST: 'EMPLOYEE_LIST',
  EMPLOYEE_LIST_SUCCESS: 'EMPLOYEE_LIST_SUCCESS',
  EMPLOYEE_LIST_FAIL: 'EMPLOYEE_LIST_FAIL',

  EMPLOYEE_SELECT: 'EMPLOYEE_SELECT',

  EMPLOYEE_GET_ONE: 'EMPLOYEE_GET_ONE',
  EMPLOYEE_GET_ONE_SUCCESS: 'EMPLOYEE_GET_ONE_SUCCESS',
  EMPLOYEE_GET_ONE_FAIL: 'EMPLOYEE_GET_ONE_FAIL',

  EMPLOYEE_SAVE: 'EMPLOYEE_SAVE',
  EMPLOYEE_SAVE_SUCCESS: 'EMPLOYEE_SAVE_SUCCESS',
  EMPLOYEE_SAVE_FAIL: 'EMPLOYEE_SAVE_FAIL',

  EMPLOYEE_REMOVE: 'EMPLOYEE_REMOVE',
  EMPLOYEE_REMOVE_SUCCESS: 'EMPLOYEE_REMOVE_SUCCESS',
  EMPLOYEE_REMOVE_FAIL: 'EMPLOYEE_REMOVE_FAIL',

  EMPLOYEE_REMOVE_AND_RELOAD: 'EMPLOYEE_REMOVE_AND_RELOAD',
  EMPLOYEE_SAVE_AND_RELOAD: 'EMPLOYEE_SAVE_AND_RELOAD',
};

export const requestEmployee = createAction(TYPES.EMPLOYEE_REQUEST);
export const listEmployees = createAction(TYPES.EMPLOYEE_LIST);
export const listEmployeesSuccess = createAction(
  TYPES.EMPLOYEE_LIST_SUCCESS,
  projects => projects
);
export const listEmployeesFail = createAction(
  TYPES.EMPLOYEE_LIST_FAIL,
  error => error
);

export const getEmployee = createAction(TYPES.EMPLOYEE_GET_ONE, id => ({
  id,
}));
export const getEmployeeFail = createAction(
  TYPES.EMPLOYEE_GET_ONE_FAIL,
  error => error
);
export const getEmployeeSuccess = createAction(
  TYPES.EMPLOYEE_GET_ONE_SUCCESS,
  projects => projects
);

export const setSelectedEmployee = createAction(
  TYPES.EMPLOYEE_SELECT,
  project => project
);

export const saveEmployee = createAction(TYPES.EMPLOYEE_SAVE, project => ({
  project,
}));
export const saveEmployeeSuccess = createAction(TYPES.EMPLOYEE_SAVE_SUCCESS);
export const saveEmployeeFail = createAction(TYPES.EMPLOYEE_SAVE_FAIL);

export const removeEmployee = createAction(TYPES.EMPLOYEE_REMOVE, code => ({
  code,
}));
export const removeEmployeeRequest = createAction(TYPES.EMPLOYEE_REQUEST);
export const removeEmployeeSuccess = createAction(
  TYPES.EMPLOYEE_REMOVE_SUCCESS
);
export const removeEmployeeFail = createAction(TYPES.EMPLOYEE_REMOVE_FAIL);

export const removeAndReload = createAction(
  TYPES.EMPLOYEE_REMOVE_AND_RELOAD,
  code => ({ code })
);
export const saveAndReload = createAction(
  TYPES.EMPLOYEE_SAVE_AND_RELOAD,
  project => ({ project })
);
