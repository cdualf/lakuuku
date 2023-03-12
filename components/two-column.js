import style from 'styles/two-column.module.css'

export function TwoColumn({children}) {
  return (
    <div className={style.flexContainer}>
      {children}
    </div>
  )
}

export function TwoColumnMain({children}) {
  return (
    <div className={style.main}>
      {children}
    </div>
  )
}
export function TwoColumnSidebar({children}) {
  return (
    <div className={style.sidebar}>
      {children}
    </div>
  )
}
