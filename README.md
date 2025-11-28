# Portiflio-
Projeto final do 4° bimestre - Portifólio com os melhores trabalhos de todas as matérias do terceiro bimestre.

Para que todas as funcionalidades do Portfólio funcionem corretamente, especialmente o formulário de contato (PHP/MySQL), é necessário configurar um ambiente de servidor local.

1. Requisitos
Você precisará de um ambiente que suporte PHP e MySQL, como:

XAMPP, WAMP ou MAMP.

2. Configuração do Servidor
Mova o Projeto: Coloque a pasta raiz do projeto (Portifolio) no diretório de execução do seu servidor (Ex: htdocs no XAMPP).

Inicie os Serviços: Certifique-se de que os serviços Apache e MySQL estejam em execução.

3. Configuração do Banco de Dados (Para o Formulário de Contato)
O arquivo php/enviar.php está configurado para salvar as mensagens no banco de dados.

Acesse o phpMyAdmin (geralmente via http://localhost/phpmyadmin/).

Crie um novo banco de dados chamado: portfolio_db.

Execute o seguinte comando SQL para criar a tabela de mensagens:

SQL

CREATE TABLE mensagens_contato (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    mensagem TEXT NOT NULL,
    data_envio TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

4. Acesso ao Projeto
Após a configuração, acesse a página principal do portfólio através do seu navegador:

http://localhost/Portifolio/index.html
