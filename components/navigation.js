import style from 'styles/navigation.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faShirt, faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function Navigation() {
    const [navIsOpen, setNaVIsOpen] = useState(false)
    const toggleNav = () => {
        setNaVIsOpen((prev) => !prev)
    }
    const closeNav = () => {
        setNaVIsOpen(false)
    }

    return (
        <div className={navIsOpen ? style.open : style.close}>
            {navIsOpen && (
                <style jsx global>{`
                @media (max-width: 767px) {
                    body {
                    overflow: hidden;
                    position: fixed;
                    width: 100%;
                    }
                }
                `}</style>
            )}
            <button className={style.btn} onClick={toggleNav}>
                <span className={style.bar}></span>
                <span className="sr-only">MENU</span>
            </button>
            <ul className={style.list}>
                <li>
                    <Link href='/' onClick={closeNav}>
                        <FontAwesomeIcon icon={ faHouse }/> Home
                    </Link>
                </li>
                <li>
                    <Link href='/blog/category/bamboo' onClick={closeNav}>
                        <FontAwesomeIcon icon={ faBasketShopping }/> 竹・炭細工
                    </Link>
                </li>
                <li>
                    <Link href='/blog/category/cloth' onClick={closeNav}>
                        <FontAwesomeIcon icon={ faShirt }/> 洋服・小物
                    </Link>
                </li>
            </ul>  
        </div>
    )
}

export default Navigation
