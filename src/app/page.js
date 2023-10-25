import styles from "./page.module.css";
import Table from "./resources/table";
import { GeneralTemplate } from "./resources/templates/index.template";

export default function Home() {
  return (
    <main className={styles.main}>
      <GeneralTemplate>
        <Table>
          <thead>
            <tr>
              <th>National ID Number</th>
              <th>Title</th>
              <th>Name</th>
              <th>Surname</th>
              <th>Date of Birth</th>
              <th>Teacher Number</th>
              <th>Salary</th>
            </tr>
          </thead>
        </Table>
      </GeneralTemplate>
    </main>
  );
}
