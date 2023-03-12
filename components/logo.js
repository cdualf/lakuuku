import style from 'styles/logo.module.css'
import Link from 'next/link'

function Logo() {
  return (
      <div className={style.logoMain}>
          <Link href='/'>
             <h1>LAKUUKU</h1>
          </Link>
      </div>
  )
}

export default Logo
