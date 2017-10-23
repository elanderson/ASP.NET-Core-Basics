import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { ContactList } from './components/contacts/ContactList';
import { ContactDetail } from './components/contacts/ContactDetail';

export const routes = <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/counter' component={Counter} />
    <Route path='/fetchdata' component={FetchData} />
    <Route path='/contactlist' component={ContactList} />
    <Route path='/contactdetail/:id?' component={ContactDetail} />
</Layout>;
