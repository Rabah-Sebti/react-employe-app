import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { Modal, Button, Image } from "antd";
import Draggable from "react-draggable";
import { useGlobalContext } from "../context/context";
import GridSal from "./grid_salarie";
import CloseIcon from "@mui/icons-material/Close";
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
          <div className="handle">
            <div class="card text-center">
              <div class="card-header">
                {/* <ul class="nav nav-pills card-header-pills">
                  <li class="nav-item "> */}
                <div className="flex-1">
                  <span>Salarie</span>
                  <span className="nav-link ">
                    <i onClick={this.props.closeModal} className="btn-cloe">
                      <CloseIcon />
                    </i>
                  </span>
                </div>
              </div>
              <div class="card-body ">
                <GridSal
                  columns={this.props.columns}
                  jobs={this.props.jobs}
                  fillChamp={this.props.fillChamp}
                />
              </div>
            </div>
          </div>
        </Draggable>
      </div>
    );
  }
}

export default ModalDragSal;
