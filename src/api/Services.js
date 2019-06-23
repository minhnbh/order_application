import { getAuthenticatedUser } from '../services/CommonServices';
import axios from 'axios';

const prefix = "https://csshotscoffeeapi.azurewebsites.net/api/";

export async function fetchAPI(url, method = 'GET', headers, body, is_authenticated = false, callback = null) {
    initialize(headers, is_authenticated, (headers) => {
        response = doFetch(url, method, headers, body, callback);
    });
}

async function doFetch(url, method, headers, body, callback) {
    try {
        if (body) {
            console.log("BODY: ", body);
            let response = await fetch(prefix + url, {
                method: method,
                headers: headers,
                body: JSON.stringify(body)
            });
            console.log("FETCH API RESPONSE: ", response);
            if (response.ok) {
                response.json().then(responseJson => {
                    callback(responseJson);
                });
            } else {
                callback(null);
            }
            // axios({
            //     method: method,
            //     url: url,
            //     headers: headers,
            //     data: body,
            //     timeout: 5000
            // }).then(response => {
            //     console.log("asbdjsabdja: ", response);
            //     callback(response);
            // }).catch(error => {
            //     console.log("AXIOS ERROR: ", error);
            // })
        } else {
            let response = await fetch(prefix + url, {
                method: method,
                headers: headers
            });
            console.log("FETCH API RESPONSE: ", response);
            if (response.ok) {
                response.json().then(responseJson => {
                    callback(responseJson);
                });
            } else {
                callback(null);
            }
        }
    } catch(error) {
        console.log("FETCH API ERROR: ", error);
        return null;
    };
}

export function initialize(headers, is_authenticated, callback) {
    headers['Accept'] = 'application/json';
    headers['Content-type'] = 'application/json';
    if (is_authenticated) {
        getToken((token) => {
            headers['Authorization'] = token;
            callback(headers);
        });
    } else {
        callback(headers);
    }
}

export function getToken(callback) {
    getAuthenticatedUser(user => {
        if (user) {
            callback('Bearer ' + user.token);
        } else {
            callback(null);
        }
    })
}

// export function isJson(str) {
//     if (/^[\],:{}\s]*$/.test(str.replace(/\\["\\\/bfnrtu]/g, '@').
//     replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
//     replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

//     return true;

//     }else{

//     return false;

//     }
// }