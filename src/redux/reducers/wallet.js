import {
	RECEIVE_BALANCE,
	REQUEST_BALANCE,
	ADD_BALANCE,
} from '../actions/wallet/actionTypes';

const initialState = {
	isFetching: false,
	balance: 0,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case REQUEST_BALANCE:
			return {
				...state,
				isFetching: true,
			};
		
		case RECEIVE_BALANCE:
			const { data } = action;

			return {
				...state,
				balance: data.total_balance,
			};
			
		case ADD_BALANCE:
			const { amount } = action;

			return {
				...state,
				balance: +state.balance - +amount,
			};
		
		default:
			return state;
	}
}