import React, { useState } from 'react';
import { MenuFoldOutlined,MenuUnfoldOutlined,UploadOutlined,UserOutlined,VideoCameraOutlined,} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import {useNavigate, Outlet} from 'react-router-dom';


const { Header, Sider, Content } = Layout;

const LayoutBar = () =>  {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate()

    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout style={{height:'100vh'}}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical text-white text-center" > <h2> Logo </h2> </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    onClick={(item)=> navigate(item.key) }
                    items={[
                        {
                            key: '/posts',
                            icon: <UserOutlined />,
                            label: 'Posts',
                        },
                        {
                            key: '/users',
                            icon: <VideoCameraOutlined />,
                            label: 'Users',
                        },
                        {
                            key: '/albums',
                            icon: <UploadOutlined />,
                            label: 'Albums',
                        },
                        {
                            key: '/todos',
                            icon: < UserOutlined/>,
                            label: 'Todos',
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        overflow:'auto'
                    }}
                >
                    <Outlet/>
                </Content>
            </Layout>
        </Layout>
    );
};
export default LayoutBar;