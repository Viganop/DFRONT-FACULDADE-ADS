package util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConnectionFactory {

    private static final String URL = "jdbc:mysql://localhost:3306/aulajdbc";
    private static final String USER = "root";
    private static final String PASS = "aluno";
    private static final String DRIVER = "com.mysql.cj.jdbc.Driver";

    public static Connection getConnection() {

        try {
            // carrega o Driver JDBC na memória
            Class.forName(DRIVER);
            // tenta conectar ao banco usando as credenciais e URL
            // o DriverManager procura o Driver carregado que corresponde à URL
            System.out.println("Tentando conectar ao banco de dados...");
            return DriverManager.getConnection(URL, USER, PASS);
        } catch (ClassNotFoundException e) {
            // exceção disparada se o JAR do Driver (mysql-connector-j) não estiver no
            // classpath
            System.err.println("Driver JDBC não encontrado. Verifique se o JAR está na pasta 'lib' e no classpath.");
            throw new RuntimeException("Erro: Driver JDBC ausente.", e);
        } catch (SQLException e) {
            // exceção disparada por erros de conexão (usuário/senha errados, URL errada,
            // MySQL offline)
            System.err.println("Erro ao conectar ao banco de dados. Verifique credenciais ou se o MySQL está ativo.");
            e.printStackTrace(); // para depuração
            throw new RuntimeException("Erro ao obter a conexão com o banco de dados.", e);
        }
    }
}