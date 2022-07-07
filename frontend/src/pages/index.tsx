// import type { NextPage } from "next";
// import { Home } from "@/components/home";
// const HomePage: NextPage = () => {
//   return <Home />;
// };

// export default HomePage;

import type { NextPage } from 'next'
// import styles from '../styles/Home.module.css'
import { gql,useQuery } from "@apollo/client";


const Home: NextPage = () => {
  const QUERY = gql`
  query {
    rooms {
    id
    name
  }
  }
`;

  const { data, loading, error } = useQuery(QUERY);
  return (
    <div>
      <main>
      <div>
        {(loading) && <p>Loading...</p>}
      </div>
      <div>
        {(error) && <p>Loading...</p>}
      </div>

      <pre>{JSON.stringify(data, null, 2)}</pre>;
      </main>
    </div>
  )
}

export default Home
