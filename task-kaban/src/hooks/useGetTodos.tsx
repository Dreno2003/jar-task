
import { getData } from '@/services/auth/firebase'
import {useQuery} from '@tanstack/react-query'
export default function useGetTodos() {
    return useQuery({
        queryKey:['todos'],
        queryFn: () => getData()
    })
}

export {useGetTodos}
