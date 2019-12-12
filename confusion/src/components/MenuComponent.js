import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

/**
 * New Component must have contructor, render method and needs to be exported 
 */
class Menu extends Component {

    constructor (props){
        super(props);
        console.log('Menu component Constructor is invoked');
    }

    componentDidMount(){
        console.log('Menu component componentDidMount is invoked');
    }

    // Corresponding VIEW for this component
    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.props.onClick(dish.id)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle> {dish.name} </CardTitle>
                            {/* <CardText> {dish.description} </CardText> */}
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        console.log('Menu component RENDER is invoked');
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }
}

// Need to export the component to use it in other files
export default Menu;