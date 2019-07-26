import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input,Grid,Col, Label, Button, Text, Left, Icon, Right, Card,  Body, Title} from 'native-base';
import { black } from 'ansi-colors';
import { Linking } from 'react-native';
export default class FloatingLabelExample extends Component {



  render() {
    return (
      <Container >
       <Header noShadow  style={{marginBottom:-4}}>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title style={{paddingLeft:19}}>One Time Login</Title>
          </Body>
          <Right>
            <Button >
              <Icon name="menu" />
            </Button>
          </Right>
        </Header>
        <Content >
          <Card style={{backgroundColor: '#fffdd0', Height:600 }}>
           
          <Text style={{marginLeft:30, marginTop:10}}>To have a ride, Login to Drive Zone Account</Text>
          <Form>
          <Item stackedLabel>
              <Label>Email/Phone Number</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
          <Button full login style ={{margin:10}}>
            <Text>Login</Text>
          </Button>
          <Grid>
          <Col style={{height: 30 }}>
          <Text onPress={() => Linking.openURL('https://google.com')} style={{padding:5, marginBottom:10}}>
    Forgot Password
</Text>
          </Col>
          <Col style={{ height: 20 }}>
            <Text  style={{textAlign:'right', marginBottom:10, padding:5}}>Register</Text>
          </Col>
          
        </Grid>
     

</Card>
        </Content>
      </Container>
    );
  }
}

const url="https://google.com"
