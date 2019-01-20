import { REQUEST_TRANSACTION, RECEIVE_TRANSACTION } from '../actions/transactions/actionTypes';

const initialState = {
	isFetching: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case REQUEST_TRANSACTION:
			return {
				...state,
				isFetching: true,
			};

		case RECEIVE_TRANSACTION:
			const { data } = action;

			return {
				...state,
				isFetching: false,
				...data,
			};

		default:
			return state;
	}
}