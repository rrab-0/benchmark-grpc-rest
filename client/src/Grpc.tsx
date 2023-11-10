import { useEffect } from "react";
import { TodoServiceClient } from "./proto/TodoServiceClientPb";
import { CreateTodoRequest, StringMessage, Todo } from "./proto/todo_pb";

import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

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

const createString = async (stringMsg: string) => {
    const request = new StringMessage();
    request.setMessage(stringMsg);
    const response = await client.createString(request, {});
    console.log(response);
}

// const getAllTodo = async (todo: Todo) => {
//   const EnvoyURL = "http://localhost:8000";
//   const client = new TodoServiceClient(EnvoyURL);
//   const request = new ListTodoRequest();

// }

function Grpc() {
    // useEffect(() => {
    //     const todo = new Todo();
    //     todo.setId("1");
    //     todo.setTitle("title");
    //     todo.setDescription("description");
    //     todo.setCompleted(false);

    //     // console.log(`grpc start: ${new Date().getSeconds()}`);
    //     const startTime = performance.now();
    //     createTodo(todo, startTime);
    // }, [])

    const createManyTodo = async () => {
        for (let i = 0; i < 1; i++) {
            const todo = new Todo();
            todo.setId("1");
            todo.setTitle("title");
            todo.setDescription("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore quo eius dolore atque autem voluptates quibusdam esse sed laudantium, delectus odio velit debitis deleniti dolor, architecto vel quis fugit ut? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore quo eius dolore atque autem voluptates quibusdam esse sed laudantium, delectus odio velit debitis deleniti dolor, architecto vel quis fugit ut? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore quo eius dolore atque autem voluptates quibusdam esse sed laudantium, delectus odio velit debitis deleniti dolor, architecto vel quis fugit ut?");
            todo.setCompleted(false);

            const startTime = performance.now();
            createTodo(todo, startTime);
        }
    }

    const createStringMessage = async () => {
        for (let i = 0; i < 1; i++) {
            createString("lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.")
        }
    }

    return (
        <div className="h-full bg-black text-white gap-4 flex flex-col justify-center items-center">
            <nav className='w-96 gap-6 flex justify-center items-center'>
                <a href="/">
                    <BsFillCaretLeftFill />
                </a>
                <h1 className='text-blue-300'>gRPC API</h1>
                <a href="/rest">
                    <BsFillCaretRightFill />
                </a>
            </nav>
            <div className='h-80 w-80 gap-2 flex justify-center items-start'>
                <button className="px-2 py-1 bg-slate-400 text-black border rounded" onClick={createManyTodo}>
                    create 1000 times
                </button>

                <button className="px-2 py-1 bg-slate-400 text-black border rounded" onClick={createStringMessage}>
                    create string message
                </button>
            </div>
        </div>
    );
}

export default Grpc;
