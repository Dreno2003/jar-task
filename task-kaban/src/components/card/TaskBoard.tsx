import {
    Card,
    CardContent,
    // CardDescription,
    // CardFooter,
    // CardHeader,
    // CardTitle,
} from "@/components/ui/card"
import { Button } from "../button/button"
import { IoAddOutline } from "react-icons/io5";
import React, { ReactNode } from "react";
import TaskInput from "./component/TaskInput";
import { upDateTodo, getData } from "@/services/auth/firebase";
import { Input } from "../input/Input";
import { todotype } from "@/types/types";
import { todo } from "node:test";

const TaskCard = () => {
    const [tasks, setTasks] = React.useState<ReactNode[]>([]);
    // const [todos, setTodos] = React.useState<todotype>();
    const [todos, setTodos] = React.useState<todotype[]>([]);
    const [data, setData] = React.useState<todotype>();
    const [task, setTask] = React.useState<string>('');
    const [isCompleted, setIsCompleted] = React.useState(false);

    const handleAddTask = () => {
        setTasks([...tasks, <TaskInput />,]);
    };



    async function fetchData() {
        try {
            const res: any = await getData();
            setTodos(res)
        } catch (error) {

        }
    }

    React.useEffect(() => {
        fetchData()
    }, [todos   ])


    const toggleCompletion = (todoId: string) => {
        // Find the index of the todo in the todos array based on its ID
        const todoIndex = todos.findIndex((todo) => todo.id === todoId);

        // Use a functional state update for more concise and controlled updates
        setTodos((prevTodos) => {
            const updatedTodos = [...prevTodos];
            updatedTodos[todoIndex].completed = !updatedTodos[todoIndex].completed;
            return updatedTodos;
        });

        // console.log()

        // Call updateTodo with the correct todoId and updated completed state
        // upDateTodo(todoId, { completed: !up[todoIndex].completed });

    };



    const handleEdit = (todoId: number, updatedTaskText: string) => {
        // Find the index of the task to update in the todos array
        const todoIndex = todos.findIndex((todo) => todo.id === todoId);
        const updatedTodos = [...todos];
        updatedTodos[todoIndex].todos = updatedTaskText;
        setTodos(updatedTodos);
        upDateTodo(todoId, { todos: updatedTaskText });
    }

    const handleComplete = (todoId: number, checked: any) => {
        const todoIndex = todos.findIndex((todo) => todo.id === todoId);
        const updatedTodo = [...todos];
        updatedTodo[todoIndex].completed = !updatedTodo[todoIndex].completed;
        console.log(updatedTodo, 'TEST')
        upDateTodo(todoId, { completed: checked })
    }



    return (
        <>

            <Card className="w-[20rem]  ">
                {/* <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader> */}


                <CardContent className="my-3 p-0 mb-0">
                    <div>
                        <Button variant='plain' onClick={handleAddTask} className="w-full flex justify-start">
                            <div className="flex align-center gap-2">
                                <IoAddOutline size={16} className="mt-[.12rem]" />
                                <span>
                                    Add Task
                                </span>
                            </div>

                        </Button>

                        <div className="">
                            {tasks.map((task, index) => (

                                <div key={index}>{task}</div>
                            ))}
                        </div>

                        <div>


                            {todos.map((todo, _) => (

                                <div className="flex items-center px-10 bg-slate-800o hover:bg-slate-800  mb-2" key={todo.id}>
                                    <Input
                                        className='size-4 '
                                        type='checkbox'
                                        checked={todo.completed}
                                        // onChange={() => handleComplete(todo.id)}
                                        onChange={(e) => handleComplete(todo.id, e.target.checked)}
                                    />
                                    {/* <div  onClick={(e) => handleComplete(todo.id, e.target.value)}>d </div> */}
                                    <Input
                                        type='text'
                                        value={todo.todos}
                                        onChange={(e) => handleEdit(todo.id, e.target.value)}
                                        className='!border-none focus-visible:ring-0 text-slate-400 transition-all'
                                    />
                                </div>
                            ))}

                            {/* <input type="text" value={} /> */}
                        </div>
                    </div>

                </CardContent>


                {/* <CardFooter>
                    <p>Card Footer</p>
                </CardFooter> */}
            </Card>

        </>
    )
}

TaskCard.displayName = 'TaskCard'

export { TaskCard }