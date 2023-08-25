import React from 'react';
import { useSelector } from 'react-redux';
import UserModal from './modal';
import { Card, Button } from 'antd';
import { useDispatch } from 'react-redux';
import EditModal from './editmodal';

function Posts() {
    const { users } = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();
    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <h4>Users</h4>
                </div>
                <div className="col-md-6 text-end">
                    <UserModal />
                </div>
                <div className="col-md-12">
                    <div className="row">
                        {users &&
                        users.map((item) => (
                            <div key={item.id} className={'col-md-4'}>
                                <Card title={item.title}>
                                    <p>{item.body}</p>
                                    <div className={'d-flex justify-content-between'}>
                                        <Button
                                            onClick={() =>
                                                dispatch({
                                                    type: 'deletePost',
                                                    payload: item.id,
                                                })
                                            }
                                            type={'primary'}
                                            danger
                                        >
                                            {' '}
                                            Delete{' '}
                                        </Button>
                                        <EditModal item={item} />
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Posts;
