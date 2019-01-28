import * as React from 'react';
import { Header, Left, Body, Title, Right, Button, Icon } from 'native-base';

interface Props {
    text: string;
}

export const HeaderComponent = (props: Props) => {
    return (
        <Header>
            <Left>
                <Button transparent onPress={() => { }}>
                    <Icon name="menu" />
                </Button>
            </Left>
            <Body>
                <Title>{props.text}</Title>
            </Body>
            <Right />
        </Header>
    );
}