import { Navigate, Routes, Route } from "react-router-dom";
// import Add from "./pages/Add";
// import Workouts from "./pages/Workouts";
// import Nav from "./components/Nav";
// import ShowWorkout from "./pages/ShowWorkout";
import "./bootstrap.css";

const App = () => {
  return (
    <>
      <Nav />
      <div className="container">
        <Routes>
          <Route path={"/"} element={<Navigate to="/workouts" />} />
          <Route path={"/workouts"} element={<Workouts />} />
          <Route path={"/workouts/new"} element={<Add />} />
          <Route path="/workouts/category" element={<ShowWorkoutCategory />} />
          <Route path={"/workouts/category/:id"} element={<ShowWorkout />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
