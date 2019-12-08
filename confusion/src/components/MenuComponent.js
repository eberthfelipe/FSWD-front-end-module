import React, { Component } from 'react';
import { Media } from 'reactstrap';

/**
 * New Component must have contructor, render method and needs to be exported 
 */
class Menu extends Component {

    constructor (props){
        super(props);

        this.state = {        };
    }
    
    // Corresponding VIEW for this component
    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 mt-5">
                    <Media tag="li">
                        <Media left middle>
                            <Media object src={dish.image} alt={dish.name} />
                        </Media>
                        <Media body className="ml-5">
                            <Media heading> {dish.name} </Media>
                            <p> {dish.description} </p>
                        </Media>
                    </Media>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    <Media list>
                        {menu}
                    </Media>
                </div>
            </div>
        );
    }
}

// Need to export the component to use it in other files
export default Menu;