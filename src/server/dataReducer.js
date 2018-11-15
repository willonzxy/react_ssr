/*
 * @Author: 伟龙-Willon qq:1061258787 
 * @Date: 2018-11-14 23:15:56 
 * @Last Modified by: 伟龙-Willon
 * @Last Modified time: 2018-11-14 23:36:29
 */
export default (state={},action)=>{
    switch(action.type){
        case 'STORE_DATA':return action.data;
        default:return state
    }
}