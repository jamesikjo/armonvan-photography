import { Typography, Box } from "@mui/material";
import { Work } from "../../../types/strapi/Work";

type StatementProps = Pick<Work["attributes"], "title" | "subtitle">;

const Statement = ({ title, subtitle }: StatementProps) => {
  return (
    <Box maxWidth="sm" margin="auto">
      <Typography
        variant="h5"
        component="h2"
        color="primary"
        fontWeight="bold"
        align="center"
        mb={1.25}
        sx={{ letterSpacing: "0.15rem" }}
      >
        {title}
      </Typography>
      <Typography variant="subtitle1" color="secondary" align="center" mb={4}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Statement;
