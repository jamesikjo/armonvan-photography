import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme, Button, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Page } from "../../types/strapi/Shared";

interface NavLinksProps {
  handleClose: () => void;
  pages: Page[];
}

const NavLinks = ({ pages, handleClose }: NavLinksProps) => {
  const router = useRouter();
  const theme = useTheme();

  return (
    <>
      {pages.map(({ title, path }, i) => (
        <Link href={path} passHref key={i}>
          <Button
            component="a"
            color="primary"
            disableRipple
            onClick={handleClose}
            sx={{
              ...(router.pathname === path && { fontWeight: "bold" }),
              "&:hover": {
                backgroundColor: "transparent",
                fontWeight: "bold",
              },
            }}
          >
            {title}
          </Button>
        </Link>
      ))}
      <IconButton
        color="secondary"
        aria-label="instagram"
        href="https://www.instagram.com/lurking.glass/"
        target="_blank"
        onClick={handleClose}
        disableRipple
        sx={{
          "&:hover": {
            color: theme.palette.primary.main,
            backgroundColor: "transparent",
          },
        }}
      >
        <InstagramIcon fontSize="small" />
      </IconButton>
    </>
  );
};

export default NavLinks;
