import CoPresentIcon from "@mui/icons-material/CoPresent";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import FlexSpaceBett from "./FlexSpaceBett";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Update";
import CreateIcon from "@mui/icons-material/Create";
import LoopIcon from "@mui/icons-material/Loop";
const HeaderPage = (props) => {
  const theme = useTheme();
  return (
    <Box sx={{ backgroundColor: theme.palette.background.default }}>
      <FlexSpaceBett>
        <Box>
          <IconButton disabled={true}>
            <CoPresentIcon
              sx={{
                color: theme.palette.primary[100],
              }}
            />
            <Typography
              sx={{
                color: theme.palette.primary[100],
              }}
            >
              {props.name}
            </Typography>
          </IconButton>
        </Box>
        <Box>
          <Button
            sx={{ fontSize: "50%", marginRight: "2px" }}
            variant="contained"
            startIcon={<CreateIcon />}
            onClick={props.submitCreateJob}
          >
            Create
          </Button>
          <Button
            sx={{ fontSize: "50%", marginRight: "2px" }}
            variant="contained"
            startIcon={<UpdateIcon />}
            onClick={props.submitUpdateJob}
          >
            Update
          </Button>
          <Button
            sx={{ fontSize: "50%", marginRight: "2px" }}
            variant="contained"
            startIcon={<DeleteIcon />}
            onClick={props.submitDeleteJob}
          >
            Delete
          </Button>
          <Button
            sx={{ fontSize: "50%", marginRight: "2px" }}
            variant="contained"
            startIcon={<LoopIcon />}
            onClick={props.chargerJob}
          >
            Charger
          </Button>
        </Box>
      </FlexSpaceBett>
    </Box>
  );
};
export default HeaderPage;
