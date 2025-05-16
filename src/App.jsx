import { Routes, Route, useNavigate, Link } from "react-router-dom";
import { Container, AppBar, Toolbar, Typography, Button } from "@mui/material";
import CategoryPage from "./pages/CategoryPage";
import Sell from "./pages/Sell";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

function App() {
  const nav = useNavigate();
  return (
    <Container>
      {/* AppBar */}
      <AppBar position="sticky" width="100vh">
        <Toolbar>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: "none",
              color: "inherit",
            }}
          >
            NC Marketplace
          </Typography>
          <Button onClick={() => nav("/sell")}>SELL</Button>
        </Toolbar>
      </AppBar>

      {/* Main */}
      <Routes>
        {/* Render HomePage & Sell Pages & 404 Error
        prop = element, :name is params */}
        <Route path="/" element={<Home />} />
        <Route path="/category/:name" element={<CategoryPage />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
}

export default App;
