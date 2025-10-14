import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  InputBase,
  Button,
  Paper,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  useMediaQuery,
} from "@mui/material";
import { Search, Public, Person, Menu } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const menuItems = ["Products", "Community", "Markets", "Brokers", "More"];

  return (
    <>
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        sx={{
          borderBottom: "1px solid #ecebebff",
          height: "64px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              TV
            </Typography>

            {/* Search bar (Hidden on small screens) */}
            {!isMobile && (
              <Paper
                component="form"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: 220,
                  height: 36,
                  borderRadius: 5,
                  bgcolor: "#ffffffff",
                  px: 1.5,
                }}
              >
                <Search sx={{ color: "gray", fontSize: 20 }} />
                <InputBase
                  placeholder="Search !!"
                  sx={{ ml: 1, fontSize: 14, flex: 1 }}
                />
              </Paper>
            )}
          </Box>

          {/* CENTER (Hidden on mobile) */}
          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
              {menuItems.map((item) => (
                <Typography
                  key={item}
                  sx={{
                    fontSize: 15,
                    color: item === "Products" ? "#1a73e8" : "black",
                    cursor: "pointer",
                    fontWeight: 500,
                    "&:hover": { color: "#1a73e8" },
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          )}

          {/* RIGHT */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            {/* Language + Profile hidden on mobile */}
            {!isMobile && (
              <>
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                  <Public sx={{ fontSize: 22 }} />
                  <Typography sx={{ fontSize: 15 }}>EN</Typography>
                </Box>

                <IconButton>
                  <Person />
                </IconButton>
              </>
            )}

            {/* Gradient button */}
            {!isMobile && (
              <Button
                variant="contained"
                sx={{
                  background:
                    "linear-gradient(90deg, #007bff 0%, #9b1dff 100%)",
                  borderRadius: "12px",
                  textTransform: "none",
                  fontWeight: "bold",
                  fontSize: 15,
                  px: 2.5,
                  py: 0.7,
                }}
              >
                Get started
              </Button>
            )}
            {isMobile && (
              <IconButton onClick={() => setDrawerOpen(true)}>
                <Menu />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile Menu */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box
          sx={{
            width: 250,
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <List>
            {menuItems.map((text) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>

          <Divider />

          <Box sx={{ p: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
              <Public />
              <Typography>EN</Typography>
            </Box>
            <Button
              fullWidth
              variant="contained"
              sx={{
                background:
                  "linear-gradient(90deg, #007bff 0%, #9b1dff 100%)",
                borderRadius: "10px",
                textTransform: "none",
                fontWeight: "bold",
              }}
            >
              Get started
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
