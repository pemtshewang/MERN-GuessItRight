import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import ThemeToggle from "./Switch";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link as MuiLink } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Stack, Divider, Typography } from "@mui/material";
import PsychologyAltSharpIcon from "@mui/icons-material/PsychologyAltSharp";

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "inherit" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* for mobile layout */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
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
            ></Menu>
          </Box>
          {/* end for mobile layout */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              flexDirection: "row-reverse",
            }}
          >
            <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}
              sx={{
                paddingInlineEnd: 5,
                paddingBlockStart: 0.5
              }}
            >
              <MuiLink
                href={"https://www.github.com"}
                sx={{ color: "white !important", fontSize: 35 }}
              >
                <GitHubIcon />
              </MuiLink>
              <MuiLink
                href={"https://www.github.com"}
                sx={{ color: "white !important", fontSize: 35 }}
              >
                <LinkedInIcon />
              </MuiLink>
            </Stack>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                flexGrow: 2,
                flexBasis: "55%",
              }}
            >
              <PsychologyAltSharpIcon sx={{fontSize:64}}/>
              <Typography variant="b" component="b" sx={{marginTop:"8px"}}>
                Better
                <br/>
                Brain
              </Typography>
            </Box>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <ThemeToggle />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
