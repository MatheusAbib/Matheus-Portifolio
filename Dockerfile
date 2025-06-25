FROM php:8.2-cli

RUN apt-get update && apt-get install -y unzip curl git

# Instala composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

WORKDIR /app

COPY composer.json composer.lock /app/

RUN composer install --no-scripts --no-dev --no-interaction --prefer-dist --optimize-autoloader

COPY . /app

EXPOSE 8080

# Use o shell para interpretar variável de ambiente PORT
CMD ["sh", "-c", "php -S 0.0.0.0:${PORT:-8080} -t ."]
