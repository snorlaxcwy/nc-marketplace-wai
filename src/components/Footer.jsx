import { Box, Typography, Container, Link } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 8,
        py: 4,
        bgcolor: "#ffffff",
        borderTop: "1px solid #ddd",
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} NC MarketPlace. All rights reserved.
        </Typography>
        <Box mt={1}>
          <Link href="#" color="inherit" underline="hover" sx={{ mx: 1 }}>
            About
          </Link>
          <Link href="#" color="inherit" underline="hover" sx={{ mx: 1 }}>
            Contact Us
          </Link>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
