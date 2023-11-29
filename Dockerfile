FROM node:18-alpine AS builder
ARG NODE_ENV 
COPY . /webapp
WORKDIR webapp

RUN apk add --no-cache libc6-compat
RUN apk update

RUN wget -qO /bin/pnpm "https://github.com/pnpm/pnpm/releases/latest/download/pnpm-linuxstatic-x64" && chmod +x /bin/pnpm

ENV PNPM_HOME=/pnpm-test/.pnpm
ENV PATH=$PATH:$PNPM_HOME

RUN pnpm install && pnpm run build

FROM nginx:1.21.0-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY /config/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /webapp/dist .
EXPOSE 8080
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]

