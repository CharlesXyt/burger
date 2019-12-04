import React from 'react'
import Burger from '../../components/Burger/Burger'
import BuilderControls from '../../components/Burger/BuildControls/BuildControls'


const INGREDIENT_PRICES = {
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.7
}


class BurgerBuilder extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            ingredients:{
                salad:0,
                bacon:0,
                cheese:0,
                meat:0
            },
            totalPrice:4,
            purchasable:false
        }
    }

    updatePurchaseState = (updatedIngredients) => {
        const ingredients = {
            ...updatedIngredients
        };
        const sum = Object.keys(ingredients).reduce((sum,el)=>{
            return sum + ingredients[el]
        },0)
        console.log(sum)
        this.setState({
            purchasable:sum > 0
        })
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        const updatedCount = oldCount + 1
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount
        const oldPrice = this.state.totalPrice
        const updatedPrice = oldPrice + INGREDIENT_PRICES[type]
        this.setState({
            ingredients:updatedIngredients,
            totalPrice:updatedPrice
        })
        this.updatePurchaseState(updatedIngredients);

    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        const updatedCount = oldCount -1
        const oldPrice = this.state.totalPrice
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount
        const updatedPrice = oldPrice - INGREDIENT_PRICES[type]
        this.setState({
            ingredients:updatedIngredients,
            totalPrice:updatedPrice
        })
        this.updatePurchaseState(updatedIngredients);

    }

    render(){
        const disableInfo = {
            ...this.state.ingredients
        };
        for (let key in disableInfo){
            disableInfo[key] = disableInfo[key] <= 0
        }
        return (
            <React.Fragment>
                <Burger ingredients={this.state.ingredients}/>
                <BuilderControls clickedAdd={this.addIngredientHandler} clickedRemove={this.removeIngredientHandler} disableInfo={disableInfo} 
                price={this.state.totalPrice}
                purchasable={this.state.purchasable}/>
                
            </React.Fragment>
        );
    }
}


export default BurgerBuilder;