import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const DishDetail = (props) => {
    console.log('DishDetail comments: ' + props.comments);
    return (
        <div>
            <div className='container'>
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to='/menu'>Menu</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderDish dish={ props.dish } />
                    <RenderComments comments={ props.comments } />
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

function RenderComments({ comments }){
    if(comments != null){
        console.log(comments);
        let allComment = comments.map((commentAux) => {
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