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
                {this.renderComments(this.props.selectedDish)}
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

    renderComments(selectedDish){
        if(selectedDish != null){
            console.log(selectedDish.comments);
            selectedDish.comments.map((commentAux) => {
                if(commentAux == null){
                    console.log("commentAux == null");
                    return (
                        <div></div>
                    );
                } else {
                    console.log(commentAux.author);
                    return (
                        <div className="row">
                            <h4>Comments</h4>
                            <ul className="list-group">
                                <li key={commentAux.key} className="list-group-item">{commentAux.comment}</li>
                                <li key={commentAux.key} className="list-group-item">-- {commentAux.author}, {commentAux.author}</li>
                            </ul>
                        </div>
                    );    
                }
            });
        } else {
            return (
                <div></div>
            );
        }

    }

}

// Need to export the component to use it in other files
export default DishDetail;