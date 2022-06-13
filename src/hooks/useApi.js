import { useState } from 'react';
import axios from 'axios';
import { useToken } from './useToken';


export const useApi = ( requireAuth = false) => {
	
	const [loading, setLoading] = useState(false);
	const { tokenExist, getToken } = useToken();

	const setAuthToken = (headers) => {
		if (tokenExist()) {
			headers = {
				...headers,
				Authorization: getToken()
			}
		}
		return headers;
	}
	
	const callApi = (configs, handlers) => {

		const defaultConfigs = {
			url: '',
			method: '',
			data: {},
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			}
		};

		'method'  in configs && (defaultConfigs.method = configs.method);
		'url'     in configs && (defaultConfigs.url = configs.url);
		'data'    in configs && (defaultConfigs.data = configs.data);
		'headers' in configs && (defaultConfigs.headers = defaultConfigs.headers = {
			...defaultConfigs.headers,
			...configs.headers
		});

		if (requireAuth) {
			defaultConfigs.headers = setAuthToken(defaultConfigs.headers);
			if (!('Authorization' in defaultConfigs.headers)) {
				return; // requireAuth and no token exist
			}
		}
		
		setLoading(true);
		axios(defaultConfigs)
				.then((res) => {
					handlers[res.status](res.data);
				})
				.catch((err) => {
					if (err.response.status === 401) {
						
					}
					handlers[err.response.status](err.response.data);
				})
				.finally(() => {
						setLoading(false);
				});
	}

	return { callApi, loading };
}