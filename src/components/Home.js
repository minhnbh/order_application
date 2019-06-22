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
                <Text style={{ color: '#2B2B2B', borderBottomColor: '#CFAB57', borderBottomWidth: 1, marginLeft: 30, padding: 10 }}>Get your coffee fix</Text>
                { this.state.products ?
                <FlatList
                    data={ this.state.products }
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => 
                    <TouchableOpacity>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ flex: 0.25 }}>
                                <Image source={{ uri: item.ImageURL }} style={{ height: 50, width: 50, borderRadius: 10 }} />
                            </View>
                            <View style={{ flex: 0.75 }}>
                                <Text>{ item.Title }</Text>
                                <Text>${ item.Price }</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                } />
                : <Spinner /> }
            </ScrollView>
        )
    }

}