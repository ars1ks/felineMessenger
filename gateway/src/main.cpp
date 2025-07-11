#include <iostream>
#include <memory>
#include <string>
#include <grpcpp/grpcpp.h>
using grpc::Server;
using grpc::ServerBuilder;
using grpc::ServerContext;
using grpc::Status;
// using gateway::ApiGateway;
// using gateway::UserRequest;
// using gateway::UserResponse;
// using gateway::ProductRequest;
// using gateway::ProductResponse;

// типо сервер гетвея
class GatewayServiceImpl final : public ApiGateway::Service {
public:
    Status GetUser(ServerContext* context, const UserRequest* request, UserResponse* response) override {
        std::cout << "[Gateway] Received GetUser for ID: " << request->user_id() << std::endl;
        // Вызов микросервиса тута
    }
    Status GetProduct(ServerContext* context, const ProductRequest* request, ProductResponse* response) override {
        std::cout << "[Gateway] Received GetProduct for ID: " << request->product_id() << std::endl;
        //вызов микросервисОВ
    }
    // ТУТА инциализация клиента
private:

};

void RunServer() {
    std::string server_address("0.0.0.0:50000");
    GatewayServiceImpl service;

    // инициализировать клиенты 
    
    service.InitializeServiceClients(

    );
    
    ServerBuilder builder;
    builder.AddListeningPort(server_address, grpc::InsecureServerCredentials());

    std::unique_ptr<Server> server(builder.BuildAndStart());
    server->Wait();
}

int main() {
    RunServer();
    return 0;
}