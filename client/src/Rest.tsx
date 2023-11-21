import { useState, useEffect } from 'react';
import axios from 'axios'

import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import { FaRegCopy } from "react-icons/fa";

const Rest = () => {
    const [todoID, setTodoID] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [completed, setCompleted] = useState(false);

    const createTodo = async (startTime: number) => {
        const response = await axios.post('http://localhost:8061/todo/new', {
            "title": "Eksplorasi gRPC",
            "description": "Perbandingan kecepatan gRPC dan REST",
            "completed": false
        })
        // end benchmark
        const endTime = performance.now();
        const duration = endTime - startTime;
        console.log(`HTTP Request completed in ${duration} milliseconds`);
        console.log(response);
    }

    const createString = async (stringMsg: string) => {
        const response = await axios.post('http://localhost:8061/todo/string-message/new', {
            "message": stringMsg
        })
        console.log(response);
    }

    const getTodo = async () => {
        const response = await axios.get(`http://localhost:8061/todo/${todoID}`)
        console.log(response)
        setTitle(response.data.todo.title)
        setDescription(response.data.todo.description)
        setCompleted(response.data.todo.completed)
    }

    const getAllTodo = async () => {
        const response = await axios.get(`http://localhost:8061/todo/`)
        console.log(response)
    }

    const updateTodo = async () => {
        const response = await axios.put(`http://localhost:8061/todo/${todoID}`, {
            "title": title,
            "description": description,
            "completed": completed
        })
        console.log(response)
    }

    const createManyTodo = async () => {
        for (let i = 0; i < 1; i++) {
            const startTime = performance.now();
            createTodo(startTime);
        }
    }

    const createStringMessage = async () => {
        for (let i = 0; i < 1; i++) {
            createString("");
        }
    }

    return (
        <div className="h-full bg-black text-white gap-4 flex flex-col justify-center items-center">
            <nav className='w-96 gap-6 flex justify-center items-center'>
                <a href="/">
                    <BsFillCaretLeftFill />
                </a>
                <h1 className='text-blue-300'>REST API</h1>
                <a href="/grpc">
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
                <FaRegCopy className="p-1 mr-2 w-7 h-7 text-black border rounded bg-slate-400 hover:bg-slate-500" title="Copy ID"
                    onClick={() => { navigator.clipboard.writeText("83d9689b-2ad1-4f71-9d34-83c3f2c2be9b") }} />
                <button className={`px-2 py-1 bg-slate-400 text-black border rounded ${todoID === "" ? "cursor-not-allowed" : "cursor-pointer hover:bg-slate-500"}`} onClick={() => getTodo()} disabled={todoID === ""}>
                    Get Todo by ID
                </button>
            </div>
            <input type="text justify-center items-center" className="px-2 py-1 w-80 text-center bg-slate-400 text-black border rounded placeholder:text-gray-600" placeholder="Input ID"
                onChange={(e) => { setTodoID(e.target.value) }}
            />
            {title &&
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
            {title &&
                <button className={`px-2 py-1 bg-slate-400 text-black border rounded ${title === "" || description === "" ? "cursor-not-allowed" : "cursor-pointer hover:bg-slate-500"}`} onClick={updateTodo} disabled={title === "" || description === ""}>
                    Update Todo
                </button>
            }
        </div>
    );
}

export default Rest;