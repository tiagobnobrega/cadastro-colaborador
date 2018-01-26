import { takeEvery, takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../actions';
import { TYPES } from '../actions';

const apiRoot = '/api/employee';
export function* listEmployeesSaga(action) {
  yield put(actions.requestEmployee);
  const response = yield axios.get(apiRoot);
  yield put(actions.listEmployeesSuccess(response.data.data));
}

export function* getEmployeeSaga({ payload }) {
  yield put(actions.requestEmployee());
  const response = yield axios.get(`${apiRoot}/${payload.id}`);
  yield put(actions.getEmployeeSuccess(response.data.data));
}

export function* saveEmployeeSaga({ payload }) {
  yield put(actions.requestEmployee);
  const response = yield axios.post(apiRoot, payload.project);
  yield put(actions.saveEmployeeSuccess(response.data.data));
}

export function* removeEmployeeSaga({ payload }) {
  yield put(actions.requestEmployee());
  const response = yield axios.delete(`${apiRoot}/${payload._id}`);
  yield put(actions.removeEmployeeSuccess(response.data.data));
}

export function* removeAndReloadProjectsSaga(action) {
  yield* removeEmployeeSaga(action);
  yield* listEmployeesSaga();
}

export function* saveAndReloadEmployeeSaga(action) {
  yield* saveEmployeeSaga(action);
  yield* listEmployeesSaga();
  yield put(actions.getEmployee(action.payload.employee._id));
}

export default function* watch() {
  yield takeEvery(TYPES.EMPLOYEE_LIST, listEmployeesSaga);
  yield takeLatest(TYPES.EMPLOYEE_GET_ONE, getEmployeeSaga);
  yield takeLatest(
    TYPES.PROJECT_REMOVE_AND_RELOAD,
    removeAndReloadProjectsSaga
  );
  yield takeLatest(TYPES.PROJECT_SAVE_AND_RELOAD, saveAndReloadEmployeeSaga);
}
