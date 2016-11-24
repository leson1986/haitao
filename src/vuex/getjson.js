/**
 * Created by ls.c on 2016/11/4.
 */

import vue from 'vue'
/**
 * get请求
 * @param  {String} options.url   api地址
 * @param  {String} options.query query参数
 * @return {Promise}               Promise
 *
 * 测试：http://localhost/gd
 * 正式：http://www.swidc.net
 */
let test_host = 'http://localhost/gd'
let host = 'http://www.swidc.net'
const getjson = ({ url, query }, commit) => {
	if (commit) commit('START_LOADING')
	let _url
	if (query) {
		_url = host + `/${url}?${query}`
	} else {
		_url = host + `/${url}`
	}

	return vue.http.get(_url)
		.then((res) => {
			if (commit) commit('FINISH_LOADING')
			if (res.status >= 200 && res.status < 300) {
				return JSON.parse(res.data)
			}
			return Promise.reject(new Error(res.status))
		})
}

const postjson = ({ url, query }, commit) => {
	if (commit) commit('START_LOADING')
	let _url
	if (query) {
		_url = host + `/${url}?${query}`
	} else {
		_url = host + `/${url}`
	}

	return vue.http.post(_url)
		.then((res) => {
			if (commit) commit('FINISH_LOADING')
			if (res.status >= 200 && res.status < 300) {
				return JSON.parse(res.data)
			}
			return Promise.reject(new Error(res.status))
		})
}


export default getjson