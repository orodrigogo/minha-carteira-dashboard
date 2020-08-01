import React, { InputHTMLAttributes } from 'react';

import { Container }  from './styles'

type IInputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<IInputProps> = ({ ...rest }) => (
    <Container {...rest} />
);

export default Input;