import { createAction } from 'typesafe-actions';
import { TableRows } from './types';

// 액션 type
export const GET_DATA = 'table/GET_DATA';
export const SET_DATA = 'table/SET_DATA';

export const get_data = createAction(GET_DATA)();
export const set_data = createAction(SET_DATA)<TableRows>();
