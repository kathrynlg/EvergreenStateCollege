const { AppBar, Toolbar, Typography, Button, Menu, MenuItem } = MaterialUI;
const { useState } = React;

// Navbar Component
function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My MUI Shop4
        </Typography>

        <Button
          color="inherit"
          href="https://kag.csevg.com/Intro_web_programming/wk09/shop4/"
        >
          Home
        </Button>

        <Button color="inherit" onClick={handleMenuOpen}>
          Products &#9660;
        </Button>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          transformOrigin={{ vertical: "top", horizontal: "left" }}
        >
          <MenuItem
            onClick={handleMenuClose}
            component="a"
            href="https://kag.csevg.com/Intro_web_programming/wk09/shop4/product.html"
          >
            All Products
          </MenuItem>

          <MenuItem onClick={handleMenuClose} component="a" href="https://kag.csevg.com/Intro_web_programming/wk09/shop4/products/product1.html">
            Product 1
          </MenuItem>

          <MenuItem onClick={handleMenuClose} component="a" href="https://kag.csevg.com/Intro_web_programming/wk09/shop4/products/product2.html">
            Product 2
          </MenuItem>

          <MenuItem onClick={handleMenuClose} component="a" href="https://kag.csevg.com/Intro_web_programming/wk09/shop4/products/product3.html">
            Product 3
          </MenuItem>

          <MenuItem onClick={handleMenuClose} component="a" href="https://kag.csevg.com/Intro_web_programming/wk09/shop4/products/product4.html">
            Product 4
          </MenuItem>

          <MenuItem onClick={handleMenuClose} component="a" href="https://kag.csevg.com/Intro_web_programming/wk09/shop4/products/product5.html">
            Product 5
          </MenuItem>

          <MenuItem onClick={handleMenuClose} component="a" href="https://kag.csevg.com/Intro_web_programming/wk09/shop4/products/product6.html">
            Product 6
          </MenuItem>
        </Menu>

        <Button
          color="inherit"
          href="https://kag.csevg.com/Intro_web_programming/wk09/shop4/about.html"
        >
          About Us
        </Button>
      </Toolbar>
    </AppBar>
  );
}

// Expose globally
window.Navbar = Navbar;