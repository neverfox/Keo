import Immutable from 'seamless-immutable';
import { COUNTRY } from '../config/events';

/**
 * @constant INITIAL_STATE
 * @type {Immutable}
 */
const INITIAL_STATE = new Immutable({});

/**
 * @param {Object} state
 * @param {Object} action
 * @return {Object}
 */
export default (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case COUNTRY:
            return new Immutable(action.model);

    }

    return state;

};
