/*
 * @Author: 伟龙-Willon qq:1061258787 
 * @Date: 2018-11-14 18:17:46 
 * @Last Modified by: 伟龙-Willon
 * @Last Modified time: 2018-11-14 19:24:38
 */
export default (state = {} , action)=>{
    switch(action.type){
        case "ADD": return { num : ++state.num };
        default:return state
    }
}