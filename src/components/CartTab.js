import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';

export default class CartTab extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Image style={{ width: 20, height: 20 }} source={this.props.iconPath} />
                <Text style={{ position: 'absolute', top: -5, right: -5, paddingLeft: 3, paddingRight: 3, backgroundColor: 'red', color: 'white', borderRadius: 10 }}>
                    3
                </Text>
            </View>
        )
    }

}