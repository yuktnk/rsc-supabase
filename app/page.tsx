import { Suspense } from 'react'
import NotesList from './components/notes-list'
import TimerCounter from './components/timer-counter'
import Spinner from './components/Spinner'

export default function Page() {
  return (
    <main>
      <div className="m-10 text-center">
        <p>Hello World</p>
        <Suspense fallback={<Spinner borderColor="border-green-500" />}>
          {/* @ts-ignore */}
          <NotesList />
        </Suspense>
        <TimerCounter />
      </div>
    </main>
  )
}
