import React, { FC } from "react";
import Navbar from "../../components/common/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container/Container";

const BaseLayout: FC = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default BaseLayout;
