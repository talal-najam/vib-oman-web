import { Box, Divider } from "@material-ui/core";

export const InfoDivider = ({ padding = 2 }) => {
  return (
    <Box py={padding}>
      <Divider />
    </Box>
  );
};
