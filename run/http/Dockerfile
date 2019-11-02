FROM nginx:1.17-alpine
RUN chmod -R 0777 /var/cache/nginx
EXPOSE 8080
STOPSIGNAL SIGTERM
CMD [ "nginx", "-g", "daemon off;" ]