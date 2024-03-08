import { Input } from '@/components/input/Input'
import React from 'react';
import { addDataToFirestore } from '@/services/auth/firebase';
import { todotype } from '@/types/types';

function TaskInput() {
    const [isCompleted, setIsCompleted] = React.useState(false);
    const [task, setTask] = React.useState<string>('');


   

    function handleSubmit() {
        // e.preventDefault();

        if (task === '') return;
        let newTodo: todotype = {
            todos: task  ,
            completed: isCompleted,
        };
        addDataToFirestore(newTodo)
    }


    function handleTaskInput(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        setTask(value);
    }

    React.useEffect(() => {
        if (isCompleted === true) {
            handleSubmit()
        }
    }, [isCompleted])

    

    return (
        <>

            <div className='flex items-center px-10 bg-slate-800o hover:bg-slate-800  mb-2'>
                {/* <Button ref={ref} onClick={() => setIsCompleted(!isCompleted)}>comp</Button> */}
                <Input type='checkbox'

                    onChange={() => setIsCompleted(!isCompleted)}
                    className='size-4 ' />
                <Input type='text' value={ task } onBlur={handleSubmit} onChange={handleTaskInput} className='!border-none focus-visible:ring-0 text-slate-400 transition-all' />
          

            </div>
        </>
    )
}

export default TaskInput