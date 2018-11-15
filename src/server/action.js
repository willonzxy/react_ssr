/*
 * @Author: 伟龙-Willon qq:1061258787 
 * @Date: 2018-11-14 18:28:58 
 * @Last Modified by: 伟龙-Willon
 * @Last Modified time: 2018-11-15 15:35:05
 */
import fetch from "isomorphic-fetch"
export const add = () => ({type:'ADD'})

export const storeData = ( data ) => ( {
    type: "STORE_DATA",
    data,
})

function fetchCircuits() {
    return fetch( "http://localhost:4040/test" ,{mode:'cors'})
        .then( res => res.json() )
}

export const fetchData = () => ( dispatch ) =>
    fetchCircuits().then( res => dispatch( storeData(res)) );
        