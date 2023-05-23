'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import supabase from '@/utils/supabase'
import useStore from '@/store'

export default function SupabaseListener({
  accessToken,
}: {
  accessToken?: string
}) {
  const router = useRouter()
  const { updateLoginUser } = useStore()

  useEffect(() => {
    async function getUserInfo() {
      const { data } = await supabase.auth.getSession()
      if (data.session) {
        updateLoginUser({
          id: data.session.user.id,
          email: data.session.user.email,
        })
      }
    }
    getUserInfo()

    // ユーザーのセッション情報の変化を監視する
    // ログイン、ログアウトが行われると処理が走る？？
    supabase.auth.onAuthStateChange((_, session) => {
      updateLoginUser({ id: session?.user.id, email: session?.user.email! })
      if (session?.access_token !== accessToken) {
        router.refresh()
      }
    })
  }, [accessToken, updateLoginUser, router])
  return null
}
