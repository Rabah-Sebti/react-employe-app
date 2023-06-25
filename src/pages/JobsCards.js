import { useEffect } from "react";
import { useGlobalContext } from "../context/context";
import Header from "../components/Header";
const JobsCards = () => {
  const { fetchJobs, jobs } = useGlobalContext();
  useEffect(() => {
    fetchJobs();
  }, []);
  return (
    <>
      <Header />
      {/* <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-2"> */}
      <div class="row  mt-2">
        {jobs.map((job) => {
          debugger;
          let startD = "",
            endD = "";
          if (job.JOB_START_DATE !== null) {
            startD = new Date(job.JOB_START_DATE);
          }
          if (job.JOB_END_DATE !== null) {
            endD = new Date(job.JOB_END_DATE);
          }
          return (
            <div class="col-12 col-sm-12 col-md-6 col-lg-4 ">
              <div class="shadow card mb-3" style={{ "max-width": "540px;" }}>
                <div class="card-header">
                  <div className="row">
                    <div class="col-md-4">
                      <img
                        src="../job.svg"
                        class="img-fluid rounded-start"
                        alt="Employe"
                        style={{ width: "50px" }}
                      ></img>
                    </div>
                    <div className="col-md-8 my-auto">
                      {job.JOB_CODE} / {job.JOB_LIB}
                    </div>
                  </div>
                </div>
                <div class="row g-0">
                  <div class="col">
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">
                        Start date :
                        {startD !== "" && startD.toLocaleDateString("en-GB")}
                      </li>
                      <li class="list-group-item">
                        End date :
                        {endD !== "" && endD.toLocaleDateString("en-GB")}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default JobsCards;
