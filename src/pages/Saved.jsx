import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa6";
import { getAllResumesAPI } from "../services/apiService";

function Saved() {
  const [allResumes, setAllResumes] = useState([]);

  console.log(allResumes);

  const getAllResumes = async () => {
    const response = await getAllResumesAPI();
    if (response.status == 200) {
      setAllResumes(response.data);
    }
  };

  useEffect(() => {
    getAllResumes();
  }, []);

  return (
    <div className="my-5 container d-flex justify-content-center align-items-center flex-column">
      <h1>All Saved Resumes</h1>
      <table className="my-5 table table-hover table-stripped">
        <thead>
          <tr className="table-dark">
            <th>#</th>
            <th>Resume</th>
            <th>Job Role</th>
            <th>...</th>
          </tr>
        </thead>
        <tbody>
          {allResumes?.length > 0 ? (
            allResumes?.map((resume, index) => (
              <tr key={resume?.id}>
                <td>{index + 1}</td>
                <td>
                  <Link to={`/resumes/${resume?.id}`}>
                    {" "}
                    {resume?.fullName.toUpperCase()}{" "}
                  </Link>
                </td>
                <td>{resume?.job.toUpperCase()}</td>
                <td>
                  <button className="btn text-danger">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <p className="text-center">No Resumes added yet!!!</p>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Saved;
