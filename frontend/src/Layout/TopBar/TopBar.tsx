import Link from "next/link";
import {
  Container,
  IconButton,
  Toolbar,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NavLinks from "../NavLinks";
import { Page } from "../../types/strapi/Shared";

interface TopBarProps {
  handleClickOpen: () => void;
  handleClose: () => void;
  pages: Page[];
  colorInvert: boolean;
}
const TopBar = ({
  handleClickOpen,
  handleClose,
  pages,
  colorInvert,
}: TopBarProps) => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up("sm"), {
    defaultMatches: true,
  });

  return (
    <>
      <Container maxWidth="lg" component="nav">
        <Toolbar
          sx={{
            height: 65,
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
                  sx={{
                    width: isSm ? 280 : 240,
                    filter: !colorInvert
                      ? "none"
                      : "invert(100%) sepia(100%) saturate(0%) hue-rotate(152deg) brightness(160%) contrast(103%)",
                  }}
                />
              </Box>
            </Link>
          </Box>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <NavLinks
              pages={pages}
              handleClose={handleClose}
              colorInvert={colorInvert}
            />
          </Box>

          {/*open nav menu dialog on small to medium screensizes */}

          <IconButton
            aria-label="menu"
            onClick={handleClickOpen}
            sx={{
              display: { xs: "inline-flex", md: "none" },
              color: !colorInvert ? theme.palette.primary.main : "#f9f9f9",
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </>
  );
};

export default TopBar;
