import { Suspense } from 'react'
import Products from './products/page'
import Loading from './loading'
import styles from '../app/page.module.css'


export default function Home() {
  return (
    <main className={styles.main}>
      {/* loading UI */}
     <Suspense fallback={<Loading/>}>
      <Products/>
     </Suspense>
    </main>
  )
}