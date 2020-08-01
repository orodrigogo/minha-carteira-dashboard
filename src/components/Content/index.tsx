import React from 'react';

import { Container }  from './styles';

const Content: React.FC = ({ children }) => (
    <Container>
        {children}
    </Container>
);

export default Content;