import styles from './index.module.css'
import sqlServer from "./assets/sql-server.png";

function App() {

  return (
    <main className={styles.main}>

      <img src={sqlServer} className={styles.icon} alt="SQL server" />
      <h3>Generate SQL</h3>
    </main>
  )
}

export default App
