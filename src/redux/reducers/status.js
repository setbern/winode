import {
	RECEIVE_STATUSES,
	REQUEST_STATUSES,
} from '../actions/status/actionTypes';

const initialState = {
	isFetching: false,
	peers: 0,
	openChannels: 0,
	blockHeight: 0,
	warnings: 0,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case REQUEST_STATUSES:
			return {
				...state,
				isFetching: true,
			};

		case RECEIVE_STATUSES:
			const { data } = action;

			return {
				...state,
				isFetching: false,
				data,
			};

		default:
			return state;
	}
}