import { AsyncStorage } from 'react-native';

export function getAuthenticatedUser(callback) {
    
    AsyncStorage.getItem('authenticated_user', (error, result) => {
        console.log("AUTHENTICATED USER: ", result);
        if (result) {
            result = JSON.parse(result);
            if (result.token && result.expired) {
                current_time = Math.floor(Date.now() / 1000);
                console.log("EXPIRED: ", result.expired);
                console.log("CURRENT: ", current_time);
                if (result.expired < current_time) {
                    removeAuthenticatedUser(status => {
                        if (status) {
                            callback(false);
                        }
                    });
                }
            } else {
                callback(null);
            }
            callback(result);
        } else {
            callback(null);
        }
    });

}

export function saveAuthenticatedUser(user, callback) {
    
    AsyncStorage.setItem('authenticated_user', JSON.stringify(user), error => {
        if (!error) {
            callback(true);
        } else {
            callback(false);
        }
    })

}

export function removeAuthenticatedUser(callback) {
    
    AsyncStorage.removeItem('authenticated_user', error => {
        callback(true);
    });

}