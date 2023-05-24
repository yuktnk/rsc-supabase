import { notFound } from 'next/navigation'
import { headers, cookies } from 'next/headers'
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { format } from 'date-fns'
import type { Database } from '@/database.types'

type PageProps = {
  params: {
    todoId: string
  }
}

export default async function TodoDetailPage({ params }: PageProps) {
  const supabase = createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  })

  const { data: todo, error } = await supabase
    .from('todos')
    .select('*')
    .eq('id', params.todoId)
    .single()

  if (!todo) {
    return notFound()
  }

  return (
    <div className="mt-16 p-8">
      <p>
        <b>Task ID: </b>
        {todo.id}
      </p>
      <p>
        <b>Title: </b>
        {todo.title}
      </p>
      <p>
        <b>Status: </b>
        {todo.completed ? 'done' : 'not yet'}
      </p>
      <p>
        <b>Created at: </b>
        {todo && format(new Date(todo.created_at), 'yyyy-MM-dd HH:mm:ss')}
      </p>
    </div>
  )
}
