import { Box } from "@mui/material";

export default function Dropdown() {
  return (
    <Box sx={{ display: { xs: "none", sm: "block" } }}>
      <select >
        <option value="uz">Uz</option>
        <option value="us">Us</option>
      </select>
    </Box>
  );
}
