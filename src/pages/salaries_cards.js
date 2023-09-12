import { useEffect } from "react";
import { useGlobalContext } from "../context/context";
import Header from "../components/Header";
// import { useGetSalariesCardQuery, useGetSalariesQuery } from "../context/api";
// import { useDispatch, useSelector } from "react-redux";
import { getSalaries } from "../context/appContext";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import HeaderPage from "../components/HeaderPage";
import FlexSpaceBett from "../components/FlexSpaceBett";
import salarieImg from "../assets/salarie.svg";
import { Navigate } from "react-router-dom";
const SalariesCards = () => {
  const { salaries, fetchSalaries, user } = useGlobalContext();
  debugger;

  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width:1200px)");
  // const dispatch = useDispatch();
  // const fetchSalaries = () => {
  //   debugger;
  //   dispatch(getSalaries());
  // };
  useEffect(() => {
    fetchSalaries();
  }, []);

  // const { data: dataCards } = useGetSalariesCardQuery();
  // const dataSalar = useGetSalariesQuery().data;
  // const d = data;
  // const [data] = useGetSalariesQuery();
  // const dataSalar = useGetSalariesQuery().data;
  // const { fetchSalaries, salaries } = useGlobalContext();
  // const dataCards = useSelector((state) => state.global.users);

  return (
    <>
      {!user && <Navigate to="/login" replace />}
      <Box m="1.5rem 2.5rem">
        <HeaderPage title="Employes" subtitle="See your list of employes." />
        <Grid container spacing={2} sx={{ marginTop: "1.5rem" }}>
          {salaries.map((salarie) => {
            let startD = "",
              endD = "";
            if (salarie.SAL_START_DATE !== null) {
              startD = new Date(salarie.SAL_START_DATE);
            }
            if (salarie.SAL_END_DATE !== null) {
              endD = new Date(salarie.SAL_END_DATE);
            }
            return (
              <Grid item xs={12} md={4} lg={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardHeader
                    avatar={<Avatar alt="<NAME>" src={salarieImg} />}
                    title={`${salarie.SAL_PRENOM} / ${salarie.SAL_NOM}`}
                    subheader={`Job: ${salarie.JOB_LIB}`}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Adress : {salarie.SAL_ADR}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                      Country : {salarie.SAL_PAYS}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                      Start Date :{" "}
                      {startD !== "" && startD.toLocaleDateString("en-GB")}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                      End Date :{" "}
                      {endD !== "" && endD.toLocaleDateString("en-GB")}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                      Phone : {salarie.SAL_PHONE}
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
export default SalariesCards;
