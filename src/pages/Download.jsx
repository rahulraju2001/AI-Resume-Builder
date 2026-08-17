import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { Modal } from "@mui/material";
import Box from "@mui/material";
import Typography from "@mui/material";
import { getAlldownloadAPI } from "../services/apiService";
import { resume } from "react-dom/server";
import { color } from "html2canvas/dist/types/css/types/color";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  maxHeight: "80vh",
  overflowY: "auto",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Download() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [downloadList, setDownloadList] = useState([]);
  //used to store all job roles 
  const [label, setLabel] = useState([]);
  //used to store count of each job roles
  const [value, setValue] = useState([]);
  const colorPallete = [
    "#2596be",
    "#edf3ee",
    "#5a2b19",
    "#bbeBea",
    "#f7b769",
    "#043f77",
  ];
  const backgroundColor = label.map(
    (value, index) => colorPallete[index % colorPallete.length],
  );

  const data = {
    labels: label,
    datasets: [
      {
        label:'Download Count',
        data: value,
        backgroundColor,
      },
    ],
  };

  useEffect(() => {
    getAlldownloads();
  }, []);

  const getAlldownloads = async () => {
    const result = await getAlldownloadAPI();
    setDownloadList(result.data);
    const output = {}
    result.data.forEach(item=>{
      const currentJob = item.jobRole
      if(currentCount in output){
        output[currentJob] += 1
      }else{
        output[currentJob] = 1
      }
    })
    setLabel(Object.keys(output))
    setValue(Object.values(output))
  };

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center">
        <h2>Downloaded Resume History</h2>
        <button onClick={handleOpen} className="btn">
          View in Chart
        </button>
      </div>
      {downloadList.length > 0 && (
        <p className="my-3">
          Total Downloaded resume from our site is {downloadList.length}
        </p>
      )}
      <div className="row my-5">
        {/* duplicate according to download resume count */}
        {downloadList?.length > 0 ? (
          downloadList?.map((resume) => (
            <div key={resume?.id} className="col-lg-4 mb-3">
              <div style={{ height: "400px" }} className="shadow p-3 rounded">
                <h6>Review at: ${resume?.timestamp}</h6>
                <div className="mt-3 text-center">
                  <Link to={`/resumes/${resume?.resumeId}`}>
                    <img
                      className="w-100"
                      height={"300px"}
                      src="{resume?.resumeImg}"
                      alt="download cv"
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center">
            User not downloaded any resume yet!!!
          </div>
        )}
      </div>
      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{
              backgroundColor: "#5c494c",
              width: "100%",
              padding: "10px",
              color: "white",
            }}
          >
            CV download count by Job Role
          </Typography>
          <Box id="modal-modal-desciption" sx={{ mt: 2 }}>
            <div className="d-flex justify-content-center align-items-center my-75">
              <Pie data={data}/>
            </div>
            <p style={{ textAlign: "justify" }}>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium incidunt, quisquam totam voluptas laborum ut molestias
              eligendi qui quas dignissimos reprehenderit eaque recusandae,
              quasi nobis. Maxime rem quas natus adipisci!Lorem Lorem ipsum
              dolor sit amet consectetur, adipisicing elit. Ipsam quia, rerum,
              saepe maiores ad adipisci molestiae numquam magni incidunt quis,
              nobis obcaecati ipsa amet enim provident totam. Minima, quasi
              asperiores.
            </p>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default Download;
