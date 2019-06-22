import { AsyncStorage } from 'react-native';

export function getAuthenticatedUser(callback) {
    
    AsyncStorage.getItem('authenticaed_user', (error, result) => {
        callback(result);
    });

}