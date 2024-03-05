import { Input } from '@/components/input/Input'
import React from 'react';
import { addDataToFirestore } from '@/services/auth/firebase';
import { todotype } from '@/types/types';

function TaskInput() {
    const [isCompleted, setIsCompleted] = React.useState(false);
    const [task, setTask] = React.useState<string>('');

    React.useEffect(() => {
        
        // Log the current value
    }, [isCompleted]);

    function handleSubmit() {
        // e.preventDefault();

        // if (task === '') return;

        let newTodo: todotype = {
            todos: task,
            completed: isCompleted,
            // createdAt: Date.now(),
        };

        // addDataToFirestore(newTodo)
    }


    function handleTaskInput(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        setTask(value);
        // handleSubmit()
    }

    function handleCompletedTodo(e: React.ChangeEvent<HTMLInputElement>) {
        setIsCompleted(e.target.checked);
        console.log(isCompleted)
        // addDataToFirestore({});
    }

   



    return (
        <>
            <div className='flex items-center px-10 bg-slate-800o hover:bg-slate-800  mb-2'>
                <Input type='checkbox' checked={isCompleted} onChange={handleCompletedTodo} className='size-4 ' />
                <Input type='text' onBlur={handleSubmit} onChange={handleTaskInput} className='!border-none focus-visible:ring-0 text-slate-400 transition-all' />
            </div>
        </>
    )
}

export default TaskInput