import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem,
            Button, Modal, ModalHeader, ModalBody, Label } from 'reactstrap';
import { Control, LocalForm, Errors} from 'react-redux-form';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

const DishDetail = (props) => {
    console.log('DishDetail comments: ' + props.comments);
    if(props.isLoading){
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    } else if(props.errMess){
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    } else if(props.dish != null){
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
                        <RenderComments comments={props.comments}
                            postComment={props.postComment}
                            dishId={props.dish.id}
                        />
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }
}

function RenderDish({ dish }){
    if(dish != null){
        return (
            <div className="col-12 col-md-5 m-1">
                <FadeTransform in 
                transformProps ={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                    <Card>
                        <CardImg src={baseUrl + dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle> {dish.name} </CardTitle>
                            <CardText> {dish.description} </CardText>
                        </CardBody>
                    </Card>
                </FadeTransform>
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }
}

function RenderComments({ comments, dishId, postComment }){
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
                    <Fade in key={commentAux.id}>
                        <ul className="list-unstyled">
                            <li key={commentAux.id}>
                                <p>{commentAux.comment}</p>
                                <p>-- {commentAux.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(commentAux.date)))}</p>
                            </li>
                        </ul>
                    </Fade>
                );
            }
        });
        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <Stagger in>
                    {allComment}
                </Stagger>
                <CommentForm dishId={dishId} postComment={postComment} />
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }
}

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            isNavOpen: false,
            isModalOpen: false
          };
  
        this.toogleNav = this.toogleNav.bind(this);
        this.toogleModal = this.toogleModal.bind(this);
        this.handleSubmmit = this.handleSubmmit.bind(this);
    }

    render(){
        console.log("CommentForm");
        return (
            <div>
                <Button outline onClick={this.toogleModal}>
                    <span className="fa fa-pencil fa-lg"></span> Submit Comment
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toogleModal}>
                    <ModalHeader toggle={this.toogleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmmit(values)}>
                            <div className="form-group">
                                <Label htmlFor="rating">Rating</Label>
                                <Control.select model=".rating" name="rating"
                                            className="form-control"
                                            defaultValue="1">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                </Control.select>
                            </div>
                            <div className="form-group">
                                <Label htmlFor="author">Your Name</Label>
                                <Control.text model=".author" id="author" name="author"
                                    placeholder="Your Name"
                                    className="form-control"
                                    validators={{
                                        minLength: minLength(3),
                                        maxLength: maxLength(15)
                                    }}
                                />
                                <Errors 
                                    className="text-danger"
                                    model=".author"
                                    show="touched"
                                    messages={{
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <Label htmlFor="comment">Comment</Label>
                                <Control.textarea model=".comment" id="comment" name="comment"
                                    rows="6"
                                    className="form-control"
                                />
                            </div>
                            <Button type="submit" color="primary">
                                Submit
                            </Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
                
        );
    }

    toogleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toogleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmmit(values){
        console.log(values);
        this.toogleModal();
        this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
    }

}


// Need to export the component to use it in other files
export default DishDetail;