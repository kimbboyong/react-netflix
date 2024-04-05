import { Route, Routes } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import HomePage from "./pages/HomePage/HomePage";
import MoviePage from "./pages/Movies/MoviePage";
import MovieDetailPage from "./pages/MovieDetail/MovieDetailPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Intro from "./components/Intro/Intro";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Intro />} />

        <Route path="/home" element={<AppLayout />}>
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
