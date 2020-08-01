import React from 'react';

import { 
    Container,
    TitleContainer,
    Controllers 
}  from './styles';

interface IContentHeaderProps {
    title: string;
    lineColor: string;
    children: React.ReactNode;
}

const ContentHeader: React.FC<IContentHeaderProps> = ({
    title, lineColor, children
}) => (
    <Container>
        <TitleContainer lineColor={lineColor}>
            <h1>{title}</h1>                
        </TitleContainer>
        <Controllers>
            {children}
        </Controllers>
    </Container>
);


export default ContentHeader;