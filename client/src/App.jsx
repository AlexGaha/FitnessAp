import './Slate.css';
import { Navigate, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Workouts from './components/Workout';
import AllWorkouts from './pages/AllWorkout';
import ShowWorkout from './pages/ShowWorkout';
import NewWorkout from './pages/NewWorkouts';
import EditWorkout from './pages/EditWorkout';

const App = () => {
  return (
    <div>
      <Nav />
      <div className="container">
        <div className="row">
          <Routes>
            <Route path={'/'} element={<Navigate to="/workouts" />} />
            <Route path={'/workouts'} element={<Workouts />}>
              <Route index element={<AllWorkouts />} />
              <Route path=":id" element={<ShowWorkout />} />
              <Route path="new" element={<NewWorkout />} />
              <Route path=":id/edit" element={<EditWorkout />} />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
