import React from "react";

// import { DeleteIcon } from "@mui/icons-material";
import {Delete as DeleteIcon} from '@mui/icons-material'

function Home(props) {
  return (
    <>
      <button startIcon={<DeleteIcon />}>View</button>
    </>
  );
}

export default Home;
