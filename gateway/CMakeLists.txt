cmake_minimum_required(VERSION 3.10)
project(gateway)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -pthread")
find_package(Protobuf REQUIRED)
find_package(gRPC REQUIRED)
set(GENERATED_SRC
    ${CMAKE_CURRENT_SOURCE_DIR}/generated/gateway.grpc.pb.cc
    ${CMAKE_CURRENT_SOURCE_DIR}/generated/gateway.pb.cc
)

add_executable(gateway
    main.cpp
    ${GENERATED_SRC}
)
target_link_libraries(gateway
    gRPC::grpc++
    gRPC::grpc
    gRPC::grpc++_reflection
    protobuf::libprotobuf
)
target_include_directories(gateway PRIVATE
    ${CMAKE_CURRENT_SOURCE_DIR}
    ${CMAKE_CURRENT_SOURCE_DIR}/generated
)