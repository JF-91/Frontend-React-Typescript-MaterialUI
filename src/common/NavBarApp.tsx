import {
  AppBar,
  Badge,
  Box,
  Button,
  
  Grid,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { CartComponent } from "./Cart";


const NavBarApp = () => {
  const navigate = useNavigate();
  const items = useAppSelector((state) => state.cartReducer);
  const [open, setOpen] = useState<boolean>(false);

  const handleStateViewDrawer = () => {
    setOpen((state) => !state);
  };

  return (
    <>
      <Box>
        <AppBar position="sticky">
          <Toolbar>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
                <Typography>Logo</Typography>
              </Grid>
              <Grid item>
                <Stack direction="row" spacing={2}>
                  <IconButton
                    color="primary"
                    onClick={() => handleStateViewDrawer()}
                  >
                    <Badge color="error" badgeContent={items.length}>
                      <ShoppingCartOutlinedIcon />
                    </Badge>
                  </IconButton>
                  <Button
                    variant="contained"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </Button>
                  <Button variant="outlined">Register</Button>
                </Stack>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <CartComponent
        open={open}
        handleStateViewDrawer={handleStateViewDrawer}
      />
      </Box>
    </>
  );
};

export default NavBarApp;
