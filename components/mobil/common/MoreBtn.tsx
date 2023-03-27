import { useRouter } from 'next/router'
import React from 'react'

function MoreBtn() {
  const router = useRouter()
  return (
    <button onClick={() => router.push('/contact')} className="more-btn">
      MORE
    </button>
  )
}

export default MoreBtn
