import constants from '../constants/constants.js';
import AppDispatcher from '../dispatcher/AppDispatcher.js';

let AppActions = {
    addPony(pony) {
        AppDispatcher.dispatch({
            actionType: constants.ADD_PONY,
            pony: pony
        })
    },
    remove(pony) {
        AppDispatcher.dispatch({
            actionType: constants.REMOVE_PONY,
            pony: pony
        });
    }
};

export default AppActions;