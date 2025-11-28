public class ContaBanco {
    int numero;
    String titular;
    double saldo;
    double limite;

    // Construtor para inicializar os atributos
    public ContaBanco() {
        System.out.println("Construindo conta bancária...");
        this.numero = 0;
        this.titular = "";
        this.saldo = 0.0;
        this.limite = 0.0;
    }

    // Método para sacar dinheiro
    public void sacar(double valor) {
        if (valor <= saldo) {
            saldo = saldo - valor;
            System.out.println("Saque realizado com sucesso! Novo saldo: " + saldo);
        } else {
            System.out.println("Saldo insuficiente!");
        }
    }

    // Método para depositar dinheiro
    public void depositar(double valor) {
        saldo += valor;
        System.out.println("Depósito realizado com sucesso! Novo saldo: " + saldo);
    }
}