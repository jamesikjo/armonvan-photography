import Link from "next/link";
import { Container, IconButton, Toolbar, Box, Divider } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DialogNav from "./TopBar";
import NavLinks from "../NavLinks";

const TopBar = ({ open, handleClickOpen, handleClose, pages }) => {
  return (
    <>
      <Container maxWidth="lg" component="nav">
        <Toolbar
          sx={{
            height: 75,
            lineHeight: 0,
          }}
          disableGutters
        >
          <Box display="flex" sx={{ flexGrow: 1 }}>
            <Link href="/" passHref>
              <Box component="a" title="Armon Van Photography">
                <Box
                  component="img"
                  src="/images/main-logo.png"
                  sx={{ width: 280 }}
                />
              </Box>
            </Link>
          </Box>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <NavLinks pages={pages} handleClose={handleClose} />
          </Box>

          {/*open nav menu dialog on small to medium screensizes */}

          <IconButton
            aria-label="menu"
            onClick={handleClickOpen}
            sx={{ display: { xs: "inline-flex", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <Divider sx={{ mb: 3 }} />
      </Container>
    </>
  );
};

export default TopBar;
