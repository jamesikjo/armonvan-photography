import { Typography, Box } from "@mui/material";
import { Work } from "../../../types/strapi/Work";

type StatementProps = Pick<Work["attributes"], "title" | "subtitle">;

const Statement = ({ title, subtitle }: StatementProps) => {
  return (
    <Box maxWidth="lg" margin="auto">
      <Typography
        variant="h4"
        component="h2"
        color="primary"
        fontWeight="bold"
        mb={2}
      >
        Gallery
      </Typography>
      <Typography variant="subtitle1" color="primary" mb={4}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Statement;
