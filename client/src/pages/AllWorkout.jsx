import { Link, useOutletContext } from 'react-router-dom';
import axios from 'axios';

const AllWorkouts = () => {
  const { baseUrl, workouts } = useOutletContext();

  const deleteOne = (id) => {
    axios
      .delete(`${baseUrl}/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <table className="table table-striped table-hover table-bordered">
      <thead>
        <tr>
          <th>Workout Name</th>
          <th className="text-start">Action</th>
        </tr>
      </thead>
      <tbody>
        {workouts &&
          workouts.map((workout) => {
            return (
              <tr key={workout._id}>
                <td>
                  <Link to={`/workouts/${workout._id}`}>{workout.name}</Link>
                </td>
                <td className="text-start">
                  <Link
                    to={`/workouts/${workout._id}/edit`}
                    className="btn btn-warning btn-sm me-2"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteOne(workout._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default AllWorkouts;
