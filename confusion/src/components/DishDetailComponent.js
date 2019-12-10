import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

/**
 * New Component must have contructor, render method and needs to be exported 
 */
class DishDetail extends Component {

    constructor (props){
        super(props);

    }

    render(){
        return (
            <div className="row">
                {this.renderDish(this.props.selectedDish)}
            </div>

        );
    }

    renderDish(dish){
        if(dish != null){
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle> {dish.name} </CardTitle>
                            <CardText> {dish.description} </CardText>
                        </CardBody>
                    </Card>        
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }

}

// Need to export the component to use it in other files
export default DishDetail;