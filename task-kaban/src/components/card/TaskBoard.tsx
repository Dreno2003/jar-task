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

const TaskCard = () => {
    const [tasks, setTasks] = React.useState<ReactNode[]>([]);

    const handleAddTask = () => {
        setTasks([<TaskInput />, ...tasks]);
    };

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
                    </div>

                    {/* <Input className="border" /> */}
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