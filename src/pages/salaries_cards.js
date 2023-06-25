import { useEffect } from "react";
import { useGlobalContext } from "../context/context";
import Header from "../components/Header";
const SalariesCards = () => {
  const { fetchSalaries, salaries } = useGlobalContext();
  useEffect(() => {
    fetchSalaries();
  }, []);
  return (
    <>
      <Header />
      <div class="row  mt-2">
        {salaries.map((job) => {
          debugger;
          let startD = "",
            endD = "";
          if (job.SAL_START_DATE !== null) {
            startD = new Date(job.SAL_START_DATE);
          }
          if (job.SAL_END_DATE !== null) {
            endD = new Date(job.SAL_END_DATE);
          }
          debugger;
          return (
            <div class="col-12 col-sm-12 col-md-6 col-lg-4 ">
              <div class="shadow card mb-3" style={{ "max-width": "540px;" }}>
                <div class="card-header">
                  <div className="row">
                    <div class="col-md-4">
                      <img
                        src="../salarie.svg"
                        class="img-fluid rounded-start"
                        alt="Employe"
                        style={{ width: "50px" }}
                      ></img>
                    </div>
                    <div className="col-md-8 my-auto">
                      {job.SAL_NOM} / {job.SAL_PRENOM}
                    </div>
                  </div>
                </div>
                <div class="row g-0">
                  <div class="col">
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">Job :{job.JOB_LIB}</li>
                      <li class="list-group-item">Address :{job.SAL_ADR}</li>
                      <li class="list-group-item">Country :{job.SAL_PAYS}</li>
                      <li class="list-group-item">
                        Start date :
                        {startD !== "" && startD.toLocaleDateString("en-GB")}
                      </li>
                      <li class="list-group-item">
                        End date :
                        {endD !== "" && endD.toLocaleDateString("en-GB")}
                      </li>
                      <li class="list-group-item">Phone :{job.SAL_PHONE}</li>
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
export default SalariesCards;
