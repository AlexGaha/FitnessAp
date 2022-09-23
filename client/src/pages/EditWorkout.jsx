import { useEffect, useState } from 'react';
import axios from 'axios';
import { useOutletContext, useNavigate, useParams } from 'react-router-dom';
import WorkoutForm from '../components/WorkoutForm';

const EditWorkout = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { baseUrl } = useOutletContext();
  const [workout, setWorkout] = useState(null);

  useEffect(() => {
    axios
      .get(`${baseUrl}/${id}`)
      .then((res) => {
        setWorkout(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const updateWorkout = (e, workout) => {
    e.preventDefault();
    axios
      .put(`${baseUrl}/${id}`, workout)
      .then(() => navigate('/workouts'))
      .catch((err) => console.log(err));
  };

  return (
    workout && <WorkoutForm formText={'Edit Workout'} submitHandler={updateWorkout} initialWorkout={workout} errors={[]} errorObject= {{}}/>
  );
};

export default EditWorkout;
