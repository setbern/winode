import fetch from 'cross-fetch';

import { REQUEST_TRANSACTION, RECEIVE_TRANSACTION } from './actionTypes';
import { addToBalance } from '../wallet';

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
			body: JSON.stringify({
				amount,
				address,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then(response => response.json())
			.then(data => {
				dispatch(addToBalance(amount));
				return dispatch(receiveTransaction(data));
			});
	}
}