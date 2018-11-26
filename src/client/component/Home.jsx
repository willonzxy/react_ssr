/*
 * @Author: 伟龙-Willon qq:1061258787 
 * @Date: 2018-11-14 22:02:57 
 * @Last Modified by: 伟龙-Willon
 * @Last Modified time: 2018-11-15 16:00:36
 */
import React,{Component} from 'react'
import {connect} from 'react-redux'
import {fetchData} from '../../server/action'
import PropTypes from 'prop-types'
class Home extends React.Component {
    constructor(){
        super(...arguments)
    }
    componentDidMount( ) {
        this.props.fetchData( );
    }

    render( ) {
        const { circuits } = this.props;
        return (
            <div>
                <h2>2018</h2>
                <ul>
                    { Array.isArray(circuits) && circuits.map( ( { circuitId, circuitName, Location } ) => (
                        <li key={ circuitId } >{ circuitName } - { Location.locality }, { Location.country }</li>
                    ) ) }
                </ul>
            </div>
        );
    }
}
Home.serverFetch = fetchData; // static declaration of data requirements

const mapStateToProps = ( state ) => ( {
    circuits: state.data,
} );

const mapDispatchToProps = (dispatch)=>{
    return {
        fetchData(){
            dispatch(fetchData())
        }
    }
}

Home.defaultProps = {
    circuits:[]
}
export default connect( mapStateToProps, mapDispatchToProps )( Home );