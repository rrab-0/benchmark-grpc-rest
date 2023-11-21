import { useState, useEffect } from "react";
import { TodoServiceClient } from "./proto/TodoServiceClientPb";
import { CreateTodoRequest, ListTodoRequest, GetTodoRequest, UpdateTodoRequest, StringMessage, Todo } from "./proto/todo_pb";

import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import { FaRegCopy } from "react-icons/fa";
import { isDisabled } from "@testing-library/user-event/dist/utils";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    console.log(response);
}

const getTodo = async (id: string) => {
    const request = new GetTodoRequest();
    request.setId(id);
    const response = await client.getTodo(request, {});
    console.log(response);
    return response.getActivity();
}

const getAllTodo = async () => {
    const request = new ListTodoRequest();
    request.setLimit(100)
    const response = await client.listTodo(request, {})
    console.log(response)
}

const updateTodo = async (todo: Todo) => {
    const request = new UpdateTodoRequest();
    request.setActivity(todo);
    const response = await client.updateTodo(request, {});
    console.log(response)
}

const createString = async (stringMsg: string) => {
    const request = new StringMessage();
    request.setMessage(stringMsg);
    const response = await client.createString(request, {});
    console.log(response);
}

function Grpc() {
    const [todoID, setTodoID] = useState("");
    const [todoRetrieved, setTodo] = useState(new Todo());
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        setTitle(todoRetrieved.getTitle());
        setDescription(todoRetrieved.getDescription());
        setCompleted(todoRetrieved.getCompleted());
    }, [todoRetrieved])

    const getTodoById = async (id: string) => {
        const retrievedTodo = await getTodo(id);
        if (retrievedTodo) {
            setTodo(retrievedTodo);
        }
    }

    const createManyTodo = async () => {
        for (let i = 0; i < 1; i++) {
            const todo = new Todo();
            todo.setTitle("Eksplorasi gRPC");
            todo.setDescription("Perbandingan kecepatan gRPC dan REST");
            todo.setCompleted(false);
            const startTime = performance.now();
            createTodo(todo, startTime);
        }
    }

    const updateTodoHandler = async () => {
        todoRetrieved.setId(todoID);
        todoRetrieved.setTitle(title);
        todoRetrieved.setDescription(description);
        todoRetrieved.setCompleted(completed);
        updateTodo(todoRetrieved);
    };

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
            <div className='w-80 gap-2 flex justify-center items-start'>
                <button className="px-2 py-1 bg-slate-400 hover:bg-slate-500 text-black border rounded" onClick={createManyTodo}>
                    Create Todo 1 Time
                </button>

                <button className="px-2 py-1 bg-slate-400 hover:bg-slate-500 text-black border rounded" onClick={createStringMessage}>
                    Create String Message
                </button>
            </div>
            <button className={`px-2 py-1 mb-10 bg-slate-400 text-black border rounded cursor-pointer hover:bg-slate-500`} onClick={getAllTodo}>
                Get All Todo
            </button>
            <div className='flex items-center'>
                {/** Click this to copy ID to clipboard */}
                <FaRegCopy className="p-1 mr-2 w-7 h-7 text-black border rounded bg-slate-400 hover:bg-slate-500" title="Copy ID" onClick={() => { navigator.clipboard.writeText("9dc4d35b-0674-4346-9e4e-b29f1bdfa0aa") }} />
                <button className={`px-2 py-1 bg-slate-400 text-black border rounded ${todoID === "" ? "cursor-not-allowed" : "cursor-pointer hover:bg-slate-500"}`} onClick={() => getTodoById(todoID)} disabled={todoID === ""}>
                    Get Todo by ID
                </button>
            </div>
            <input type="text justify-center items-center" className="px-2 py-1 w-80 text-center bg-slate-400 text-black border rounded placeholder:text-gray-600" placeholder="Input ID"
                onChange={(e) => { setTodoID(e.target.value) }}
            />
            {todoRetrieved.getId() !== "" &&
                <div className="gap-5 px-2 py-1 mt-5 bg-slate-400 text-black border rounded flex flex-row">
                    <div>
                        <p>Title</p>
                        <p>Description</p>
                        <p>Completed</p>
                    </div>
                    <div className="flex flex-col w-80" >
                        <input className="bg-slate-400 px-1" value={title} onChange={(e) => { setTitle(e.target.value) }} />
                        <input className="bg-slate-400 px-1" value={description} onChange={(e) => { setDescription(e.target.value) }} />
                        <input type="checkbox" className="bg-slate-400 mx-1 flex-grow w-4 h-4" checked={completed} onChange={() => setCompleted(!completed)} />
                    </div>
                </div>
            }
            {todoRetrieved.getId() !== "" &&
                <button className={`px-2 py-1 bg-slate-400 text-black border rounded ${title === "" || description === "" ? "cursor-not-allowed" : "cursor-pointer hover:bg-slate-500"}`} onClick={updateTodoHandler} disabled={title === "" || description === ""}>
                    Update Todo
                </button>
            }
        </div>
    );
}

export default Grpc;
