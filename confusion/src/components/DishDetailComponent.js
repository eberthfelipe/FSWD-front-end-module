import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

    const DishDetail = (props) => {
        console.log('DishDetail comments: ' + props.dish);
        return (
            <div>
                <div className='container'>
                    <div className="row">
                        <RenderDish dish={ props.dish } />
                        <RenderComments dish={ props.dish } />
                    </div>
                </div>
            </div>
        );
    }
    
    function RenderDish({ dish }){
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

    function RenderComments({ dish }){
        if(dish != null){
            console.log(dish.comments);
            let allComment = dish.comments.map((commentAux) => {
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

// Need to export the component to use it in other files
export default DishDetail;