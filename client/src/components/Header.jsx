import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authAction } from "../redux/store";

import {
  AppBar,
  Box,
  Toolbar,
  Button,
  Typography,
  Tabs,
  Tab,
} from "@mui/material";

const Header = () => {
  // global state
  const isLogin = useSelector((state) => state.isLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // state
  const [value, setValue] = useState();

  // Log out handler function
  const handleLogout = () => {
    try {
      dispatch(authAction.logout());
      alert("Logout Succefully");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h4">My Blog App</Typography>
          {isLogin && (
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
          )}
          <Box display={"flex"} marginLeft={"auto"}>
            {!isLogin && (
              <>
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
              </>
            )}
            {isLogin && (
              <Button
                onClick={handleLogout}
                sx={{ margin: 1, color: "white" }}
                to="/logout"
              >
                Logout
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
