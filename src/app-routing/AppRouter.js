import React from 'react';
import {Route, Switch} from 'react-router-dom';

import {PrivateRoute} from './PrivateRouter';
import Content from '../components/content/Content';
import Login from '../components/login/Login';
import Register from '../components/register/Register';
import ProductListContainer from '../containers/ProductList';
import SingleProductContainer from '../containers/SingleProduct';
import UserAccountContainer from '../containers/UserAccount';
// import UserAccount from '../components/user-account/UserAccount';
import {NoMatch} from '../components/404/NoMatch';

export const AppRouting = () => (
    <div>
        <Switch>
            {/*<PrivateRoute exact path="/" component={Content}/>*/}
            <Route exact path="/" component={ProductListContainer}/>
            {/*<Route path="/products" component={Products}/>*/}
            <Route path="/content" component={Content}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/products-list" component={ProductListContainer}/>
            <PrivateRoute path="/my-account" component={UserAccountContainer}/>
            <Route path="/product-list/product/:id" component={SingleProductContainer}/>
            {/*<PrivateRoute exact path="/product/:id" component={SingleProductContainer}/>*/}
            {/*<Route path="/add-new-product" component={AddNewProduct}/>*/}
            {/*<PrivateRoute exact path="/update-user-data/:id" component={UpdateUserContainer}/>*/}
            {/*<PrivateRoute exact path="/remove-user/:id" component={RemoveUser}/>*/}
            <Route component={NoMatch}/>
        </Switch>
    </div>
)