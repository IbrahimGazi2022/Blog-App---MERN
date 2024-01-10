import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  Typography,
  Tabs,
  Tab,
} from "@mui/material";
import { useState } from "react";

const Header = () => {
  const [value, setValue] = useState();

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h4">My Blog App</Typography>
          <Box display={"flex"} marginRight={"auto"} marginLeft={"auto"}>
            <Tabs
              textColor="inherit"
              value={value}
              onChange={(e, val) => setValue(val)}
            >
              <Tab label="Blogs" LinkComponent={Link} to="/blogs" />
              <Tab label="My Blogs" LinkComponent={Link} to="/my-blogs" />
            </Tabs>
          </Box>
          <Box display={"flex"} marginLeft={"auto"}>
            <Button
              sx={{ margin: 1, color: "white" }}
              LinkComponent={Link}
              to="/login"
            >
              Login
            </Button>
            <Button
              sx={{ margin: 1, color: "white" }}
              LinkComponent={Link}
              to="/register"
            >
              Register
            </Button>
            <Button
              sx={{ margin: 1, color: "white" }}
              LinkComponent={Link}
              to="/logout"
            >
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
