import { createAction } from 'typesafe-actions';
import { Msgs, Request } from './types';

export const SEND = 'chat/SEND';
export const SEND_SAGA = 'chat/SEND_SAGA';
export const SETTING_USER_ID = 'chat/SETTING_USER_ID';

export const send = createAction(SEND)<Request>();
export const send_saga = createAction(SEND_SAGA)<Msgs>();
export const setting_user_id = createAction(SETTING_USER_ID)<string>();
