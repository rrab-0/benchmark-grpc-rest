import { useEffect } from "react";
import { TodoServiceClient } from "./proto/TodoServiceClientPb";
import { CreateTodoRequest, Todo } from "./proto/todo_pb";
import { start } from "repl";

const EnvoyURL = "http://localhost:8063";
const client = new TodoServiceClient(EnvoyURL);

const createTodo = async (todo: Todo, startTime: number) => {
    const request = new CreateTodoRequest();
    request.setActivity(todo)
    const response = await client.createTodo(request, {});

    // end benchmark
    const endTime = performance.now();
    const duration = endTime - startTime;
    console.log(`gRPC Request completed in ${duration} milliseconds`);
    // console.log(`grpc end: ${new Date().getSeconds()}`);

    console.log(response);
}

// const getAllTodo = async (todo: Todo) => {
//   const EnvoyURL = "http://localhost:8000";
//   const client = new TodoServiceClient(EnvoyURL);
//   const request = new ListTodoRequest();

// }

function Grpc() {
    useEffect(() => {
        const todo = new Todo();
        todo.setId("1");
        todo.setTitle("title");
        todo.setDescription("description");
        todo.setCompleted(false);

        // start benchmark
        // console.log(`grpc start: ${new Date().getSeconds()}`);
        const startTime = performance.now();
        createTodo(todo, startTime);
    }, [])

    return (
        <div className="Grpc">
            <p>hello</p>
        </div>
    );
}

export default Grpc;
