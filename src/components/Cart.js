import React, { Component } from 'react';
import { View, ScrollView, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, CardItem, Icon, Button, Thumbnail } from "native-base";

export default class Cart extends Component {

    constructor(props) {
        super(props);
    }

    renderCartItem(title, description, quantity, image) {
        return (
            <Card>
                <CardItem>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 0.2 }}>
                            <Image style={{ height: 50, width: 50, borderRadius: 10 }} source={ image } />
                        </View>
                        <View style={{ flex: 0.80 }}>
                            <Text style={{ fontSize: 18, fontFamily: 'Comfortaa-Bold' }}>{ title }</Text>
                            <Text style={{ fontSize: 14, fontFamily: 'Comfortaa-Bold' }}>{ description }</Text>
                            <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                <Text style={ styles.changeQtyIconContainer }>
                                    <Icon type="FontAwesome5" name="minus" style={{ fontSize: 15, color: 'white' }} />
                                </Text>
                                <Text style={{ marginLeft: 10, marginRight: 10, height: 26, textAlignVertical: 'center', fontFamily: 'Comfortaa-Bold' }}>{ quantity }</Text>
                                <Text style={ styles.changeQtyIconContainer }>
                                    <Icon type="FontAwesome5" name="plus" style={{ fontSize: 15, color: 'white' }} />
                                </Text>
                            </View>
                        </View>
                        <TouchableOpacity style={{ position: 'absolute', top: 0, right: 0, borderRadius: 4, backgroundColor: '#2B2B2B' }}>
                            <Text style={{ width: 18, height: 18, textAlign: 'center', textAlignVertical: 'center' }}>
                                <Icon type="FontAwesome5" name="times" style={{ fontSize: 12, color: 'white' }} />
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ position: 'absolute', bottom: 0, right: 0, borderRadius: 10, borderColor: '#2B2B2B', borderWidth: 1, paddingLeft: 10, paddingRight: 10 }}>
                            <Text style={{ textAlign: 'center', textAlignVertical: 'center', fontSize: 12, fontFamily: 'Comfortaa-Bold' }}>
                                Edit
                            </Text>
                        </TouchableOpacity>
                    </View>
                </CardItem>
            </Card>
        )
    }

    render() {
        return (
            <ScrollView style={{ flex: 1 }}>
                <View style={{ marginLeft: 30, marginRight: 30, marginTop: 10, flex: 1, flexDirection: 'row' }}>
                    <Text style={{ flex: 0.5, fontSize: 18, fontFamily: 'Comfortaa-Bold' }}>
                        Qty: 3 cups
                    </Text>
                    <Text style={{ flex: 0.5, textAlign: 'right', fontSize: 18, fontFamily: 'Comfortaa-Bold' }}>
                        Total: $15
                    </Text>
                </View>
                <View style={{ marginLeft: 15, marginRight: 15, marginTop: 5 }}>
                    { this.renderCartItem('Latte', 'Iced, 50% Sugar, Single Shot', 2, require('./Assets/Products/latte.jpg')) }
                    { this.renderCartItem('Cappucino', 'Iced, 50% Sugar, Single Shot', 1, require('./Assets/Products/cappucino.jpg')) }
                </View>
            </ScrollView>
        )
    }

}

const styles = StyleSheet.create({
    changeQtyIconContainer: {
        width: 26,
        height: 26,
        borderRadius: 13,
        backgroundColor: '#2B2B2B',
        textAlign: 'center',
        textAlignVertical: 'center'
    }
})