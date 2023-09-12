import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { Modal, Button, Image } from "antd";
import Draggable from "react-draggable";
import { useGlobalContext } from "../context/context";
import GridSal from "./grid_salarie";
import CloseIcon from "@mui/icons-material/Close";
import RefreshIcon from "@mui/icons-material/Refresh";
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
class ModalDragSal extends React.Component {
  render() {
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
          <Card className="handle">
            <CardContent>
              <FlexSpaceBett>
                <Typography>Salarie</Typography>
                <IconButton
                  sx={{ color: "blue" }}
                  onClick={this.props.closeModal}
                >
                  <CloseIcon />
                </IconButton>
              </FlexSpaceBett>
              <Divider />
              <Box>
                <GridSal
                  columns={this.props.columns}
                  jobs={this.props.jobs}
                  fillChamp={this.props.fillChamp}
                />
              </Box>
            </CardContent>
            <CardActions>
              <IconButton onClick={this.props.fetchSalaries}>
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

export default ModalDragSal;
