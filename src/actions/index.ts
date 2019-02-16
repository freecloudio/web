import { Action as AuthAction } from './authActions';
import { Action as NotificationAction } from './notificationActions';
import { Action as UserAction } from './userActions';
import { Action as FileAction } from './fileActions';

export type Action = AuthAction | NotificationAction | UserAction | FileAction;
