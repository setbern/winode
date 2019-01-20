import React from 'react';
import { API_ROOT, API_ROOT_GRAPH } from '../constants';

export default {
    graphStringify(json) {
        json = JSON.stringify(json);
        return json.replace(/\"([^(\")"]+)\":/g,'$1:');
    },
    get(route, query) {
        return (
            fetch(API_ROOT + route, {
                method: 'GET',
                crossDomain: true,
                xhrFields: {
                    withCredentials: true
                },
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(query)
            })
            .then((res) => {
                console.log(res);
                res.json();
            })
            .catch(err => console.error(err))
        );
    },
    post(route, data) {
        return (
            fetch(API_ROOT + route, {
                method: 'POST',
                xhrFields: {
                    withCredentials: true
                },
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
                credentials: 'include'
            })
            .then(res => res.json())
            .then((res) => {
                return res;
            })
            .catch(err => console.error(err))
        );
    },
    graph(graphData) {
        return (
            fetch(API_ROOT_GRAPH, {
                method: 'POST',
                xhrFields: {
                    withCredentials: true
                },
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(graphData),
                credentials: 'include'
            })
            .then(res => res.json())
            .then((payload) => {
                if (payload && payload.errors) {
                    throw payload.errors; 
                } else if (payload && payload.data && payload.data != null) {
                    return payload.data;
                } else {
                    throw 'network error';
                }
            })
            .catch(err => {
                console.error(err);
                return Promise.reject(err);
            })
        );
    },
    getExt(route, headers, query) {
        return (
            fetch(route, {
                method: 'GET',
                crossDomain: true,
                headers: headers
            })
            .then(res => res.json())
            .then((res) => {
                return res;
            })
            .catch(err => console.error(err))
        );
    },
    postExt(route, headers, data) {
        return (
            fetch(route, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: data
            })
            .then((res) => {
                return res;
            })
            .catch(err => console.error(err))
        );
    }
};