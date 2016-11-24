/**
 * Created by ls.c on 2016/11/3.
 */

import getjson from '../../getjson'

/**
 * 获取所有产品信息
 * @param  {Function} options.commit store对象解构出来的函数，无需手动提供
 * @param  {Number} page             页数
 * @param  {Number} count             每页数量
 * @return {Promise}                  Promise
 */
export const fetchProductsData = ({ commit }, ids) =>{

	const url = 'get_products.php'
	const query =  `classid=${ids}&_t=` + new Date().getTime()
	return getjson({url, query}, commit)
		.then((json) => {
			if (json.recode === 0) {
				return commit('FETCH_PRODUCTS_ALL_SUCCESS', json.data)
			}
			return Promise.reject(new Error('fetchProductsData failure'))
		})
		.catch((error) => {
			return Promise.reject(error)
		})

}

/**
 * 获取某个ID产品信息
 * @param  {Function} options.commit store对象解构出来的函数，无需手动提供
 * @param  {Number} page             页数
 * @param  {Number} count             每页数量
 * @return {Promise}                  Promise
 */
export const fetchProductsItem = ({ commit }, ids) =>{

	const url = 'get_products_item.php'
	const query =  `classid=${ids}&_t=` + new Date().getTime()
	return getjson({url, query}, commit)
		.then((json) => {
			if (json.recode === 0) {
				return commit('FETCH_PRODUCTS_ITEM_SUCCESS', json.data)
			}
			return Promise.reject(new Error('fetchProductsItem failure'))
		})
		.catch((error) => {
			return Promise.reject(error)
		})

}

/**
 * 获取须知信息与推荐信息
 * @param  {Function} options.commit store对象解构出来的函数，无需手动提供
 * @param  {Number} page             页数
 * @param  {Number} count             每页数量
 * @return {Promise}                  Promise
 */
export const fetchInfoData = ({ commit }, ids) =>{

	const url = 'get_info.php'
	const query =  `id=${ids}&_t=` + new Date().getTime()
	return getjson({url, query}, commit)
		.then((json) => {
			if (json.recode === 0) {
				return commit('FETCH_INFO_DATA_SUCCESS', json.data)
			}
			return Promise.reject(new Error('fetchInfoData failure'))
		})
		.catch((error) => {
			return Promise.reject(error)
		})

}

/**
 * 获取海淘信息列表
 * @param  {Function} options.commit store对象解构出来的函数，无需手动提供
 * @param  {Number} page             页数
 * @param  {Number} count             每页数量
 * @return {Promise}                  Promise
 */
export const fetchInfoList = ({ commit }, ids) =>{

	const url = 'get_info_list.php'
	const query = ''
	return getjson({url, query}, commit)
		.then((json) => {
			if (json.recode === 0) {
				return commit('FETCH_INFO_LIST_SUCCESS', json.data)
			}
			return Promise.reject(new Error('fetchInfoList failure'))
		})
		.catch((error) => {
			return Promise.reject(error)
		})

}


/**
 * 保存购物车信息
 * @param  {Function} options.commit store对象解构出来的函数，无需手动提供
 * @param  {Number} page             页数
 * @param  {Number} count             每页数量
 * @return {Promise}                  Promise
 */
let carArr = []
export const fetchCarList = ({commit}, lists) => {

	carArr = carArr.concat(lists)
	commit('FETCH_CARLIST_SUCCESS', carArr)

}

/**
 * 底部导航状态
 * @param  {Function} options.commit store对象解构出来的函数，无需手动提供
 * @param  {Number} page             页数
 * @param  {Number} count             每页数量
 * @return {Promise}                  Promise
 */
export const fetchFootNavStatus = ({commit}, names) => {

	commit('FETCH_FOOTNAVSTATUS_SUCCESS', names)

}

/**
 * 底部导航状态
 * @param  {Function} options.commit store对象解构出来的函数，无需手动提供
 * @param  {Number} page             页数
 * @param  {Number} count             每页数量
 * @return {Promise}                  Promise
 */
export const fetchHeadNavStatus = ({commit}, names) => {

	commit('FETCH_HEADNAVSTATUS_SUCCESS', names)

}
