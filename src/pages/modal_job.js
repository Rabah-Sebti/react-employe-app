import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { Modal, Button, Image } from "antd";
import Draggable from "react-draggable";
import { useGlobalContext } from "../context/context";
import GridJob from "./grid_job";
import CloseIcon from "@mui/icons-material/Close";
import RefreshIcon from "@mui/icons-material/Refresh";
// import { useGlobalContext } from "../context/context";

import {
  Box,
  Card,
  CardActions,
  CardContent,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import FlexSpaceBett from "../components/FlexSpaceBett";
class ModalDragJob extends React.Component {
  render() {
    // const { fetchSalaries } = useGlobalContext();
    return (
      <div>
        <Draggable
          axis="both"
          handle=".handle"
          defaultPosition={{ x: 500, y: -250 }}
          position={null}
          scale={1}
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}
        >
          <Card
            className="handle"
            // sx={{ backgroundColor: "yellow" }}
          >
            <CardContent>
              <FlexSpaceBett>
                <Typography
                // sx={{
                //   color: "black",
                // }}
                >
                  Job
                </Typography>
                <IconButton
                  sx={{ color: "blue" }}
                  onClick={this.props.closeModal}
                >
                  <CloseIcon />
                </IconButton>
              </FlexSpaceBett>
              <Divider />
              <Box>
                <GridJob
                  columns={this.props.columns}
                  jobs={this.props.jobs}
                  fillChamp={this.props.fillChamp}
                />
              </Box>
            </CardContent>
            <CardActions>
              <IconButton onClick={this.props.fetchJobs}>
                <RefreshIcon
                  sx={{
                    color: "blue",
                  }}
                />
              </IconButton>
            </CardActions>
          </Card>
        </Draggable>
      </div>
    );
  }
}

export default ModalDragJob;
