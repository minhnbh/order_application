import React, { Component } from 'react';
import { View, Text, Alert, Keyboard, Platform, UIManager, LayoutAnimation } from 'react-native';
import { Button, Item, Input, Icon, Spinner } from 'native-base';
import { login } from '../api/UserServices';
import {
    StackActions,
    NavigationActions,
    NavigationEvents
  } from "react-navigation";

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            doing_login: false,
            loginBtnPaddingLeft: 100,
            loginBtnPaddingRight: 100
        }
        if (Platform.OS === "android") {
            UIManager.setLayoutAnimationEnabledExperimental(true);
          }
    }

    onFieldChange(key, value) {
        this.setState({
            [key]: value
        });
    }

    signIn() {
        Keyboard.dismiss();
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        this.setState({ doing_login: true, loginBtnPaddingLeft: 25, loginBtnPaddingRight: 25 }, () => {
            login(this.state.username, this.state.password, status => {
                if (status) {
                    this.props.navigation.dispatch(
                        StackActions.reset({
                            index: 0,
                            actions: [NavigationActions.navigate({ routeName: "bottomTabNavigator" })]
                        })
                    );
                } else {
                    Alert.alert('Thông báo', 'Username or password is not correct. Please check and try again.');
                    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                    this.setState({ doing_login: false, loginBtnPaddingLeft: 100, loginBtnPaddingRight: 100 });
                }
            });
        });
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#2b2b2b' }}>
                <View style={{ flex: 0.45 }}>
                    <Text style={{ textAlign: 'center', height: '100%', textAlignVertical: 'center', color: '#CFAB57', fontSize: 30, fontFamily: 'Comfortaa-Bold' }}>logo</Text>
                </View>
                <View style={{ flex: 0.55 }}>
                    {/* <View style={{ flex: 1, flexDirection: 'row', margin: 30 }}> */}
                        <Item style={{ marginLeft: 20, marginRight: 20 }}>
                            <Icon type="FontAwesome5" active name='envelope' style={{ color: 'white', width: 50 }} />
                            <Input placeholder='Username' placeholderTextColor="white" style={{ color: 'white', fontFamily: 'Comfortaa-Bold' }} onChangeText={(value) => this.onFieldChange('username', value)} />
                        </Item>
                        <Item style={{ marginLeft: 20, marginRight: 20 }}>
                            <Icon type="FontAwesome5" active name='lock' style={{ color: 'white', width: 50 }} />
                            <Input secureTextEntry={true} placeholder='Password' placeholderTextColor="white" style={{ color: 'white', fontFamily: 'Comfortaa-Bold' }} onChangeText={(value) => this.onFieldChange('password', value)} />
                        </Item>
                        <Button rounded style={{ backgroundColor: '#CFAB57', alignSelf: 'center', paddingLeft: this.state.loginBtnPaddingLeft, paddingRight: this.state.loginBtnPaddingRight, marginTop: 50 }}
                            onPress={() => { this.signIn() }}>
                            { this.state.doing_login ? <Spinner color="white" /> : <Text style={{ color: 'white', fontSize: 17 }}>Login</Text> }
                        </Button>
                        <Text style={{ textAlign: 'center', marginTop: 10, color: 'white' }}>No Account? SIGN UP</Text>
                    {/* </View> */}
                </View>
            </View>
        )
    }

}