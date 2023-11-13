# render-deploy-status
Tiny node server to make Render deploy status available motivated by this [post](https://community.render.com/t/any-way-to-export-render-com-deployment-status-as-status-badges/4520).

# Deploy your own

You can use this repo to deploy your own render service that will make a publicly available deploy status which you can then use with a [Shields.io Endpoint Badge](https://shields.io/badges/endpoint-badge)

1. Clone this repo
2. Create a new Render Web Service and connect it to this repo
3. Use `npm i` for the Build Command and `node index.js` for the Start Command
4. In your Render account settings, generate an API Key and add it to your service's environment variables with a key of `API_KEY`
5. Also add this key to your local `.env` if you are developing (optional)
6. Add another environment variables with a key of `SERVICE_ID` in Render to the service you want to create a deploy status for (add to local .env if needed)
7. Use a [Shields.io Endpoint Badge](https://shields.io/badges/endpoint-badge) with the endpoint being this Render Web Servic