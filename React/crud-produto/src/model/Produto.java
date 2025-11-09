package model;

public class Produto {

    // atributos
    private Long id;
    private String nome;
    private double preco;
    private int estoque;

    // contrutor vazio (necessário para frameworks como Gson)
    public Produto() {
    }

    // construtor com todos os campos
    public Produto(Long id, String nome, double preco, int estoque) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }

    // construtor sem o id (para inserções, onde o id é auto-gerado)
    public Produto(String nome, double preco, int estoque) {
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }

    // getters e setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public double getPreco() {
        return preco;
    }

    public void setPreco(double preco) {
        this.preco = preco;
    }

    public int getEstoque() {
        return estoque;
    }

    public void setEstoque(int estoque) {
        this.estoque = estoque;
    }

    // toString para facilitar a depuração
    @Override
    public String toString() {
        return "Produto [id=" + id +
                ", nome=" + nome +
                ", preco=" + preco +
                ", estoque=" + estoque + "]";
    }
}