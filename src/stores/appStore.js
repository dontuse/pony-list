import appDispatcher from '../dispatcher/AppDispatcher.js';
import constants from '../constants/constants.js';
import actions from '../actions/actions.js';
import {EventEmitter} from 'events';
import _ from 'lodash';

const CHANGE_EVENT = 'change';

let ponys = [];

let names = ['Гуфи', 'Нина', 'Марина', 'Франклибукирун', 'Малышок', 'Бетман', 'Спуди'];
let colors = ['Зеленый', 'Красный', 'Синий', 'Желтый'];
let kinds = ['Земная пони', 'Единорог', 'Пегас', 'Аликорн'];
let isEvil = [true, false];

// нагенерим пони
for (let i = 0; i < 10; i++) {
    let pony = {
        "name": names[Math.floor(Math.random() * names.length)],
        "color": colors[Math.floor(Math.random() * colors.length)],
        "kind": kinds[Math.floor(Math.random() * kinds.length)],
        "price": _.random(1, 1000000, 2).toFixed(2),
        "isEvil": isEvil[Math.floor(Math.random() * isEvil.length)],
        "id": _.uniqueId()
    };

    ponys.push(pony);
}


function addPony(pony) {
    pony.id = _.uniqueId();
    ponys.unshift(pony);
}

function removePony(pony) {
    ponys.forEach(function (p, index, array) {
        //console.log(p);
        if (pony.id === p.id) {
            console.log(array[index]);
            ponys.splice(index, 1);

        }
    });

}



let appStore = window.appStore = Object.assign({}, EventEmitter.prototype, {

    emitChange() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    getPonys() {
        return ponys;
    },

    getPonyColors() {
        return colors;
    },

    getPonyKinds() {
        return kinds;
    }
});


// Register callback to handle all updates
appDispatcher.register(function (action) {
    switch (action.actionType) {
        case constants.ADD_PONY:
            addPony(action.pony);
            appStore.emitChange();
            break;
        case constants.REMOVE_PONY:
            removePony(action.pony);
            appStore.emitChange();
            break;
        default:
    }
});


export default appStore;



