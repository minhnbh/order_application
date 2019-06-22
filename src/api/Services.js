export function fetchAPI(url, method = 'GET', headers, body, is_authenticated = false, callback = null) {
    initialize(headers, is_authenticated, (headers) => {
        console.log("FETCH URL: ", url);
        console.log("HEADER: ", headers);
        if (body) {
            fetch(prefix + version + url, {
                method: method,
                headers: headers,
                body: JSON.stringify(body)
            }).then((response) => response.json())
                .then((responseJson) => {
                    if (callback) {
                        callback(responseJson);
                    }
                })
                .catch((error) => {
                    console.log("FETCH API ERROR: ", error);
                    errorHandle(error);
                });
        } else {
            fetch(prefix + version + url, {
                method: method,
                headers: headers
            }).then((response) => response.json())
                .then((responseJson) => {
                    if (callback) {
                        callback(responseJson);
                    }
                })
                .catch((error) => {
                    console.log("FETCH API ERROR: ", error);
                    errorHandle(error);
                });
        }
    });
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