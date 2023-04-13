import axios from "axios";


const qs = require('qs');

const remoteServiceBaseUrl = "https://localhost:7028/";
const http = axios.create({ baseURL: remoteServiceBaseUrl, timeout: 35000, paramsSerializer: function (params) { return qs.stringify(params, { encode: false }) } });

export default http;
