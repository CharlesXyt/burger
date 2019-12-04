import React from "react"
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'


const controls =[
    {label:'Salad',type:'salad'},
    {label:'Bacon',type:'bacon'},
    {label:'Cheese',type:'cheese'},
    {label:'Meat',type:'meat'}
];



const buildControls = (props) =>{

    
    return (
        <div className={classes.BuildControls}>
            <p>Current Price:{props.price.toFixed(2)}</p>
            {controls.map(ctrl => <BuildControl key={ctrl.label} label={ctrl.label} clickedAdd={props.clickedAdd} clickedRemove={props.clickedRemove} disabled={props.disableInfo[ctrl.type]} type={ctrl.type}/>)}
            <button className={classes.OrderButton}
            disabled={!props.purchasable}
            >ORDER NOW</button>
       </div>
    )
    

}


export default buildControls;