import styles from "styles/footer.module.css";
import Container from "components/container";
// import Social from 'components/social'
import Link from "next/link";

function Footer() {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <div>&copy;2022 LAKUUKU All rights reserved.</div>
          <ul className={styles.list}>
            <li>
              <Link href="/">Home</Link>
            </li>
            {/* <li>
              <Link href="/policy">
                プライバシーポリシー
              </Link>            
            </li>
            <li>
              <Link href="/contact">
                問い合わせ
              </Link>            
            </li> */}
          </ul>
          {/* <Social /> */}
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
