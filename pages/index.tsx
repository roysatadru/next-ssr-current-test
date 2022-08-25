import type { NextPage } from 'next';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Link href="/users" passHref>
        <a
          style={{
            display: 'block',
            width: 200,
            padding: '8px 16px',
            backgroundColor: '#eaeaea',
            textAlign: 'center',
            margin: 10,
            borderRadius: 4,
          }}
        >
          Go to User
        </a>
      </Link>
    </div>
  );
};

export default Home;
