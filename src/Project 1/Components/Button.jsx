import React from "react";

class Button extends React.Component{
    shouldComponentUpdate = (nextProps) =>{
        const {change: cChange} = this.props;
        const {change: nChange} = nextProps;
        if (cChange == nChange){
            return false;
        }else{
            return true;
        }
    }
    render = () =>{
        const {change} = this.props;
        let localeButton = <button id="clockButton" onClick={change}>Change Clock Format</button>
        return (
            <div>
                <div>
                    {localeButton}
                </div>
            </div>
            
        )
    }
}

export default Button;