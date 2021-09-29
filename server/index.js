import '@babel/polyfill';
import express from 'express';
import renderer from './renderer';
import createStore from './createStore';
import { matchRoutes } from 'react-router-config';
import Routes from '../src/Routes/Routes';

const app = express();

//tells express that it needs to treat that public directory to be available to outside world
app.use(express.static('publicbuild'));

app.get('*', (req, res) => {
    const store = createStore();
    //logic to initialize store and load data to the store 
    //return an array of elements that need to be rendered
    const promises = matchRoutes(Routes, req.path).map(({route, match}) => {
        return route.loadData ? route.loadData(store, req, match) : null ;
    });

    Promise.all(promises).then(() => {
        
        res.send(renderer(req, store));
    });
});

app.listen(8000, () => {
    console.log('listening on port 8000')
});
