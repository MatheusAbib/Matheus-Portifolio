FROM php:8.2-cli

# Instala dependências do sistema para o Composer funcionar
RUN apt-get update && apt-get install -y unzip curl git

# Instala o Composer globalmente
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Cria e define o diretório de trabalho
WORKDIR /app

# Copia todos os arquivos do projeto para dentro do container
COPY . /app

# Instala as dependências do Composer
RUN composer install --no-interaction --prefer-dist --optimize-autoloader

# Expõe a porta (Render define a variável $PORT automaticamente)
EXPOSE 10000

# Inicia o servidor PHP com a variável $PORT interpretada corretamente
CMD sh -c "php -S 0.0.0.0:$PORT -t ."
