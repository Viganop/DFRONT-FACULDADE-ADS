import java.util.ArrayList;
import java.util.List;

import dao.ProdutoDAO;
import model.Produto;
import util.ConnectionFactory;

public class App {
    public static void main(String[] args) {

        // Exercício 2
        // Produto produto = new Produto("Notebook", 3575.73, 30);
        // System.out.println(produto.toString());

        // Exercício 3
        // try {
        // ConnectionFactory.getConnection();
        // System.out.println("Conexão bem sucedida!");
        // } catch (Exception e) {
        // System.out.println(e.getMessage());
        // }

        // Exercício 4
        // ProdutoDAO produtoDAO = new ProdutoDAO();
        // for (Produto produto : produtoDAO.buscarTodos()) {
        // System.out.println(produto.toString());
        // }

        // Exercício 5
        // ProdutoDAO produtoDAO = new ProdutoDAO();
        // Produto produto = produtoDAO.buscarPorId(1L);

        // if (produto != null)
        //     System.out.println(produto.toString());
        // else
        //     System.out.println("Produto não encontrado!");

        // produto = produtoDAO.buscarPorId(3L);
        // if (produto != null)
        //      System.out.println(produto.toString());
        //  else
        //      System.out.println("Produto não encontrado!");

        // Exercício 6
        //  ProdutoDAO produtoDAO = new ProdutoDAO();
        //  Produto produto = new Produto("Notebook", 3575.73, 30);
        //  produtoDAO.inserir(produto);
        //  System.out.println(produto.toString());

        // Exercício 7
        //  ProdutoDAO produtoDAO = new ProdutoDAO();
        //  Produto produto = new Produto(3L, "Notebook", 3500.99, 25);
        //  produtoDAO.atualizar(produto);

        // Exercício 8
        //  ProdutoDAO produtoDAO = new ProdutoDAO();
        //  produtoDAO.deletar(3L);

    }
}
