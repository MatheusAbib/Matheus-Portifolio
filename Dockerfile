FROM php:8.2-cli

# Instalar extensões se precisar, por exemplo:
# RUN docker-php-ext-install mysqli

# Copia todos os arquivos do seu projeto para dentro do container
COPY . /app

# Define o diretório de trabalho
WORKDIR /app

# Expõe a porta que o Render usará
EXPOSE 10000

# Usa o PHP embutido para rodar o servidor
CMD ["php", "-S", "0.0.0.0:10000", "-t", "."]
