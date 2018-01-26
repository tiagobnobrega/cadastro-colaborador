import { takeEvery, takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../actions';
import { TYPES } from '../actions';

const apiRoot = '/api/employee';
export function* listEmployeesSaga(action) {
  yield put(actions.requestEmployee());
  const response = yield axios.get(apiRoot);
  yield put(actions.listEmployeesSuccess(response.data.data));
}

export function* getEmployeeSaga({ payload }) {
  yield put(actions.requestEmployee());
  const response = yield axios.get(`${apiRoot}/${payload.id}`);
  yield put(actions.getEmployeeSuccess(response.data.data));
}

export function* saveEmployeeSaga({ payload, meta }) {
  yield put(actions.requestEmployee());
  const response = yield axios.post(apiRoot, payload.employee);
  yield put(actions.saveEmployeeSuccess(response.data.data));
  if (meta.onSuccess) {
    yield call(meta.onSuccess, response.data.data);
  }
}

export function* removeEmployeeSaga({ payload }) {
  yield put(actions.requestEmployee());
  const response = yield axios.delete(`${apiRoot}/${payload.id}`);
  yield put(actions.removeEmployeeSuccess(response.data.data));
}

export function* removeAndReloadEmployeeSaga(action) {
  yield* removeEmployeeSaga(action);
  yield* listEmployeesSaga();
}

export function* saveAndReloadEmployeeSaga(action) {
  yield* saveEmployeeSaga(action);
  yield* listEmployeesSaga();
  yield put(actions.getEmployee(action.payload.employee._id));
}

export default function* watch() {
  console.log('registering sagas for employee', {
    TYPES,
    employeeList: TYPES.EMPLOYEE_LIST,
  });
  yield takeEvery(TYPES.EMPLOYEE_LIST, listEmployeesSaga);
  yield takeLatest(TYPES.EMPLOYEE_GET_ONE, getEmployeeSaga);
  yield  takeLatest(TYPES.EMPLOYEE_SAVE,saveEmployeeSaga);
  yield takeLatest(
    TYPES.EMPLOYEE_REMOVE_AND_RELOAD,
    removeAndReloadEmployeeSaga
  );
  yield takeLatest(TYPES.EMPLOYEE_SAVE_AND_RELOAD, saveAndReloadEmployeeSaga);
}
