import React, { HTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = HTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = props => <Container {...props} />;

export default Button;
