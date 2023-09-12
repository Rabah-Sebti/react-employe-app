import { Box, useTheme } from "@mui/material";
import React, { useEffect } from "react";
import Header from "../components/Header";
// import { useGetGeographyQuery } from "../redux/api";
import { ResponsiveChoropleth } from "@nivo/geo";
import { geographyData } from "../context/geographyData";
import { useGlobalContext } from "../context/context";
import HeaderPage from "../components/HeaderPage";
import { Navigate } from "react-router-dom";
const SalariesGeography = () => {
  debugger;
  const theme = useTheme();
  const { salsGeo, fetchSalariesGeo, user } = useGlobalContext();
  useEffect(() => {
    fetchSalariesGeo();
  }, []);
  return (
    <Box m="1.5rem 2.5rem">
      {!user && <Navigate to="/login" replace />}

      <HeaderPage title="Geography" subtitle="See your employees Geography ." />

      <Box
        mt="40px"
        height="75vh"
        border={`1px solid ${theme.palette.secondary[200]}`}
        borderRadius="4px"
      >
        {salsGeo ? (
          <ResponsiveChoropleth
            data={salsGeo}
            theme={{
              axis: {
                domain: {
                  line: {
                    stroke: theme.palette.secondary[200],
                  },
                },
                legend: {
                  text: {
                    fill: theme.palette.secondary[200],
                  },
                },
                ticks: {
                  line: {
                    stroke: theme.palette.secondary[200],
                    strokeWidth: 1,
                  },
                  text: {
                    fill: theme.palette.secondary[200],
                  },
                },
              },
              legends: {
                text: {
                  fill: theme.palette.secondary[200],
                },
              },
              tooltip: {
                container: {
                  color: theme.palette.primary.main,
                },
              },
            }}
            features={geographyData.features}
            margin={{ top: 0, right: 0, bottom: 0, left: -50 }}
            domain={[0, 60]}
            unknownColor="#d4a367"
            label="properties.name"
            valueFormat=".2s"
            projectionScale={150}
            projectionTranslation={[0.45, 0.6]}
            projectionRotation={[0, 0, 0]}
            borderWidth={1.4}
            borderColor="black"
            legends={[
              {
                anchor: "bottom-right",
                direction: "column",
                justify: true,
                translateX: 0,
                translateY: -50,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: "left-to-right",
                itemTextColor: theme.palette.secondary[400],
                itemOpacity: 1,
                symbolSize: 15,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: theme.palette.background.main,
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]}
          />
        ) : (
          <>Loading...</>
        )}
      </Box>
    </Box>
  );
};

export default SalariesGeography;
