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
import NotFound from './NotFound';



  export default function GroundRnR (){
        return (
                <Router>
                    <Switch>

                        <Route exact path="/">
                            <Layout>
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

                        <Route path="*">
                            <Layout>
                                <NotFound/>
                            </Layout>
                        </Route>

                    </Switch>
                </Router>
        )
    }