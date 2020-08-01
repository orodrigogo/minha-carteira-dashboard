import React from 'react';

import { Grid } from './styles';

import MainHeader from '../MainHeader';
import Aside from '../Aside';
import Content from '../Content';

const Layout: React.FC = ({ children }) => (
    <Grid>
        <MainHeader />
        <Aside />
        <Content>
            { children }
        </Content>
    </Grid>
);


export default Layout;