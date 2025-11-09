package api;

import static spark.Spark.after;
import static spark.Spark.get;
import static spark.Spark.port;
import static spark.Spark.post;
import static spark.Spark.put;
import static spark.Spark.delete;

import com.google.gson.Gson;

import dao.ProdutoDAO;
import model.Produto;
import spark.Filter;
import spark.Request;
import spark.Response;
import spark.Route;

public class ApiProduto {

    //instancias do  DAO e do Gson
    private static final ProdutoDAO dao = new ProdutoDAO();
    private static final Gson gson = new Gson();

    //constante para garantir que todas as respostas sejam json
    private static final String APPLICATION_JSON = "application/json";

    public static void main(String[] args) {
        port(4567);

        after(new Filter() {
            @Override
            public void handle(Request request, Response response) {
                response.type(APPLICATION_JSON);

            }
        });

        get("/produtos", new Route(){
            @Override
            public Object handle(Request request, Response response){
                return gson.toJson(dao.buscarTodos());
            }
        });

        // GET /produtos/:id - buscar por ID
        get("/produtos/:id", new Route(){
            @Override
            public Object handle(Request request, Response response){
                try {
                    Long id = Long.parseLong(request.params(":id"));
                    Produto produto = dao.buscarPorId(id);
                    if (produto != null){
                        return gson.toJson(produto);
                    }
                    else{
                        response.status(404);
                        return"{\"mensagem\": \"produto com ID" + id + "não encontrado\"}";
                    }                                   
                } catch (NumberFormatException e) {
                    response.status(400);
                    return "{\"mensagem\": \"formato de ID invalido\"}";
                  
                }
            }
        });

        // PUT /Produtos/:id - Atualizar produto
        post("/produtos/:id", new Route() {
            @Override
            public Object handle(Request request, Response response){
            try {
                Long id = Long.parseLong(request.params(":id"));

                if (dao.buscarPorId(id) == null){
                    response.status(404);
                    return "{\"mensagem\": \"Produto não encontrado\"}";
                }

                Produto produtoParaAtualizar = gson.fromJson(request.body(), Produto.class);
                produtoParaAtualizar.setId(id);
                dao.atualizar(produtoParaAtualizar);

                dao.inserir(produtoParaAtualizar);
                return gson.toJson(produtoParaAtualizar);

            } catch (Exception e) {
                response.status(500);
                System.out.println("Erro ao inserir produto. " + e.getMessage());
                e.printStackTrace();
                return "{\"mensagem\": \"Erro ao criar produto\"}";
            }    
            }
        });

        // POST /Produtos - Criar
        put("/produtos", new Route() {
            @Override
            public Object handle(Request request, Response response){
            try {
                Produto produtoParaAtualizar = gson.fromJson(request.body(), Produto.class);
                dao.inserir(produtoParaAtualizar);
                return gson.toJson(produtoParaAtualizar);

            }catch (NumberFormatException e) {
                response.status(400);
                return "{\"mensagem\": \"Formato de ID incorreto\"}";
            }
                catch (Exception e) {
                response.status(500);
                System.out.println("Erro ao inserir produto" + e.getMessage());
                e.printStackTrace();
                return "{\"mensagem\": \"Erro ao editar produto\"}";
            }
            }    
            });

            delete("/produtos/:id", new Route() {
                @Override
                public Object handle(Request request, Response response){
                    try {
                        Long id = Long.parseLong(request.params(":id"));

                        if (dao.buscarPorId(id) == null){
                            response.status(404);
                            return "{\"mensagem\": \"produto não encontrado\"}";
                        }
                        dao.deletar(id);
                        response.status(204);
                        return "";

                    } catch (Exception e) {
                        response.status(400);
                        return "{\"mensagem\": \"ID invalido\"}";
                    }
                }
            });
        };
    }

