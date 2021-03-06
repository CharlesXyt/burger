import React,{Component} from 'react'
import Order from '../../components/Order/Order'
import axios from '../../axios-orders'
import withErrorHandler from '../../components/hoc/withErrorHandler/withErrorHandle'
import {connect} from 'react-redux'
import * as actions from '../../components/store/actions/index'
import Loader from '../../components/UI/Spinner/Spinner'

class Orders extends Component{


    componentDidMount(){
        this.props.onFetchOrders(this.props.token,this.props.userId)
    }

    render(){
        let orders = <Loader/>
        if(!this.props.loading){
            orders = (
                <div>
                    {this.props.orders.map((el) =>{
                        return (
                            <Order key={el.id} ingredients={el.ingredients} price={el.price}/>
                        )
                    })}
                </div>
            )
        }
        return orders
    }
}

const mapStateToProps = state => {
    return{
        loading:state.order.loading,
        orders:state.order.orders,
        token:state.auth.token,
        userId:state.auth.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders:(token,userId) => dispatch(actions.fetchAllOrders(token,userId))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(Orders,axios));