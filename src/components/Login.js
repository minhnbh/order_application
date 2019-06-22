import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import { Button, Item, Input, Icon } from 'native-base';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    onFieldChange(key, value) {
        this.setState({
            [key]: value
        });
    }

    signIn() {
        Alert.alert('Thông báo', 'Vợ heooooooooo');
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#2b2b2b' }}>
                <View style={{ flex: 0.45 }}>
                    <Text style={{ textAlign: 'center', height: '100%', textAlignVertical: 'center', color: '#CFAB57', fontSize: 30 }}>logo</Text>
                </View>
                <View style={{ flex: 0.55 }}>
                    {/* <View style={{ flex: 1, flexDirection: 'row', margin: 30 }}> */}
                        <Item style={{ marginLeft: 20, marginRight: 20 }}>
                            <Icon type="FontAwesome5" active name='envelope' style={{ color: 'white', width: 50 }} />
                            <Input placeholder='Icon Textbox' placeholderTextColor="white" onChangeText={(value) => this.onFieldChange('username', value)} />
                        </Item>
                        <Item style={{ marginLeft: 20, marginRight: 20 }}>
                            <Icon type="FontAwesome5" active name='lock' style={{ color: 'white', width: 50 }} />
                            <Input placeholder='Icon Alignment in Textbox' placeholderTextColor="white" onChangeText={(value) => this.onFieldChange('password', value)} />
                        </Item>
                        <Button rounded style={{ backgroundColor: '#CFAB57', alignSelf: 'center', paddingLeft: 100, paddingRight: 100, marginTop: 50 }}
                            onPress={() => { this.signIn() }}>
                            <Text style={{ color: 'white', fontSize: 17 }}>Login</Text>
                        </Button>
                        <Text style={{ textAlign: 'center', marginTop: 10, color: 'white' }}>No Account? SIGN UP</Text>
                    {/* </View> */}
                </View>
            </View>
        )
    }

}