/*
 * @Author: 伟龙-Willon qq:1061258787 
 * @Date: 2018-11-13 23:40:01 
 * @Last Modified by: 伟龙-Willon
 * @Last Modified time: 2018-11-14 19:26:55
 */
import React , { Component } from "react"
import { connect } from "react-redux"
import  PropTypes from "prop-types"
import { add as ADD } from "../../server/action"
const Click = ({num,add}) => {
    return (
        <div>
            <button onClick={()=>{add()}}>按钮</button>
            {num}
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        add(){
            dispatch(ADD())
        }
    }
}

const mapStateToProps = ({count}) => { // 注意这个放回的的store是完整的
    return {
        num:count.num
    }
}

Click.propTypes = {
    num:PropTypes.number.isRequired
}

Click.defaultProps = {
    num:0
}


export default connect(mapStateToProps,mapDispatchToProps)(Click)