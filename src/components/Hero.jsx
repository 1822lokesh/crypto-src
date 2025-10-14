import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";

export default function Hero() {
  const [screen, setScreen] = React.useState("");
  const [universe, setUniverse] = React.useState("");

  const handleScreenChange = (event) => {
    setScreen(event.target.value);
  };

  const handleUniverseChange = (event) => {
    setUniverse(event.target.value);
  };

  return (
    <Box
      display="flex"
      flexDirection="column" 
      alignItems="flex-start" 
      sx={{ m: 2 }}
    >
      {/* Universe Dropdown */}
      <FormControl sx={{ mb: 2, minWidth: 180 }}>
        <Select
          value={universe}
          onChange={handleUniverseChange}
          displayEmpty
          inputProps={{ "aria-label": "Universe Selector" }}
        >
          <MenuItem value="">
            <em>Select Universe</em>
          </MenuItem>
          <MenuItem value={1}>Crypto Universe</MenuItem>
          <MenuItem value={2}>ETF Universe</MenuItem>
          <MenuItem value={3}>Bond Universe</MenuItem>
        </Select>
      </FormControl>

      {/* Screener Dropdown (below) */}
      <FormControl sx={{ minWidth: 250 }}>
        <Select
          value={screen}
          onChange={handleScreenChange}
          displayEmpty
          inputProps={{ "aria-label": "Screener Selector" }}
        >
          <MenuItem value="">
            <em>Select Screener</em>
          </MenuItem>
          <MenuItem value={1}>Stock Screener</MenuItem>
          <MenuItem value={2}>ETF Screener</MenuItem>
          <MenuItem value={3}>Bond Screener</MenuItem>
          <MenuItem value={4}>Crypto Coins Screener</MenuItem>
          <MenuItem value={5}>CEX Screener</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
