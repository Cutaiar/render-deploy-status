FROM node:16.17.0-bullseye-slim
RUN apt-get update && apt-get install -y --no-install-recommends dumb-init
WORKDIR /usr/src/app
COPY --chown=node:node package*.json .
RUN npm ci --omit=dev
COPY --chown=node:node index.js .
ENV NODE_ENV=production
ENV PORT=8080
EXPOSE 8080
USER node
CMD ["npm", "start"]