import { Suspense, ReactNode } from 'react'
import Spinner from '@/app/components/Spinner'
import TodoEdit from '@/app/components/todo-edit'
import TodoList from '@/app/components/todo-list'

export default async function TodoLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <section className="flex">
      <aside className={`h-[calc(100vh-56px)] w-1/4 bg-gray-200`}>
        <TodoEdit />
        <Suspense fallback={<Spinner />}>
          {/* @ts-ignore */}
          <TodoList />
        </Suspense>
      </aside>
      <main className="flex flex-1 justify-center">{children}</main>
    </section>
  )
}
