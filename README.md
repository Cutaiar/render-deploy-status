# render-deploy-status
Tiny node server to make Render deploy status available for use in a README badge. Motivated by this [post](https://community.render.com/t/any-way-to-export-render-com-deployment-status-as-status-badges/4520).

## Development

1. Clone this repo
2. Run `npm i`
3. Run `node index.js` to start a local server
4. Visit `http://localhost:3001` in your browser to test the endpoint

To get logging out the app, set the environment variable `DEBUG=main`.

## Deploy your own

You can use this repo to deploy your own Render Web Service that will make a publicly available deploy status for another Render Web Service. You can then use with a [Shields.io Dynamic JSON Badge](https://shields.io/badges/dynamic-json-badge) to make this status available in that projects README.

1. Clone this repo
2. Create a new Render Web Service and connect it to this repo
3. Use `npm i` for "Build Command" and `node index.js` for "Start Command"
4. In your Render account settings, generate an API Key and add it to this service's environment variables with a key of `API_KEY`
5. Also add this key to your local `.env` if you are developing (optional)
6. Add another Render environment variable with a key of `SERVICE_ID`. This should be the `service id` of the service you want to create a deploy status for (also add to local .env if you are developing)
7. Create a [Shields.io Dynamic JSON Badge](https://shields.io/badges/dynamic-json-badge) with the endpoint being this Render Web Service and use that in your desired projects README

## TODO

- Make `service id` a query parameter so that this service can be used for more than one projects deploy status
- Adhere to [Express best practices](https://expressjs.com/en/advanced/best-practice-performance.html#set-node_env-to-production)
- Consider using a [Shields.io Endpoint Badge](https://shields.io/badges/endpoint-badge)