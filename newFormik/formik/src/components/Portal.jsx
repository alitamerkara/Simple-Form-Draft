import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import PortalSchema from "../schema/PortalSchema";

const Portal = () => {
  const { errors, handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      username: "",
      university: "",
      checkbox: false,
    },
    validationSchema: PortalSchema,
  });
  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="inputs">
          <label>Please enter your username</label>
          <input
            name="username"
            value={values.username}
            onChange={handleChange}
            className={errors.username ? "input-error" : ""}
            placeholder="enter your username here"
          />
          {errors.username && <p className="error">{errors.username}</p>}
        </div>
        <div className="inputs">
          <label>Please choose your university</label>
          <select
            name="university"
            className={errors.university ? "input-error" : ""}
          >
            <option value="">Please enter an university</option>
            <option value="ybu">YBU</option>
            <option value="odtu">ODTU</option>
            <option value="ytu">YTU</option>
          </select>
          {errors.university && <p className="error">{errors.university}</p>}
        </div>
        <div className="checkbox">
          <input
            type="checkbox"
            className={errors.checkbox ? "input-error" : ""}
          />
          <span>I agree all the conditions.</span>
          {errors.checkbox && <p className="error">{errors.checkbox}</p>}
        </div>
        <Link to="/" className="link">
          Go to Main Form
        </Link>
        <button className="button" onClick={handleSubmit} type="submit">
          Save
        </button>
      </form>
    </div>
  );
};

export default Portal;
