import style from 'styles/posts.module.css'
import Link from 'next/link'
import Image from 'next/image'
import ConvertDate from 'components/convert-date'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'

export default function Posts({ posts }) {
  return (
    <div className={style.gridContainer}>
      {posts.map(({ title, slug, eyecatch, publishDate}) => (
        <article className={style.post} key={slug}>
          <Link href={`/blog/${slug}`}>
            <figure>
              <Image
                src={eyecatch.url}
                alt=""
                layout="fill"
                objectFit="cover"
                sizes="(min-width: 1152px) 576px, 50vw"
              />
            </figure>
            <div className={style.publish}>
              <FontAwesomeIcon icon={faClock} size="lg" color="var(--gray-25)" />
              <ConvertDate dateISO={publishDate} />
              <p>{title}</p>
            </div>
          </Link>
        </article>
      ))}
              
    </div>
  )
}
