import { Input } from '@/components/input/Input'
import React from 'react';
import { addDataToFirestore } from '@/services/auth/firebase';
import { todotype } from '@/types/types';
import { Button } from '@/components/button/button';

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
        // setTask('')
    }


    function handleTaskInput(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        setTask(value);
    }

    // React.useEffect(() => {
    //     if (isCompleted === true) {
    //         handleSubmit()
    //     }
    // }, [isCompleted])

    

    return (
        <>

            <div className='flex items-center gap-10 px-4 bg-slate-800o hover:bg-slate-800  mb-2'>
                {/* <Button ref={ref} onClick={() => setIsCompleted(!isCompleted)}>comp</Button> */}
                <Input type='checkbox'

                    onChange={() => setIsCompleted(!isCompleted)}
                    className='size-4 hidden ' />
                <Input type='text'  value={ task } onChange={handleTaskInput} className='border focus-visible:ring-1 w-100 text-slate-400 transition-all' />
          
            <Button onClick={handleSubmit}>
                Add
            </Button>
            </div>
        </>
    )
}

export default TaskInput