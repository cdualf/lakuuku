
import Link from 'next/link'
import style from 'styles/pagination.module.css'

const PER_PAGE = 4;
function Pagination({ totalCount }) {
    const range = (start, end) =>
        [...Array(end - start + 1)].map((_, i) => start + i)
    
    return (
        <ul className={style.main}>
            {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
            <li key={index}>
                <Link href={`/blog/page/${number}`} className={style.link}>
                    {number}
                </Link>
            </li>
            ))}
        </ul>
    )

}

export default Pagination 

// import Link from 'next/link'

// export const Pagination = ({ maxPageNumber, currentPageNumber }) => {
//   currentPageNumber = Number(currentPageNumber);
//   maxPageNumber = Number(maxPageNumber);
//   const prevPage = currentPageNumber - 1;
//   const nextPage = currentPageNumber + 1;


//   return (
//     <div className="flex px-3 my-12">
//       {currentPageNumber !== 1 && (
//         <Link href={`/blog/page/${prevPage}`}>
//           Previous
//         </Link>
//           )}
//         <div>hoge</div>
//       {currentPageNumber !== maxPageNumber && (
//         <Link href={`/blog/page/${nextPage}`}>
//           Next
//         </Link>
//       )}
//     </div>
//   );
// };
