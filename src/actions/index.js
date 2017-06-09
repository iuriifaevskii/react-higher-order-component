import { CHANGE_AUTH } from './types';

export function authenticate(isLoggedIn){
    return {
        types: CHANGE_AUTH,
        payload : isLoggedIn
    }
}