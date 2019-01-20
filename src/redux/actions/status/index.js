import request from 'request';
import fetch from 'cross-fetch';

import { REQUEST_STATUSES, RECEIVE_STATUSES } from './actionTypes';

function requestStatuses() {
	return {
		type: REQUEST_STATUSES,
	};
}

function receiveStatuses(data) {
	return {
		type: RECEIVE_STATUSES,
		data,
	};
}

export function loadStatuses() {
	return dispatch => {
		dispatch(requestStatuses());

		const options = {
			url: 'https://localhost:8080/v1/getinfo',
			rejectUnauthorized: false,
			json: true,
		};

		return new Promise((resolve, reject) => {
			request.get(options, function(err, res, body) {
				resolve(body);
			});
		})
			.then(body => {
				return dispatch(receiveStatuses(body));
			});

			/*
		return fetch('http://localhost:8080/v1/getinfo', {
			rejectUnauthorized: false,
		})
			.then(response => {
				console.log('got response', response);
				return response.json();
			})
			.then(data => {
				console.log('got data', data);
				return dispatch(receiveStatuses(data));
			});
			*/
	}
}