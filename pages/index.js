import Container from "components/container";
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from "components/two-column";
import { getAllPosts, getAllPostsForPagination } from "lib/api";
import Meta from "components/meta";
import Posts from "components/posts";
import style from "styles/toppage.module.css";
import Profile from "components/profile";
import Pagination from "components/pagination";

const PER_PAGE = 4;
export default function Home({ posts, totalCount }) {
  return (
    <Container>
      <Meta />
      <TwoColumn>
        <TwoColumnMain>
          <div className={style.maintitle}>
            <h2>新着記事一覧</h2>
          </div>
          <Posts posts={posts} />
          <Pagination totalCount={totalCount} />
        </TwoColumnMain>
        <TwoColumnSidebar>
          <Profile />
        </TwoColumnSidebar>
      </TwoColumn>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts(PER_PAGE);
  const totalCount = await getAllPostsForPagination();
  return {
    props: {
      posts: posts,
      totalCount: totalCount.totalCount,
    },
  };
}
