FROM nginx:1.17-alpine
RUN chmod -R 0777 /var/cache/nginx
COPY ./default.conf /etc/nginx/conf.d/default.conf.template
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./entry_point.sh /
RUN chmod -R 0755 /entry_point.sh \
 && touch /etc/nginx/conf.d/default.conf \
 && chmod 0777 /etc/nginx/conf.d/default.conf
EXPOSE 8080
STOPSIGNAL SIGTERM
ENTRYPOINT [ "/entry_point.sh" ]
CMD [ "nginx", "-g", "daemon off;" ]