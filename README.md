# render-deploy-status
[![Render Status](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Frender-deploy-status.onrender.com%2Fsrv-clhcej58td7s73bnn9p0&query=%24.status&style=flat-square&logo=Render&label=Render)](https://dashboard.render.com/web/srv-clhcej58td7s73bnn9p0)

Tiny node server to make Render deploy status available for use in a README badge. Motivated by this [post](https://community.render.com/t/any-way-to-export-render-com-deployment-status-as-status-badges/4520). (the badge above is using this service)

## Development

1. Clone this repo
2. Run `npm i`
3. Run `npm start` to start a local server or `npm run serve` to host the local server with hot reload
4. Find the `serviceId` of the Render service you are interested in creating a badge for (goto the services home page and check the url for `srv-*`)
5. Visit `http://localhost:3001/<your-service-id>` in your browser to test the endpoint

To get logging out the app, set the environment variable `DEBUG=main`.

## Deploy your own

You can use this repo to deploy your own Render Web Service that will make a publicly available deploy status for another Render Web Service. You can then use with a [Shields.io Dynamic JSON Badge](https://shields.io/badges/dynamic-json-badge) to make this status available in that projects README.

1. Fork this repo
2. Create a new Render Web Service and connect it to your fork
3. Use `npm i` for "Build Command" and `npm start` for "Start Command"
4. In your Render account settings, generate an API Key and add it to the web service's environment variables with a key of `API_KEY`
5. Once deployed, this web service can expose the deploy status of any of **your** Render services including itself
6. Find the `serviceId` of the Render service you are **interested in creating a badge for** (goto the services home page and check the url for `srv-*`)
7. Visit `<this-render-web-service-url>/<your-service-id>` in your browser (or `curl` it in the terminal) to test the endpoint (i.e. `https://render-deploy-status.onrender.com/srv-abc`). The response will be in the form `{"status":"success"}`
8. Create a [Shields.io Dynamic JSON Badge](https://shields.io/badges/dynamic-json-badge) with the endpoint being the endpoint above and use that in your desired projects README

## Releasing

The `main` branch is the release branch. Whenever a push is made to this branch, a docker image will be built and published to the Github Container Registry.

Make sure to bump the version in `package.json` and run `npm i` to update the `package-lock.json` before making a PR into master.

## TODO

- Check app against [Express best practices](https://expressjs.com/en/advanced/best-practice-performance.html#set-node_env-to-production) again
- Consider using a [Shields.io Endpoint Badge](https://shields.io/badges/endpoint-badge)
- Allow others to deploy from a [container registry](https://render.com/docs/web-services#deploying-from-a-container-registry)
