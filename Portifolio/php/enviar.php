<?php
// 1. Configurações do Banco de Dados
$host = "localhost";
$usuario = "root";
$senha = ""; 
// CONFIRME SE VOCÊ CRIOU ESTE BANCO DE DADOS
$banco = "portfolio_db"; 

// 2. Conectar ao banco
$conexao = new mysqli($host, $usuario, $senha, $banco);

// Verifica se deu erro na conexão
if ($conexao->connect_error) {
    // Retorna um erro amigável para o JS lidar
    http_response_code(500);
    die("Falha na conexão com o banco de dados: " . $conexao->connect_error);
}

// 3. Pegar os dados vindos do formulário HTML
// CORRIGIDO: Nomes das variáveis devem ser 'name' e 'message' (do HTML)
$nome = $_POST['name'] ?? ''; 
$email = $_POST['email'] ?? '';
$mensagem = $_POST['message'] ?? '';

// 4. Preparar o comando SQL para salvar
// CORRIGIDO: Usando '?' como placeholders para os valores
$sql = "INSERT INTO mensagens_contato (nome, email, mensagem) VALUES (?, ?, ?)";

$stmt = $conexao->prepare($sql);

if ($stmt === false) {
    http_response_code(500);
    die("Erro na preparação da consulta: " . $conexao->error);
}

// "sss" significa que são 3 Strings (s, s, s)
$stmt->bind_param("sss", $nome, $email, $mensagem); 

// 5. Executar e verificar
if ($stmt->execute()) {
    echo "Mensagem enviada com sucesso!";
} else {
    http_response_code(500);
    echo "Erro ao enviar: " . $stmt->error;
}

// 6. Fechar conexões
$stmt->close();
$conexao->close();
?>