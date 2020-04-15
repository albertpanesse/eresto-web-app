import axios from 'axios'

export default {
	create: function(data) {
		return axios.post(`${process.env.VUE_APP_API_URL}/menu/create`, data)
	},
	update: function(data) {
		return axios.put(`${process.env.VUE_APP_API_URL}/menu/update`, data)
	},
	delete: function(id) {
		return axios.delete(`${process.env.VUE_APP_API_URL}/menu/delete`, {
			data: {
				id
			}
		})
	},
	one: function(id) {
		return axios.get(`${process.env.VUE_APP_API_URL}/menu/one/${id}`)
	},
	many: function() {
		return axios.get(`${process.env.VUE_APP_API_URL}/menu/many`)
	}
}
