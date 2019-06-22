import {
	createStackNavigator,
	createAppContainer,
	createDrawerNavigator,
	createBottomTabNavigator,
	StackActions,
	NavigationActions,
	NavigationEvents
} from "react-navigation";

import Faq from '../components/Faq';
import Order from '../components/Order';
import Home from '../components/Home';
import Cart from '../components/Cart';
import Profile from '../components/Profile';

const bottomTabNavigator = createBottomTabNavigator(
    {
        Faq: {
            screen: Faq,
            navigationOptions: ({ navigation }) => ({
                title: 'faq'
            })
        },
        Order: {
            screen: Order,
            navigationOptions: ({ navigation }) => ({
                title: 'orders'
            })
        },
        Home: {
            screen: Home,
            navigationOptions: ({ navigation }) => ({
                title: 'home'
            })
        },
        Cart: {
            screen: Cart,
            navigationOptions: ({ navigation }) => ({
                title: 'cart'
            })
        },
        Profile: {
            screen: Profile,
            navigationOptions: ({ navigation }) => ({
                title: 'account'
            })
        }
    }, {
        initialRouteName: "Home",
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let iconPath;
                if (routeName == 'faq') {

                } else if (routeName == 'orders') {

                } else if (routeName == 'home') {

                } else if (routeName == 'cart') {

                } else if (routeName == 'account') {
                    
                }
            }
        })
    }
)