import { fetchAPI } from './Services';
import { getAuthenticatedUser } from '../services/CommonServices';

export function getProducts(callback) {
    getAuthenticatedUser(user => {
        if (user) {
            fetchAPI('item', 'GET', {}, null, true, (response) => {
                callback(response);
            });
        }
    })
}