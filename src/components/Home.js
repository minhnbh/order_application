import React, { Component } from 'react';
import { ScrollView, FlatList, Text, TouchableOpacity, View, Image } from 'react-native';
import { getProducts } from '../api/OrderServices';
import { Spinner } from 'native-base';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: null
        }
    }

    componentDidMount() {
        getProducts(products => {
            this.setState({ products: products });
        });
    }

    render() {
        return (
            <ScrollView style={{ flex: 1 }}>
                <Text style={{ color: '#2B2B2B', borderBottomColor: '#CFAB57', borderBottomWidth: 1, marginLeft: 30, padding: 10, fontFamily: 'Comfortaa-Bold', fontSize: 18 }}>Get your coffee fix</Text>
                { this.state.products ?
                <FlatList
                    style={{ marginLeft: 30, marginRight: 30 }}
                    data={ this.state.products }
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => 
                    <TouchableOpacity style={{ marginTop: 20 }}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ flex: 0.25 }}>
                                <Image source={{ uri: item.ImageURL }} style={{ height: 50, width: 50, borderRadius: 10, alignSelf: 'center' }} />
                            </View>
                            <View style={{ flex: 0.75 }}>
                                <Text style={{ fontFamily: 'Comfortaa-Bold', fontSize: 18, color: '#2B2B2B' }}>{ item.Title }</Text>
                                <Text style={{ fontFamily: 'Comfortaa-Regular', fontSize: 16, color: '#2B2B2B' }}>${ item.Price }</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                } />
                : <Spinner /> }
            </ScrollView>
        )
    }

}