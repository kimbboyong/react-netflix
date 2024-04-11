import { Route, Routes } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import HomePage from "./pages/HomePage/HomePage";
import MovieDetailPage from "./pages/MovieDetail/MovieDetailPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import MoviePage from "./pages/Movies/MoviePage";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Intro />} /> */}

        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />

          <Route path="movies">
            <Route index element={<MoviePage />} />
            <Route path=":id" element={<MovieDetailPage />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
