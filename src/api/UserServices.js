import { fetchAPI } from '../api/Services';
import { saveAuthenticatedUser } from '../services/CommonServices';

export function login(username, password, callback) {
    fetchAPI('token', 'POST', {}, {
        username: username,
        password: password
    }, false, (result) => {
        if (result.token) {
            result['expired'] = Math.floor(Date.now() / 1000) + result.duration;
            console.log("RESULTTTT: ", result.expired);
            saveAuthenticatedUser(result, status => {
                if (status) {
                    callback(true);
                } else {
                    callback(false);
                }
            });
        } else {
            callback(false);
        }
    });
}