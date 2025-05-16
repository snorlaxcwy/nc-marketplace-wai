import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

function Header({ setCurrentPage }) {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ justifyContent: "space-between", flexWrap: "wrap" }}>
        <Typography
          variant="h4"
          component="div"
          fontWeight={700}
          color="primary"
        >
          MarketPlace
        </Typography>
        <Box display="flex" alignItems="center" gap={2}>
          <Typography variant="body2">
            Give your stuff a second life!
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setCurrentPage("sell")}
          >
            SELL
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
