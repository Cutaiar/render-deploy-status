# render-deploy-status
Tiny node server to make Render deploy status available for use in a README badge. Motivated by this [post](https://community.render.com/t/any-way-to-export-render-com-deployment-status-as-status-badges/4520).

## Development

1. Clone this repo
2. Run `npm i`
3. Run `npm start` to start a local server or `npm run serve` to host the local server with hot reload
4. Find the `serviceId` of the Render service you are interested in creating a badge for (goto the services home page and check the url for `srv-*`)
5. Visit `http://localhost:3001/<your-service-id>` in your browser to test the endpoint

To get logging out the app, set the environment variable `DEBUG=main`.

## Deploy your own

You can use this repo to deploy your own Render Web Service that will make a publicly available deploy status for another Render Web Service. You can then use with a [Shields.io Dynamic JSON Badge](https://shields.io/badges/dynamic-json-badge) to make this status available in that projects README.

1. Clone this repo
2. Create a new Render Web Service and connect it to this repo
3. Use `npm i` for "Build Command" and `npm start` for "Start Command"
4. In your Render account settings, generate an API Key and add it to this service's environment variables with a key of `API_KEY`
5. Find the `serviceId` of the Render service you are **interested in creating a badge for** (goto the services home page and check the url for `srv-*`)
6. Visit `<this-render-web-service-url>/<your-service-id>` in your browser to test the endpoint (i.e. `https://render-deploy-status.onrender.com/srv-abc`)
7. Create a [Shields.io Dynamic JSON Badge](https://shields.io/badges/dynamic-json-badge) with the endpoint being the endpoint above and use that in your desired projects README

## TODO

- Check app against [Express best practices](https://expressjs.com/en/advanced/best-practice-performance.html#set-node_env-to-production) again
- Consider using a [Shields.io Endpoint Badge](https://shields.io/badges/endpoint-badge)
- Use this service to make a deploy status for this service