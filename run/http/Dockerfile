FROM nginx:1.16
RUN apt-get update \
 && apt-get -y --no-install-recommends dist-upgrade \
 && apt-get -y --auto-remove -o APT::AutoRemove::RecommendsImportant=false purge \
 && rm -rf /var/lib/apt/lists/*
RUN chmod -R 0777 /var/cache/nginx
EXPOSE 8081
STOPSIGNAL SIGTERM
CMD [ "nginx", "-g", "daemon off;" ]