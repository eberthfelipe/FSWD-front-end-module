import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

/**
 * New Component must have contructor, render method and needs to be exported 
 */
class DishDetail extends Component {

    render(){
        console.log('DishDetail component render is invoked');
        return (
            <div>
                <div className='container'>
                    <div className="row">
                        {this.renderDish(this.props.dish)}
                        {this.renderComments(this.props.dish)}
                    </div>
                </div>
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
            let allComment = selectedDish.comments.map((commentAux) => {
                if(commentAux == null){
                    console.log("commentAux == null");
                    return (
                        <div></div>
                    );
                } else {
                    console.log(commentAux.author);
                    return (
                        <div key={commentAux.id} >
                            <ul className="list-unstyled">
                                <li>{commentAux.comment}</li>
                                <li>-- {commentAux.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(commentAux.date)))}</li>
                            </ul>
                        </div>
                    );
                }
            });
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {allComment}
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }

    }

    componentDidMount(){
        console.log('DishDetail component componentDidMount is invoked');
    }

    componentDidUpdate(){
        console.log('DishDetail component componentDidUpdate is invoked');
    }

}

// Need to export the component to use it in other files
export default DishDetail;