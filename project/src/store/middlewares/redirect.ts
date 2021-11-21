import { ActionType } from '../../types/action';
import { Middleware } from 'redux';
import browserHistory from '../../browse-history';
import { State } from '../../types/state';

export const redirect: Middleware<unknown, State> =
  (_store) =>
    (next) =>
      (action) => {

        if (action.type === ActionType.RedirectToRoute) {
          browserHistory.push(action.payload);
        }

        return next(action);
      };
