export const tokenToVerify = localStorage.getItem('tokenToVerify');
export const POST = 'POST';
export const GET = 'GET';
export const PUT = 'PUT';
export const DELETE = 'DELETE';
export const HEADERS = {
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    'x-access-token': {tokenToVerify},
};

export const REGISTER_URL = 'http://localhost:8080/users/register';
export const LOGIN_URL = 'http://localhost:8080/users/sign_in';
export const RESET_PASSWD_URL = 'http://localhost:8080/users/reset_password';
export const EDIT_USER_URL = 'http://localhost:8080/users/edit_user';
export const DELETE_USER_URL = 'http://localhost:8080/users/delete_single_user';
export const ALL_USERS_URL = 'http://localhost:8080/users/list_all_users';
export const TOKEN_URL = 'http://localhost:8080/users/token';
export const UPLOAD_FILE_URL = 'http://localhost:8080/upload_file';

export const CREATE_PRODUCT_URL = 'http://localhost:8080/products/create';
export const UPDATE_PRODUCT_URL = 'http://localhost:8080/products/update';
export const DELETE_PRODUCT_URL = 'http://localhost:8080/products/delete';
export const PRODUCTS_LIST_URL = 'http://localhost:8080/products/products-list';
export const ADMIN_LOGIN_URL = 'http://localhost:8080/admin/login';
//localhost:8080/admin/login REMOVE_PRODUCT
export const ALL_PRODUCTS = 'ALL_PRODUCTS';
export const ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT';
export const SINGLE_PRODUCT = 'SINGLE_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const ALL_USERS = 'ALL_USERS';
export const SINGLE_USER = 'SINGLE_USER';