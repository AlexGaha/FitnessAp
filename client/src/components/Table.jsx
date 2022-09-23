import { Link } from "react-router-dom";

const Table = (props) => {
  const { workout } = props;
  return (
    <div>
      <Link to="/workout/new">Workouts by Category</Link>
      <table className="table table-sm">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Actions Available</th>
          </tr>
        </thead>
        <tbody>
          {workout &&
            workout.map((workout) => {
              return (
                <tr key={workout._id}>
                  <td>
                    <Link to={`/workouts/${workout._id}`}>{workout.workoutName}</Link>
                  </td>
                  <td>
                    {workout.workoutCategory}
                  </td>
                  <td className="text-end">
                    <Link
                      to={`/workout/${workout._id}`}
                      className="btn btn-primary"
                    >
                      Details
                    </Link>
                    <button type="details" className="btn btn-secondary">
                    <Link to={`/workouts/${workout._id}`}>{workout.workoutName}
                      Details
                    </Link>
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
