import { Input } from '@/components/input/Input'
import React from 'react'

function TaskInput() {
    return (
        <>
            <div className='flex items-center px-10 bg-slate-800o hover:bg-slate-800  mb-2'>
                <Input type='checkbox'   className='size-4 ' />                
                <Input type='text' className='!border-none focus-visible:ring-0 text-slate-400 transition-all'  />
            </div>
        </>
    )
}

export default TaskInput