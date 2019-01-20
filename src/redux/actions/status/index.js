import request from 'request';
import fetch from 'cross-fetch';

import { REQUEST_STATUSES, RECEIVE_STATUSES } from './actionTypes';

function requestStatuses() {
	return {
		type: REQUEST_STATUSES,
	};
}

function receiveStatuses(data) {
	const { block_height, num_peers, num_active_channels } = data;
	return {
		type: RECEIVE_STATUSES,
		blockHeight: block_height,
		peers: num_peers,
		openChannels: num_active_channels,
		warnings: 2,
	};
}

export function loadStatuses() {
	return dispatch => {
		dispatch(requestStatuses());

		return fetch('http://localhost:4200/lightning-status')
			.then(response => response.json())
			.then(data => {
				console.log('got data', data);
				return dispatch(receiveStatuses(data));
			});
	}
}