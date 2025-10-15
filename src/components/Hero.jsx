import * as React from "react";
import {
  Box,
  Typography,
  FormControl,
  Select,
  MenuItem,
  Tabs,
  Tab,
  IconButton,
} from "@mui/material";
import { Settings, KeyboardArrowUp, Refresh } from "@mui/icons-material";

export default function Hero() {
  const [screen, setScreen] = React.useState("");
  const [universe, setUniverse] = React.useState("");
  const [tab, setTab] = React.useState(0);

  const handleScreenChange = (event) => setScreen(event.target.value);
  const handleUniverseChange = (event) => setUniverse(event.target.value);
  const handleTabChange = (event, newValue) => setTab(newValue);

  return (
    <Box sx={{ p: 3 }}>
      {/* Title */}
      {/* <Typography variant="h5" fontWeight="bold" mb={2}>
        Crypto universe
      </Typography> */}

      {/* Universe + Screener Dropdowns */}
      <Box display="flex" flexDirection="column" alignItems="flex-start" mb={3}>
        {/* Universe Dropdown */}
        <FormControl sx={{ mb: 2, minWidth: 200 }}>
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

        {/* Screener Dropdown (below Universe) */}
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

      {/* Filter Row */}
      <Box display="flex" flexWrap="wrap" gap={1.5} alignItems="center" mb={3}>
        {[
          "Watchlist",
          "Rank",
          "Market cap",
          "FD market cap",
          "Vol / Market Cap",
          "Addr with balance",
          "Volume",
          "Vol Change %",
          "Tx vol in USD",
        ].map((label, index) => (
          <FormControl key={index} size="small" sx={{ minWidth: 160 }}>
            <Select displayEmpty value="">
              <MenuItem value="">
                <em>{label}</em>
              </MenuItem>
            </Select>
          </FormControl>
        ))}

        <IconButton>
          <Settings />
        </IconButton>
        <IconButton>
          <KeyboardArrowUp />
        </IconButton>
      </Box>

      {/* Tabs Section */}
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Tabs
          value={tab}
          onChange={handleTabChange}
          textColor="inherit"
          indicatorColor="primary"
          sx={{
            "& .MuiTab-root": { textTransform: "none", fontWeight: 500 },
          }}
        >
          {[
            "Overview",
            "Performance",
            "Valuation",
            "Addresses",
            "Transactions",
            "Sentiment",
            "Technicals",
          ].map((label) => (
            <Tab key={label} label={label} />
          ))}
        </Tabs>

        <IconButton>
          <Refresh />
        </IconButton>
      </Box>
    </Box>
  );
}
