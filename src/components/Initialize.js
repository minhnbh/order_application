import React, { Component } from 'react';
import { View } from 'react-native';
import { getAuthenticatedUser } from '../services/CommonServices';
import {
    StackActions,
    NavigationActions,
    NavigationEvents
  } from "react-navigation";

export default class Initialize extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        getAuthenticatedUser(result => {
            if (result) {
                this.props.navigation.dispatch(
                    StackActions.reset({
                        index: 0,
                        actions: [NavigationActions.navigate({ routeName: "bottomTabNavigator" })]
                    })
                );
            } else {
                this.props.navigation.dispatch(
                    StackActions.reset({
                        index: 0,
                        actions: [NavigationActions.navigate({ routeName: "Login" })]
                    })
                );
            }
        })
    }

    render() {
        return <View></View>
    }

}