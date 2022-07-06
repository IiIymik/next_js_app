import { Container } from "../components/Container/Container";
import { DefaultPage } from "../components/DefaultPage/DefaultPage";
import { Nav } from "../components/Nav/Nav";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <DefaultPage />
    </div>
  );
}
