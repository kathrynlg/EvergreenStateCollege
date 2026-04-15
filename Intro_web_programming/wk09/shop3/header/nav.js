const { AppBar, Toolbar, Typography, Button, Menu, MenuItem } = MaterialUI;
const { useState } = React;

        //Navbar Comp
        function Navbar() {

            const [anchorEl, setAnchorEl] = useState(null);

            const handleMenuOpen = (event) => {
                setAnchorEl(event.currentTarget);
            };

            const handMenuClose = () => {
                setAnchorEl(null);
            };

            return (
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="nav1" sx={{ flexGrow: 1}}>
                            My MUI Shop3
                        </Typography>
                        <Button color="inherit" href="/wk09/shop3/index.html">
                            Home
                        </Button>
                        
                        <Button color="inherit" onClick={handleMenuOpen}>
                            Products &#9660;
                        </Button>
                        <Menu anchorEl ={anchorEl} open={Boolean(anchorEl)} onClose={handMenuClose}> 
                            <MenuItem onClick={handMenuClose} component="a" href="https://kag.csevg.com/wk09/shop3/product.html">All products</MenuItem>
                            <MenuItem onClick={handMenuClose} component="a" href="https://kag.csevg.com/wk09/shop3/products/product1.html">Product 1</MenuItem>
                            <MenuItem onClick={handMenuClose} component="a" href="https://kag.csevg.com/wk09/shop3/products/product2.html">Product 2</MenuItem>
                            <MenuItem onClick={handMenuClose} component="a" href="https://kag.csevg.com/wk09/shop3/products/product3.html">Product 3</MenuItem>
                            <MenuItem onClick={handMenuClose} component="a" href="https://kag.csevg.com/wk09/shop3/products/product4.html">Product 4</MenuItem>
                            <MenuItem onClick={handMenuClose} component="a" href="https://kag.csevg.com/wk09/shop3/products/product5.html">Product 5</MenuItem>
                            <MenuItem onClick={handMenuClose} component="a" href="https://kag.csevg.com/wk09/shop3/products/product6.html">Product 6</MenuItem>
                        </Menu>
                        
                        <Button color="inherit">
                            About Us
                        </Button>
                    </Toolbar>
                </AppBar>
                );
        }

        window.Navbar = Navbar; // exposes nav bar to global