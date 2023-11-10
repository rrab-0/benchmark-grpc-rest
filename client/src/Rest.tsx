import { useEffect } from 'react';
import axios from 'axios'

const Rest = () => {
    const createTodo = async (startTime: number) => {
        const response = await axios.post('http://localhost:8061/todo/new', {
            "title": "hello world",
            "description": "a world of good",
        })
        // end benchmark
        const endTime = performance.now();
        const duration = endTime - startTime;
        console.log(`HTTP Request completed in ${duration} milliseconds`);

        console.log(response);
    }

    useEffect(() => {
        // start benchmark
        const startTime = performance.now();
        createTodo(startTime);
    }, [])
    return (
        <div className="Rest">
            <p>hello</p>
        </div>
    );
}

export default Rest;