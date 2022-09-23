import { useState } from "react";
import { Link } from "react-router-dom";

const WorkoutForm = (props) => {
  const { submitHandler, initialWorkout, formText, errors, errorObject } =
    props;
  const [formState, setFormState] = useState(initialWorkout);

  const changeHandler = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {errors &&
        errors.map((error, idx) => {
          return <p key={idx}>{error}</p>;
        })}
      <div className="card">
        <h5 className="card-header">{formText}</h5>
        <div className="card-body">
          <form onSubmit={(e) => submitHandler(e, formState)}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control form-control-sm"
                value={formState.name}
                onChange={changeHandler}
              />
              {errorObject.name ? (
                <span className="form-text text-danger">
                  {errorObject.name}
                </span>
              ) : (
                ""
              )}
            </div>
            <div>
              <label>Category</label>
              <select>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
            <div className="mb-3">
              {errorObject.name ? (
                <span className="form-text text-danger">
                  {errorObject.name}
                </span>
              ) : (
                ""
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="excercise1" className="form-label">
                Excercise1:
              </label>
              <input
                type="text"
                name="excercise1"
                id="excercise1"
                className="form-control form-control-sm"
                value={formState.excercise1}
                onChange={changeHandler}
              />
              {errorObject.excercise1 ? (
                <span className="form-text text-danger">
                  {errorObject.excercise1}
                </span>
              ) : (
                ""
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="excercise2" className="form-label">
                Excercise2:
              </label>
              <input
                type="text"
                name="excercise2"
                id="excercise2"
                className="form-control form-control-sm"
                value={formState.excercise2}
                onChange={changeHandler}
              />
              {errorObject.excercise2 ? (
                <span className="form-text text-danger">
                  {errorObject.excercise2}
                </span>
              ) : (
                ""
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="excercise3" className="form-label">
                Excercise3:
              </label>
              <input
                type="text"
                name="excercise3"
                id="excercise3"
                className="form-control form-control-sm"
                value={formState.excercise3}
                onChange={changeHandler}
              />
              {errorObject.excercise3 ? (
                <span className="form-text text-danger">
                  {errorObject.excercise3}
                </span>
              ) : (
                ""
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="excercise4" className="form-label">
                Excercise4:
              </label>
              <input
                type="text"
                name="excercise4"
                id="excercise4"
                className="form-control form-control-sm"
                value={formState.excercise4}
                onChange={changeHandler}
              />
              {errorObject.excercise4 ? (
                <span className="form-text text-danger">
                  {errorObject.excercise4}
                </span>
              ) : (
                ""
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="excercise5" className="form-label">
                Excercise5:
              </label>
              <input
                type="text"
                name="excercise5"
                id="excercise5"
                className="form-control form-control-sm"
                value={formState.excercise5}
                onChange={changeHandler}
              />
              {errorObject.excercise5 ? (
                <span className="form-text text-danger">
                  {errorObject.excercise5}
                </span>
              ) : (
                ""
              )}
            </div>

            <div className="d-flex justify-content-end">
              <div className="d-flex justify-content-end">
                <button className="btn btn-primary btn-sm">{formText}</button>
              </div>
              <div className="d-flex justify-content-end">
                <button className="btn btn-primary ms-3">
                  <Link className="nav-link" to={"/workouts"}>
                    Cancel
                  </Link>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default WorkoutForm;
