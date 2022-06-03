import axios from 'axios'

export const Services = async (id: any, url: any, type: any) => {
	let responses
	await axios({
		method: type,
		url: `https://api.mercadolibre.com/${url}${id}`,
	})
		.then((response) => {
			responses = response.data
		})
		.catch((error) => {
			console.log('error', error)
		})
	return responses
}
