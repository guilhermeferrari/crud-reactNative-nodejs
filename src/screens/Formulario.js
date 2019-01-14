import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Title, Body, Subtitle } from 'native-base';


export default class Formulario extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>
                            Title Test
                        </Title>
                    </Body>
                </Header>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Username</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel>
                            <Label>Password</Label>
                            <Input secureTextEntry/>
                        </Item>
                    </Form>
                </Content>
            </Container>
        );
    }
}