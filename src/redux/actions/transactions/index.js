import fetch from 'cross-fetch';

import { REQUEST_TRANSACTION, RECEIVE_TRANSACTION } from './actionTypes';

function requestTransaction() {
	return {
		type: REQUEST_TRANSACTION,
	};
}

function receiveTransaction(data) {
	return {
		type: RECEIVE_TRANSACTION,
		data,
	};
}

export function sendMoney({ amount, address }) {
	return dispatch => {
		dispatch(requestTransaction());

		return fetch('http://localhost:4200/initiate-transaction', {
			method: 'POST',
			body: {
				amount,
				address,
			},
		})
			.then(response => response.json())
			.then(data => {
				console.log('got data', data);
				return dispatch(receiveTransaction(data));
			});
	}
}