FROM node:14 as builder

ADD ./package*.json .npmrc /app/
WORKDIR /app

RUN npm ci

COPY . /app
RUN npm run build
RUN npm prune --production

FROM node:14-alpine as runner

USER node

COPY --from=builder --chown=node /app/package.json /app/package.json
COPY --from=builder --chown=node /app/dist /app/dist
COPY --from=builder --chown=node /app/node_modules /app/node_modules
COPY --from=builder --chown=node /app/docs /app/docs

WORKDIR /app

CMD ["node", "/app/dist/main.js"]
