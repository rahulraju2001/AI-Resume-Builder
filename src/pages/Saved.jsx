import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { FaTrash, FaSearch } from "react-icons/fa6";
import { deleteResumeAPI, getAllResumesAPI } from "../services/apiService";

function Saved() {
  const [allResumes, setAllResumes] = useState([]);
  const [searchKey,setSearchKey] = useState("")
  const [dummyAllResumes,setDummyAllResumes] = useState({})

  //console.log(allResumes);

  useEffect(() => {
    getAllResumes()
  }, []);


  const searchOutput = useMemo(()=>{
    setAllResumes(dummyAllResumes.filter(item=>item.job.tolowerCase().includes(searchKey.toLowerCase())))
  },[searchKey])

  const getAllResumes = async () => {
    const response = await getAllResumesAPI();
    if (response.status == 200) {
      setAllResumes(response.data);
      setDummyAllResumes(response.data)
    }
  };

  const removeResume = async (id) => {
    if (confirm("Are you sure you want to delete the resume?")) {
      const response = await deleteResumeAPI(id);
      if (response.status == 200) {
        getAllResumes();
      }
    }
  };



  return (
    <div className="my-5 container d-flex justify-content-center align-items-center flex-column">
      <h1>All Saved Resumes</h1>
      <p style={{textAlign:'justify'}} className="my-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos cupiditate nam impedit mollitia quis harum error inventore consequuntur et eius. Libero ducimus minima rerum dignissimos iste quam dolor velit sunt Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo officia numquam inventore tempore nesciunt, eum autem, ex similique vero esse doloribus, placeat neque quidem voluptatum aliquid. Suscipit sequi non repudiandae.</p>
      <div className="d-flex justify-content-center align-items-center w-50">
        <input onChange={(e)=>setSearchKey(e.target.value)} type="text" placeholder="Search Candidate by their job role" className="form-control"/>
        <FaSearch style={{marginLeft:'-30px'}}/>
      </div>
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
                  <button onClick={()=>removeResume(resume?.id)} className="btn text-danger">
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
