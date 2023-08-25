import React, {useEffect} from 'react';
import axios from "axios";
import {useSelector} from 'react-redux';
import PostModal from "./modal";
import {Card, Button} from "antd";
import {useDispatch} from "react-redux";
import EditModal from "./editModal";
import { deletePost , getPost} from "../../redux/actions/postAction";

function Posts() {
    const {posts} = useSelector(state => state.postReducer)
    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch(getPost());
    },[dispatch])


    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <h4>Posts</h4>
                </div>
                <div className="col-md-6 text-end">
                    <PostModal/>
                </div>
                <div className="col-md-12">
                    <div className="row">
                        {
                            posts.map((item) => <div className={'col-md-4'}>
                                <Card title={item.title}>
                                    <p>{item.body}</p>
                                    <div className={'d-flex justify-content-between'}>
                                        <Button
                                            onClick={() => {
                                                deletePost(dispatch, item.id);
                                                axios.delete(`http://localhost:5000/posts/${item.id}`);
                                            }}
                                            type={'primary'} danger>Delete</Button>
                                            <EditModal item={item}/>
                                    </div>
                                </Card>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Posts;