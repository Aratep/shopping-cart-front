import React, {Component} from 'react';
import {Provider} from 'react-redux';

import {AppRouting} from './app-routing/AppRouter';
import NavBar from './components/header/NavBar';
import Header from './components/header/Header';
import Footer from "./components/footer/Footer";
import store from './store/store';
import './App.css';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className=''>
                    <NavBar/>
                    <div className="w3-main custom-main " style={{marginLeft: 250 + "px"}}>
                        <Header/>
                        <div className='margin'>
                        <AppRouting/>
                        </div>
                        <Footer/>
                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;
