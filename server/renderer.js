import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Routes from '../src/Routes/Routes';
import { Provider } from "react-redux";
import { renderRoutes } from 'react-router-config';

export default (req, store) => {

    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
                <div>
                    {renderRoutes(Routes)}
                </div>
            </StaticRouter>
        </Provider>
    );
    return `
        <html>
            <head>
                <link rel="stylesheet" href="/main.css">
            </head>
            <body>
                <div id="root">${content}</div>
                <script src="bundle.js"></script>
            </body>
        </html>
    `;
}
