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
import { todotype } from "@/types/types";
import TaskLists from "./component/TaskLists";
import useGetTodos from "@/hooks/useGetTodos";

const TaskCard = () => {
    const [tasks, setTasks] = React.useState<ReactNode[]>([]);
    const [todos, setTodos] = React.useState<todotype[]>([]);
    const getTodos = useGetTodos();
    const debounceTime = 500;
    // console.log(getTodos.data, 'DATA')
    getTodos.refetch()
    const handleAddTask = () => {
        setTasks([...tasks, <TaskInput />,]);
    };



    async function fetchData() {
        try {
            const res: any = await getData();
            // console.log(res)
            setTodos(res)
        } catch (error) {

        }

    }

    React.useEffect(() => {

        fetchData()
    }, [])




    const handleEdit = (todoId: number, updatedTaskText: string) => {
        // Find the index of the task to update in the todos array
        const todoIndex = todos.findIndex((todo) => todo.id === todoId);
        const updatedTodos = [...todos];
        updatedTodos[todoIndex].todos = updatedTaskText;
        setTodos(updatedTodos);
        upDateTodo(todoId, { todos: updatedTaskText });
    }

    const handleComplete = (todoId: number, checked: boolean) => {
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
                        {/* <Button variant='plain' onClick={handleAddTask} className="w-full flex justify-start">
                            <div className="flex align-center gap-2">
                                <IoAddOutline size={16} className="mt-[.12rem]" />
                                <span>
                                    Add Task
                                </span>
                            </div>

                        </Button> */}

                        <div className="">

                            <TaskInput />
                            {/* {tasks.map((task, index) => (

                                <div key={index}>{task}</div>
                            ))} */}
                        </div>

                        <div>

                            <TaskLists handleComplete={handleComplete} handleEdit={handleEdit} todos={todos} />

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