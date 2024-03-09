import { Input } from '@/components/input/Input'
import { todotype } from '@/types/types'

interface taskListProps {
    handleComplete: (a: number, b:boolean) => void
    handleEdit: (a: number, b: string) => void
    todos: todotype[]
}

function TaskLists({ handleComplete, handleEdit, todos }: taskListProps) {
    return (
        <>
            {todos.map((todo: any, _: any) => (

                <div className="flex items-center px-10 bg-slate-800o hover:bg-slate-800  mb-2" key={todo.id}>
                    <Input
                        className='size-4 '
                        checked={todo.completed}
                        type='checkbox'
                        onChange={(e) => handleComplete(todo.id, e.target.checked)}
                    />

                    {/* <button onClick={() => handleComplete(todo.id)}>
                        {todo.completed === false ? 'Undo' : 'Mark Completed'}
                    </button> */}


                    <Input
                        type='text'
                        value={todo.todos}
                        onChange={(e) => handleEdit(todo.id, e.target.value)}
                        className='!border-none focus-visible:ring-0 text-slate-400 transition-all'
                    />
                </div>
            ))}
        </>
    )
}

export default TaskLists