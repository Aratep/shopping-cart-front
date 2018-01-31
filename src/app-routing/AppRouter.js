import React from 'react';
import {Route, Switch} from 'react-router-dom';

import {PrivateRoute} from './PrivateRouter';
import Content from '../components/content/Content';
import Login from '../components/login/Login';
import Register from '../components/register/Register';
import ProductListContainer from '../containers/ProductList';
import SingleProductContainer from '../containers/SingleProduct';
import UserCartContainer from '../containers/UserCart';
import UserAccountContainer from '../containers/UserAccount';
import {NoMatch} from '../components/404/NoMatch';

export const AppRouting = () => (
    <div>
        <Switch>
            <Route exact path="/" component={ProductListContainer}/>
            <Route path="/content" component={Content}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/products-list" component={ProductListContainer}/>
            <PrivateRoute path="/my-cart" component={UserCartContainer}/>
            <PrivateRoute path="/my-account" component={UserAccountContainer}/>
            <Route path="/product-list/product/:id" component={SingleProductContainer}/>
            <Route component={NoMatch}/>
        </Switch>
    </div>
)