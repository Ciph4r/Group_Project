import React from 'react';
import Layout from './Layout'
import Home from './Home'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Booking from './Booking';
import Listing from './Listing';
import Favorties from './Favorites';
import User from './User'
import NotFound from './NotFound';
import MessageBox from './messageBox/MessageBox'




  export default function GroundRnR (){
    

        return (
                <Router>
                    <Switch>

                        <Route exact path="/">
                            <Layout>
                                <MessageBox/>
                                <Home/>
                            </Layout>
                        </Route>

                        <Route path="/booking">
                            <Layout>
                                <Booking/>
                            </Layout>
                        </Route>

                        <Route path="/listing">
                            <Layout>
                                <Listing/>
                            </Layout>
                        </Route>

                        <Route path="/favorites">
                            <Layout>
                                <Favorties/>
                            </Layout>
                        </Route>

                        
                        <Route path="/user">
                            <Layout>
                                <User/>
                            </Layout>
                        </Route>

                        <Route path="*">
                            <Layout>
                                <NotFound/>
                            </Layout>
                        </Route>

                    </Switch>
                </Router>
        )
    }