import { useOutletContext, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Workouts from '../components/Workout';

const ShowWorkout = () => {
  const { id } = useParams();
  const { baseUrl } = useOutletContext();
  const [Workouts, setWorkout] = useState(null);

  useEffect(() => {
    axios
      .get(`${baseUrl}/${id}`)
      .then((res) => setWorkout(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <div className="card-body">
    <thead className="card-title">
        <tr>
            <h2>Name:</h2>
            <p>{Workouts.name}</p>
            <h2>Category:</h2>
            <p> {Workouts.category}</p>
            <h2>Workout1:</h2>
            <p> {Workouts.excercise1}</p>
            <h2>Workout2:</h2>
            <p> {Workouts.excercise2}</p>
            <h2>Workout3:</h2>
            <p> {Workouts.excercise3}</p>
            <h2>Workout4:</h2>
            <p> {Workouts.excercise4}</p>
            <h2>Workout5:</h2>
            <p> {Workouts.excercise5}</p>
        </tr>
    </thead>

</div>
  );
};

export default ShowWorkout;
