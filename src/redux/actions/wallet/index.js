import fetch from 'cross-fetch';

import { REQUEST_BALANCE, RECEIVE_BALANCE, ADD_BALANCE } from './actionTypes';

function requestBalance() {
	return {
		type: REQUEST_BALANCE,
	};
}

function receiveBalance() {
	return {
		type: RECEIVE_BALANCE,
		data,
	};
}

export function addToBalance(amount) {
	return {
		type: ADD_BALANCE,
		amount,
	};
}

export function loadWalletBalance() {
	return dispatch => {
		dispatch(requestBalance());

		return fetch('http://localhost:4200/get-balance')
			.then(response => response.json())
			.then(data => {
				console.log('got data', data);
				return dispatch(receiveBalance(data));
			});
	}
}

export function addBalance(amount) {
	return dispatch => {
		return dispatch(addToBalance(amount));
	}
}