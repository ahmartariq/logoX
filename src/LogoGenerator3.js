import { React, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Grid,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "./images/logo.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Links from "./Links";
import NavLinks from "./navLinks";
import Art from "./images/art.png";
import Logo1 from "./images/logo1.jpg";
import history from "./history";
import { getAuth, signOut } from "firebase/auth";

const theme = createTheme({
  palette: {
    primary: {
      main: "#D48277",
    },
    secondary: {
      main: "#FFAC7D",
    },
  },
});

const menuTheme = createTheme({
  components: {
    MuiMenu: {
      styleOverrides: {
        list: {
          backgroundColor: "#D48277",
          color: "#FFFFFF",
        },
      },
    },
  },
});


const nNav = (val) => {
  return <Links key={val.key} tag={val.tag} pathh={val.pathh} />;
};

export default function LogoGenerator3() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar>
            <img src={Logo} alt="logo" width={"7%"} />
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon style={{ color: "white" }} />
              </IconButton>
              <ThemeProvider theme={menuTheme}>
                <Menu
                  backgroundColor
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {NavLinks.map(nNav)}
                </Menu>
              </ThemeProvider>
            </Box>
            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
              style={{ marginLeft: "100px", color: "white" }}
            >
              {NavLinks.map(nNav)}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <AccountCircleIcon
                    style={{ color: "white" }}
                    sx={{ fontSize: 35 }}
                  />
                </IconButton>
              </Tooltip>
              <ThemeProvider theme={menuTheme}>
                <Menu
                  sx={{ mt: "35px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem
                    key={"Profile"}
                    onClick={() => {
                      history.push("./home");
                    }}
                  >
                    <Typography textAlign="center">Profile</Typography>
                  </MenuItem>
                  <MenuItem
                    key={"Account"}
                    onClick={() => {
                      history.push("./home");
                    }}
                  >
                    <Typography textAlign="center">Account</Typography>
                  </MenuItem>
                  <MenuItem key={"Log out"} onClick={() => {}}>
                    <Typography
                      textAlign="center"
                      onClick={() => signOut(getAuth())}
                    >
                      Log out
                    </Typography>
                  </MenuItem>
                </Menu>
              </ThemeProvider>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={0}>
          <Grid
            lg={12}
            md={12}
            sm={12}
            xs={12}
            container
            marginTop={"100px"}
            justifyContent={"center"}
            alignItems={"center"}
            direction={"column"}
          >
            <h1>Logo Generator</h1>
            <p>Create stunning logos in one click</p>
            <br />
            <h2>Here is your logo !</h2>
            <img src={Logo1} alt="selected logo" width={"50%"} />
            <input
              type={"button"}
              value="Save"
              className="btn"
              style={{ width: "40% ", marginTop: "50px" }}
              onClick={() => {
                history.push("./home");
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
