FROM nginx

COPY  nginx.conf /etc/nginx/nginx.conf

RUN mkdir -p /var/log/app_engine
RUN mkdir -p /usr/share/nginx/www/_ah && \
    echo "healthy" > /usr/share/nginx/www/_ah/health

COPY dist /usr/share/nginx/www/

COPY .htpasswd /etc/nginx/.htpasswd

RUN chmod -R a+r /usr/share/nginx/www
