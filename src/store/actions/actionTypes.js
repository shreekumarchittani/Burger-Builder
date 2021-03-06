export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';
export const SET_INGREDIENTS = 'SET_INGREDIENTS';
export const FETCH_INGREDIENTS_FAILED = 'FETCH_INGREDIENTS_FAILED';
export const INIT_INGREDIENTS = 'INIT_INGREDIENTS'; //Saga

export const PURCHASE_BURGER_START = 'PURCHASE_BURGER_START';
export const PURCHASE_BURGER_SUCCESS = 'PURCHASE_BURGER_SUCCESS';
export const PURCHASE_BURGER_FAIL = 'PURCHASE_BURGER_FAIL';
export const PURCHASE_INIT = 'PURCHASE_INIT';
export const PURCHASE_BURGER = 'PURCHASE_BURGER';// Saga

export const FETCH_ORDERS = 'FETCH_ORDERS';
export const FETCH_ORDERS_START = 'FETCH_ORDERS_START';
export const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS';
export const FETCH_ORDERS_FAIL = 'FETCH_ORDERS_FAIL';

//Auth action types
export const AUTH_START = 'AUTH_START';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAIL = 'AUTH_FAIL';
export const AUTH_INITIATE_LOGOUT = 'AUTH_INITIATE_LOGOUT'; // Used for Saga
export const AUTH_CHECK_TIMEOUT = 'AUTH_CHECK_TIMEOUT'; // Used for saga
export const AUTH_USER = 'AUTH_USER'; // Used for Saga
export const AUTH_CHECK_INITIAL_STATE = 'AUTH_CHECK_INITIAL_STATE';// Saga
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

export const SET_AUTH_REDIRECT_PATH = 'SET_AUTH_REDIRECT_PATH';