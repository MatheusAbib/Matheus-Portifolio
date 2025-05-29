FROM php:8.2-cli

# Instala dependências do sistema para o Composer funcionar
RUN apt-get update && apt-get install -y unzip curl git

# Instala o Composer globalmente
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Copia os arquivos do projeto para dentro do container
COPY . /app

# Define o diretório de trabalho
WORKDIR /app

# Instala as dependências do Composer
RUN composer install --no-interaction --prefer-dist --optimize-autoloader

# Expõe a porta que o Render define automaticamente
EXPOSE 10000

# Comando que inicia o servidor PHP embutido apontando para o diretório público
CMD ["php", "-S", "0.0.0.0:$PORT", "-t", "."]
