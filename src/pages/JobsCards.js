import { useEffect } from "react";
import { useGlobalContext } from "../context/context";
import Header from "../components/Header";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import HeaderPage from "../components/HeaderPage";
import jobImg from "../assets/job.svg";
import { Navigate } from "react-router-dom";

// import { useGetJobsQuery, useGetSalariesCardQuery } from "../context/api";
const JobsCards = () => {
  debugger;
  // const { data, isLoading } = useGetJobsQuery();
  // const d = data;
  const { fetchJobs, jobs, user } = useGlobalContext();
  useEffect(() => {
    fetchJobs();
  }, []);
  return (
    <>
      {!user && <Navigate to="/login" replace />}

      <Box m="1.5rem 2.5rem">
        <HeaderPage title="Employes" subtitle="See your list of employes." />
        <Grid container spacing={2} sx={{ marginTop: "1.5rem" }}>
          {jobs.map((job) => {
            let startD = "",
              endD = "";
            if (job.JOB_START_DATE !== null) {
              startD = new Date(job.JOB_START_DATE);
            }
            if (job.JOB_END_DATE !== null) {
              endD = new Date(job.JOB_END_DATE);
            }
            return (
              <Grid item xs={12} md={4} lg={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardHeader
                    avatar={<Avatar alt="<NAME>" src={jobImg} />}
                    title={`${job.JOB_CODE} / ${job.JOB_LIB}`}
                    // subheader={`Job: ${salarie.JOB_LIB}`}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Start Date :{" "}
                      {startD !== "" && startD.toLocaleDateString("en-GB")}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                      End Date :{" "}
                      {endD !== "" && endD.toLocaleDateString("en-GB")}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};
export default JobsCards;
