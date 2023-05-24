export const revalidate = 0

import { Suspense } from 'react'
import BlogList from '../components/blog-list'
import NewsList from '../components/news-list'
import Spinner from '../components/Spinner'

export default function SterimingServerRenderingPage() {
  return (
    <section className="flex">
      <aside className="w-1/4">
        <section className="fixed m-1 h-full w-1/4 border border-blue-500 bg-gray-200 p-1">
          {/* MEMO: 非同期にロードされるコンポーネントを待機、その間にローディング状態を表示するっぽい */}
          <Suspense fallback={<Spinner borderColor="border-green-500" />}>
            {/* @ts-ignore */}
            <BlogList />
          </Suspense>
        </section>
      </aside>
      <main>
        <section className="fixed w-3/4">
          {/* MEMO: 非同期にロードされるコンポーネントを待機、その間にローディング状態を表示するっぽい */}
          <Suspense fallback={<Spinner />}>
            {/* @ts-ignore */}
            <NewsList />
          </Suspense>
        </section>
      </main>
    </section>
  )
}
