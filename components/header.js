import style from 'styles/header.module.css'
import Logo from 'components/logo'
import Navigation from './navigation'
import Image from 'next/image'
import Container from './container'

function Header() {
  return (
    <Container large>
      <div className={style.flexContainer}>
        <Logo />
        <Navigation/>
      </div>
    </Container>
  )
}

export default Header
