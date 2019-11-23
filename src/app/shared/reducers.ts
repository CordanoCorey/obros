import { build, Token, StorageActions, Action } from '@caiu/library';

import { CurrentUserActions } from './actions';
import { CurrentUser } from './models';

export function currentUserReducer(state: CurrentUser = new CurrentUser(), action: Action): CurrentUser {
  switch (action.type) {
    case StorageActions.INIT_STORE:
      return CurrentUser.Build(action.payload.localStore ? action.payload.localStore.currentUser : {});

    default:
      return state;
  }
}
