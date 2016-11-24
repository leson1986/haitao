/**
 * Created by ls.c on 2016/11/3.
 */

import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'


const state = {
	loading: false,
	productsData: [],
	productsItem: [],
	infoData: '',
	infoList: [],
	feedbackInfo: '',
	carList: [],
	footNavStatus: 'home',
	headNavStatus: ''

}

export default {
	state,
	actions,
	getters,
	mutations
}








