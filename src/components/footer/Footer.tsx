import * as React from 'react';
import { Footer, FooterTab, Button, Text, Icon } from 'native-base';

interface Props {

}

export const FooterComponent = (props: Props) => {
    return (

        <Footer>
            <FooterTab>
                <Button active={true} onPress={() => { }}>
                    <Icon active={true} name="apps" />
                    <Text>Item1</Text>
                </Button>
                <Button active={false} onPress={() => { }}>
                    <Icon active={true} name="camera" />
                    <Text>Item2</Text>
                </Button>
                <Button active={false} onPress={() => { }}>
                    <Icon active={true} name="compass" />
                    <Text>Item3</Text>
                </Button>
                <Button active={false} onPress={() => { }}>
                    <Icon active={true} name="contact" />
                    <Text>Item4</Text>
                </Button>
            </FooterTab>
        </Footer>
    );
}