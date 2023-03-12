import style from 'styles/post-categories.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons'

export default function PostCategories({ categories }) {
  return (
    <div className={style.flexContainer}>
      <h3 className={style.heading}>
        <p>カテゴリー</p>
      </h3>
      <ul className={style.list}>
        {categories.map(({ name, slug }) => (
          <li key={slug}>
            <Link href={`/blog/category/${slug}`}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
