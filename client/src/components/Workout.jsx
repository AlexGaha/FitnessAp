import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Workouts = () => {
  const baseUrl = 'http://localhost:8000/api/workouts';
  const [workouts, setWorkouts] = useState([]);
  useEffect(() => {
    axios
      .get(baseUrl)
      .then((res) => setWorkouts(res.data))
      .catch((err) => console.log(err));
  }, [Workouts]); //dependancy so that the page will render everytime a new workout is added

  return (
    <div className="col">
      <Outlet context={{ baseUrl, workouts, setWorkouts }} />
    </div>
  );
};

export default Workouts;
