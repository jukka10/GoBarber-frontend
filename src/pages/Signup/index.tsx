import React from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';

import { Container, Content, Background } from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';

import logo from '../../assets/logo.svg';

const Signup: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="GoBarber" />

        <Form
          onSubmit={data => {
            console.log(data);
          }}
        >
          <h1>Faça seu cadastro</h1>

          <Input icon={FiUser} name="name" placeholder="Name" />
          <Input icon={FiMail} name="email" placeholder="Email" />
          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Senha"
          />

          <Button>Cadastrar</Button>
        </Form>

        <a href="ddfhf">
          <FiArrowLeft size={16} />
          Voltar para login
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default Signup;
