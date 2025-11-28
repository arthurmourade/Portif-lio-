<?php
// 1. Configurações do Banco de Dados
$host = "localhost";
$usuario = "root";
$senha = ""; 

// 2. Conectar ao banco
$conexao = new mysqli($host, $usuario, $senha, $banco);

// Verifica se deu erro na conexão
if ($conexao->connect_error) {
    die("Falha na conexão: " . $conexao->connect_error);
}

// 3. Pegar os dados vindos do formulário HTML
// O $_POST['nome'] pega o que está no input name="name" do HTML
$nome = $_POST['nome']; 
$email = $_POST['email'];
$mensagem = $_POST['message'];

// 4. Preparar o comando SQL para salvar (Exita SQL Injection básico)
$sql = "INSERT INTO mensagens_contato (nome, email, mensagem) VALUES (?, ?, ?)";

$stmt = $conexao->prepare($sql);
$stmt->bind_param("sss", $nome, $email, $mensagem); // "sss" significa que são 3 Strings

// 5. Executar e verificar
if ($stmt->execute()) {
    echo "Mensagem enviada com sucesso!";
} else {
    echo "Erro ao enviar: " . $stmt->error;
}

// 6. Fechar conexões
$stmt->close();
$conexao->close();
?>