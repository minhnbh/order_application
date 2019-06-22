import {
	createStackNavigator,
	createAppContainer,
	createDrawerNavigator,
	createBottomTabNavigator,
	StackActions,
	NavigationActions,
	NavigationEvents
} from "react-navigation";

import React, { Component } from 'react';
import Faq from '../components/Faq';
import Order from '../components/Order';
import Home from '../components/Home';
import Cart from '../components/Cart';
import Profile from '../components/Profile';
import CartTab from './CartTab';
import Login from '../components/Login';
import Initialize from '../components/Initialize';

import { Image, View, Text } from 'react-native';
import { Thumbnail } from 'native-base';

class HeaderNavigation extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text>Hello John.</Text>
            </View>
        )
    }

}

const bottomTabNavigator = createBottomTabNavigator(
    {
        Faq: {
            screen: Faq,
            navigationOptions: {
                title: 'faq'
            }
        },
        Order: {
            screen: Order,
            navigationOptions: {
                title: 'orders'
            }
        },
        Home: {
            screen: Home,
            navigationOptions: {
                title: 'home'
            }
        },
        Cart: {
            screen: Cart,
            navigationOptions: {
                title: 'cart'
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                title: 'account'
            }
        }
    }, {
        initialRouteName: "Home",
        tabBarOptions: {
            activeTintColor: '#CFAB57',
            style: {
                backgroundColor: '#2B2B2B'
            }
        },
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let iconPath = '', focusedIconPath = '', prefix = './Assets/Icons/2x/';
                if (routeName == 'Faq') {
                    iconPath = require('./Assets/Icons/2x/faq-white.png');
                    focusedIconPath = require('./Assets/Icons/2x/faq-gold.png');
                } else if (routeName == 'Order') {
                    iconPath = require('./Assets/Icons/2x/order-white.png');
                    focusedIconPath = require('./Assets/Icons/2x/order-gold.png');
                } else if (routeName == 'Home') {
                    iconPath = require('./Assets/Icons/2x/home-white.png');
                    focusedIconPath = require('./Assets/Icons/2x/home-gold.png');
                } else if (routeName == 'Cart') {
                    iconPath = require('./Assets/Icons/2x/cart-white.png');
                    focusedIconPath = require('./Assets/Icons/2x/cart-gold.png');
                    return (
                        <CartTab iconPath={ focused ? focusedIconPath : iconPath } />
                    )
                } else if (routeName == 'Profile') {
                    iconPath = require('./Assets/Icons/2x/account-white.png');
                    focusedIconPath = require('./Assets/Icons/2x/account-gold.png');
                }
                return (
                    <View>
                        <Image style={{ width: 20, height: 20 }} source={focused ? focusedIconPath : iconPath} />
                    </View>
                )
            }
        })
    }
)

const MainNav = createStackNavigator(
    {
        Initialize: {
            screen: Initialize,
            navigationOptions: {
				headerStyle: {
					display: "none"
				}
			}
        },
        Login: {
            screen: Login,
            navigationOptions: {
				headerStyle: {
					display: "none"
				}
			}
        },
        bottomTabNavigator: {
            screen: bottomTabNavigator,
            navigationOptions: {
                headerStyle: {
                    backgroundColor: '#2B2B2B',
                    color: 'white'
                }
            }
        }
    },
    {
        initialRouteName: 'Initialize'
    }
)

const AppContainer = createAppContainer(MainNav);

export default AppContainer;