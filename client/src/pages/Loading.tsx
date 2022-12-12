import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin, Space } from 'antd';
import styled from "styled-components"

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const StyledLoading = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Loading: React.FC = () => (
    <StyledLoading className='loading'>
        <Spin indicator={antIcon} size="large" />
    </StyledLoading>
)

export default Loading;