# render-deploy-status
[![Render Status](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Frender-deploy-status.onrender.com%2Fsrv-clhcej58td7s73bnn9p0&query=%24.status&style=flat-square&logo=Render&label=Render)](https://dashboard.render.com/web/srv-clhcej58td7s73bnn9p0)

Tiny node server to make Render deploy status available for use in a README badge. Motivated by this [post](https://community.render.com/t/any-way-to-export-render-com-deployment-status-as-status-badges/4520). The badge above is using this service to get its own status 😎.

> This project is mentioned in the [Render community](https://community.render.com/t/render-deploy-status-badge-available/17281?u=cutaiar) and on the [Feature request board](https://feedback.render.com/features/p/add-status-badge).

## 🚁 Deploy your own

You can use this repo to deploy your own Render Web Service that will make a publicly available deploy status for another Render Web Service. You can then use with a [Shields.io Dynamic JSON Badge](https://shields.io/badges/dynamic-json-badge) to make this status available in that projects README.

1. Create a new Render Web Service and choose "Deploy an existing image from a registry"
2. Use this projects latest docker image available at [`ghcr.io/cutaiar/render-deploy-status:latest`](https://ghcr.io/cutaiar/render-deploy-status:latest)
3. In your Render account settings, generate an API Key and add it to the web service's environment variables with a key of `API_KEY`
4. Once deployed, this web service can expose the deploy status of any of **your** Render services including itself
5. Find the `serviceId` of the Render service you are **interested in creating a badge for** (goto the service's home page and check the url for `srv-*`)
6. Visit `<this-render-web-service-url>/<your-service-id>` in your browser (or `curl` it in the terminal) to test the endpoint (i.e. `https://render-deploy-status.onrender.com/srv-abc`). The response will be in the form `{"status":"success"}`
7. Create a [Shields.io Dynamic JSON Badge](https://shields.io/badges/dynamic-json-badge) with the endpoint being the endpoint above and use that in your desired projects README

> Note: [Image-backed Render services do not automatically redeploy](https://render.com/docs/deploy-an-image#triggering-a-deploy:~:text=Image%2Dbacked%20services%20do%20not%20automatically%20redeploy). So if you want to get the latest version, you should periodically trigger a manual deploy.

## 🛠️ Development

1. Clone this repo
2. Run `npm i`
3. Run `npm start` to start a local server or `npm run serve` to host the local server with hot reload
4. Find the `serviceId` of the Render service you are interested in creating a badge for (goto the services home page and check the url for `srv-*`)
5. Visit `http://localhost:3001/<your-service-id>` in your browser to test the endpoint

To get logging out the app, set the environment variable `DEBUG=main`.

## ⬆️ Releasing

To release a new version:

1. Bump the version using `npm version <major|minor|patch>`
2. Push the tag this created using `git push origin <new version>`

This will trigger the `build-publish-deploy-image.yml` workflow which will build a docker image, publish it to the Github Container Registry, and trigger a deploy on Render. Since this new image also has the `latest` tag, it will be image Render deploys.

## ✅ TODO

- Check app against [Express best practices](https://expressjs.com/en/advanced/best-practice-performance.html#set-node_env-to-production) again
- Consider using a [Shields.io Endpoint Badge](https://shields.io/badges/endpoint-badge)
- Context aware colors for the badge (red for failed, green for success, etc.)
