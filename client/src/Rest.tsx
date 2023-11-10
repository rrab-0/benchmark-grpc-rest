import { useEffect } from 'react';
import axios from 'axios'

import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

const Rest = () => {
    const createTodo = async (startTime: number) => {
        const response = await axios.post('http://localhost:8061/todo/new', {
            "title": "hello world",
            // "description": "a world of good",
            "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore quo eius dolore atque autem voluptates quibusdam esse sed laudantium, delectus odio velit debitis deleniti dolor, architecto vel quis fugit ut? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore quo eius dolore atque autem voluptates quibusdam esse sed laudantium, delectus odio velit debitis deleniti dolor, architecto vel quis fugit ut? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore quo eius dolore atque autem voluptates quibusdam esse sed laudantium, delectus odio velit debitis deleniti dolor, architecto vel quis fugit ut?",
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

    // useEffect(() => {
    //     // start benchmark
    //     const startTime = performance.now();
    //     createTodo(startTime);
    // }, [])

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

export default Rest;