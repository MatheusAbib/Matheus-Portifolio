FROM php:8.2-cli

# Instala dependências do sistema e extensões PHP
RUN apt-get update && \
    apt-get install -y \
    unzip \
    curl \
    git \
    libzip-dev \
    && docker-php-ext-install \
    mbstring \
    openssl \
    zip \
    && rm -rf /var/lib/apt/lists/*

# Instala o Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Cria diretório do app e configura permissões
RUN mkdir -p /app && chown -R www-data:www-data /app
WORKDIR /app

# Copia arquivos (ignorando o que está no .dockerignore)
COPY --chown=www-data:www-data . .

# Instala dependências do Composer (com cache otimizado)
RUN composer install --no-interaction --prefer-dist --optimize-autoloader --no-dev

# Limpa cache para reduzir tamanho da imagem
RUN composer clear-cache

# Porta exposta (Render usa variável $PORT)
EXPOSE 10000

# Comando de inicialização otimizado para Render
CMD ["sh", "-c", "php -S 0.0.0.0:${PORT} -t ."]