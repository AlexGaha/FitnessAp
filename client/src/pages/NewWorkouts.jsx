import { useState } from 'react';
import axios from 'axios';
import { useOutletContext, useNavigate } from 'react-router-dom';
import WorkoutForm from '../components/WorkoutForm';

const NewWorkout = () => {
  const navigate = useNavigate();
  const { baseUrl } = useOutletContext();
  const [errors, setErrors] = useState([]);
  const [errorObject, setErrorObject] = useState({})

  const initialWorkout = {
        name: '',
        category: '',
        excercise1: '',
        excercise2: '',
        excercise3: '',
        excercise4: '',
        excercise5: '',
  };

  const insertWorkout = (e, workout) => {
    e.preventDefault();
    axios
      .post(baseUrl, workout)
      .then(() => {
        setErrors([]);
        navigate('/workouts');
      })
      .catch((err) => {
        console.log(err);
        const errorResponse = err.response.data.errors;
        const errorArr = [];
        const errorObj = {}
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message);
        }
        for (const key in errorResponse) {
          errorObj[key] = errorResponse[key].message
        }
        setErrorObject(errorObj);
        setErrors(errorArr);
      });
  };

  return (
    <WorkoutForm
      formText={'Add Workout'}
      submitHandler={insertWorkout}
      initialWorkout={initialWorkout}
      errors={errors}
      errorObject={errorObject}
    />
  );
};

export default NewWorkout;
