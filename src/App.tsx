import React, { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { Layout } from "antd";
import { loadLaunches, launchesSelector } from "./redux/modules/launches";
import AppHeader from "./components/Header";
import LaunchFilters, { Filters } from "./components/Filters";
import Map from "./components/Map";
import Loading from "./components/Loading"
import Error from "./components/Error"

function App() {
  const { Content } = Layout;

  const { loading, error } = useSelector(launchesSelector);

  const dispatch = useDispatch();
  const [filters, setFilters] = useState<Filters>(null);

  useEffect(() => {
    dispatch(loadLaunches("2021-09-5T20:43:53Z", "2021-12-4T20:43:53Z", 0));
  }, []);

  return (
    <div className="App">
      <Layout style={{ background: "white" }}>
        <AppHeader />
        <Content style={{ padding: "0 70px", marginTop: 112 }}>
          <LaunchFilters setFilters={setFilters} filters={filters} />

          {loading && <Loading />}

          {error && <Error />}

          {!loading && !error && <Map filters={filters} />}
        </Content>
      </Layout>
    </div>
  );
}

export default App;
