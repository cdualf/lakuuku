
import Container from 'components/container'
import { TwoColumn, TwoColumnMain, TwoColumnSidebar} from 'components/two-column'
import Meta from 'components/meta'
import Posts from 'components/posts'
import style from 'styles/toppage.module.css'
import Profile from 'components/profile'
import Pagination from 'components/pagination'
import { client } from 'lib/api'

const PER_PAGE = 4
export default function BlogPageId({ blog, totalCount }) {
  return (
    <Container>
      <Meta />
      <TwoColumn>
        <TwoColumnMain>
          <div className={style.maintitle}>
            <h2>新着記事一覧</h2>
          </div>
          <Posts posts={blog} />
          <Pagination totalCount={totalCount}/>
        </TwoColumnMain>
        <TwoColumnSidebar>
          <Profile />
        </TwoColumnSidebar>
      </TwoColumn>
    </Container>
  );
}

export async function getStaticPaths() {
  const range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i);
  const data = await client.get({ endpoint: 'blogs' });

  const { totalCount } = data;
  const paths = range(1, Math.ceil(totalCount / PER_PAGE)).map((i) => `/blog/page/${i}`);
  return { paths, fallback: false };
};

export async function getStaticProps(context) {

  const numId = context.params.id;
  const offset = (numId - 1) * PER_PAGE;
  const limit = PER_PAGE;
  const queries = {
    offset: offset,
    limit: limit,
    fields: 'title,slug,eyecatch,publishDate,totalCount',
    orders: '-publishDate',
  };
  
  const data = await client.get({ endpoint: 'blogs', queries: queries });

  return {
    props: {
      blog: data.contents,
      totalCount: data.totalCount,
      currentPageNumber: numId,
    },
  };
};

