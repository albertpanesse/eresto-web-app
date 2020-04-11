import axios from 'axios'

export default {
  getStatuses: () => {
    return axios.get(`${process.env.VUE_APP_API_SERVICE}/table/statuses`)
  },
  getDetail: tableNum => {
    return axios.get(`${process.env.VUE_APP_API_SERVICE}/table/detail/${tableNum}`)
  }
}
