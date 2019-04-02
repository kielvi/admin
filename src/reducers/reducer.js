import {
	GET_LOGIN
} from '../actions/types';


export default (state = {  }, action) => {

	switch(action.type) {
		case GET_LOGIN:
			return {
				...state,
				usuarios: action.data
			};
		default:
			return state;
	}

}

