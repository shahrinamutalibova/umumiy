import React, {lazy, Suspense} from "react";
import {Routes, Route} from 'react-router-dom';

const Layout = lazy(() => import('../components/layout'));
const Posts = lazy(() => import('../pages/posts/posts'));
const Users = lazy(() => import('../pages/users/users'));
const Albums = lazy(() => import('../pages/albums/albums'));
const Todos = lazy(() => import('../pages/todos/todos'));

const Routing = () => <Suspense fallback={'Loading'}>
    <Routes>
        <Route path={'/'} element={<Layout/>} >
            <Route path={'/posts'} element={<Posts/>}/>
            <Route path={'/users'} element={<Users/>}/>
            <Route path={'/albums'} element={<Albums/>}/>
            <Route path={'/todos'} element={<Todos/>}/>
        </Route>
    </Routes>
</Suspense>

export default Routing