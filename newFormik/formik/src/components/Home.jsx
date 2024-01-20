import React from "react";
import { useFormik } from "formik";
import HomeSchema from "../schema/HomeSchema";
import { Link } from "react-router-dom";

const Home = () => {
  const { errors, handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: HomeSchema,
  });

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="inputs">
          <label>enter your email</label>
          <input
            type="email"
            value={values.email}
            onChange={handleChange}
            name="email"
            className={errors.email ? "input-error" : ""}
            placeholder="enter your email here"
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="inputs">
          <label>enter your age</label>
          <input
            type="number"
            value={values.age}
            onChange={handleChange}
            name="age"
            className={errors.age ? "input-error" : ""}
            placeholder="enter your age here"
          />
          {errors.age && <p className="error">{errors.age}</p>}
        </div>
        <div className="inputs">
          <label>enter your password</label>
          <input
            type="password"
            value={values.password}
            onChange={handleChange}
            name="password"
            className={errors.password ? "input-error" : ""}
            placeholder="enter your password here"
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div className="inputs">
          <label>enter your password again</label>
          <input
            type="password"
            value={values.confirmPassword}
            onChange={handleChange}
            name="confirmPassword"
            className={errors.confirmPassword ? "input-error" : ""}
            placeholder="enter your password here to confirm"
          />
          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
          )}
        </div>
        <button className="button" onClick={handleSubmit}>
          Save
        </button>
        <Link to="/portal" className="link">
          Go to Portal
        </Link>
      </form>
    </div>
  );
};

export default Home;
