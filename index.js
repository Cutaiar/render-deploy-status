// Tiny node server to make Render deploy status available

// TODO: Should we only call dotenv in DEV mode?
require('dotenv').config();
const express = require('express');
const api = require('api');

const app = express();
const renderApi = api('@render-api/v1.0#1ifry11lo91zxhg');
renderApi.auth(process.env.API_KEY);

const status = (deployStatus) => {
  // Display strings
  const unknown = 'unknown';
  const inProgress = 'in progress';
  const success = 'success';
  const failed = 'failed';

  // If we are given a key other than a string, we don't know what's going on
  if (typeof deployStatus !== 'string') {
    return unknown;
  }

  // Otherwise map the deploy status to a display string
  // This maps all possible values of deploy status currently available at https://api-docs.render.com/reference/get-deploys
  const statusMap = {
    created: inProgress,
    build_in_progress: inProgress,
    update_in_progress: inProgress,
    live: success,
    deactivated: failed,
    build_failed: failed,
    update_failed: failed,
    canceled: failed,
    pre_deploy_in_progress: inProgress,
    pre_deploy_failed: failed,
  };

  return statusMap[deployStatus] ?? unknown;
};

app.get('/', (req, res) => {
  renderApi.getDeploys({ limit: '1', serviceId: process.env.SERVICE_ID })
    .then(({ data }) => {
      res.json({
        status: status(data[0]?.deploy?.status),
      });
    })
    .catch((err) => {
      res.json({
        status: status(null), // Unknown
      });
      console.error(err);
    });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
