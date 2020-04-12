import axios from 'axios'

export default {
  getStatuses: function() {
    return axios.get(`${process.env.VUE_APP_API_SERVICE}/table/statuses`)
  },
  getDetail: function(tableNum) {
    return axios.get(`${process.env.VUE_APP_API_SERVICE}/table/detail/${tableNum}`)
  },
  checkIn: function(data) {
    return axios.post(`${process.env.VUE_APP_API_SERVICE}/table/checkin`, data)
  },
  checkOut: function(data) {
    return axios.post(`${process.env.VUE_APP_API_SERVICE}/table/checkout`, data)
  }
}
