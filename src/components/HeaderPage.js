import CoPresentIcon from "@mui/icons-material/CoPresent";
const HeaderPage = (props) => {
  return (
    <>
      <nav class="navbar app-sous-header">
        <div class="container-fluid">
          <div class="navbar-brand ">
            <i className="app-ic me-2">
              <CoPresentIcon />
            </i>
            <span className="app-ic">{props.name}</span>
          </div>
          <div class="d-flex">
            <button
              class="btn btn-danger"
              type="submit"
              onClick={props.submitCreateJob}
            >
              Créer
            </button>
            <button
              class="btn btn-outline-success ms-1 "
              type="submit"
              onClick={props.submitUpdateJob}
            >
              Update
            </button>
            <button
              className="btn btn-danger ms-1"
              onClick={props.submitDeleteJob}
              type="submit"
            >
              Delete
            </button>
            <button
              class="btn btn-outline-success ms-1"
              onClick={props.chargerJob}
              type="submit"
            >
              charger
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
export default HeaderPage;
