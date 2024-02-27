import * as React from "react";
import { useState, useEffect } from 'react';
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { ThemeProvider } from "@emotion/react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { customTheme } from "./them/customeThem";
import AdminNavbar from "./Navigation/AdminNavbar";
import Dashboard from "./Views/Admin";
import { Route, Routes, useNavigate } from "react-router-dom";
import DemoAdmin from "./Views/DemoAdmin";
import CreateProductForm from "./componets/createProduct/CreateProductFrom";
import CreateProuductDemo from "./componets/createProduct/CreateProuductDemo";
import CreateProduct from "../customer/Components/Create/CreateProduct";
import "./AdminPannel.css";
import ProductsTable from "./componets/Products/ProductsTable";
import OrdersTable from "./componets/Orders/OrdersTable";
import Customers from "./componets/customers/customers";
import UpdateProductForm from "./componets/updateProduct/UpdateProduct";
import axios from 'axios';
import { API_BASE_URL } from "../config/api";

const drawerWidth = 240;

const menu = [
  { name: "Dashboard", path: "/admin" },
  { name: "Products", path: "/admin/products" },
  { name: "Customers", path: "/admin/customers" },
  { name: "Orders", path: "/admin/orders" },
  { name: "Add Product", path: "/admin/product/create" },
];

export default function AdminPannel() {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // State variable for loading

  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sideBarVisible, setSideBarVisible] = React.useState(false);

  useEffect(() => {
    // Simulate a 1 second loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer); // Clear the timer on component unmount
  }, []);

  useEffect(() => {
    // Fetch profile data when the component mounts
    fetchProfileData();
  }, []);

  const fetchProfileData = async () => {
    try {
      // Retrieve JWT token from local storage
      const jwt = localStorage.getItem('jwt');

      // Check if JWT token is available
    

      // Make a GET request to fetch profile data
      const response = await axios.get(`${API_BASE_URL}/api/users/profile`, {
        headers: {
          'Authorization': `Bearer ${jwt}`,
          'Content-Type': 'application/json'
        }
      });
      if (!jwt) {
        navigate('/');
        return;
        // throw new Error('JWT token is missing.');
        
      }
    

      // Check if the request was successful
      if (!response.data) {
        throw new Error('Error fetching profile data');
      }

      // Check if the role is admin
      const role = response.data.role;
      console.log("ROLE data in admin:",role);
      if (!role) {
        // If role is null, redirect the user
        navigate('/');
        return;
      }

      if (role === 'ROLE_ADMIN' || role === '1' || role === 'ROLE_USER') {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    } catch (error) {
      console.error('Error fetching profile data:', error.message);
      setError(error.message);
    }
  };

  const drawer = (
    <Box
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {isLargeScreen && <Toolbar />}
      <List>
        {menu.map((item, index) => (
          <ListItem key={item.name} disablePadding onClick={() => navigate(item.path)}>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List sx={{ position: "absolute", bottom: 0, width: "100%" }}>
        <Divider />
        {["Account", "Request"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const handleSideBarViewInMobile = () => {
    setSideBarVisible(true);
  };

  const handleCloseSideBar = () => {
    setSideBarVisible(false);
  };

  const drawerVariant = isLargeScreen ? "permanent" : "temporary";

  return (
    <ThemeProvider theme={customTheme}>
      {loading ? ( // Render loader if loading is true
        <div> </div>
      ) : (
        <Box sx={{ display: `${isLargeScreen ? "flex" : "block"}` }}>
          <CssBaseline />
          <AdminNavbar handleSideBarViewInMobile={handleSideBarViewInMobile} />

          <Drawer
            variant={drawerVariant}
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: {
                width: drawerWidth,
                boxSizing: "border-box",
                ...(drawerVariant === "temporary" && {
                  top: 0,
                  [`& .MuiPaper-root.MuiDrawer-paperAnchorTop.MuiDrawer-paperTemporary`]:
                    {
                      position: "fixed",
                      left: 0,
                      right: 0,
                      height: "100%",
                      zIndex: (theme) => theme.zIndex.drawer + 2,
                    },
                }),
              },
            }}
            open={isLargeScreen || sideBarVisible}
            onClose={handleCloseSideBar}
          >
            {drawer}
          </Drawer>
          <Box className="adminContainer" component="main" sx={{ flexGrow: 1 }}>
            <Toolbar />
            <Routes>
              <Route path="/" element={<Dashboard />}></Route>
              <Route path="/product/create" element={<CreateProductForm />}></Route>
              <Route path="/product/update/:productId" element={<UpdateProductForm />}></Route>
              <Route path="/products" element={<ProductsTable />}></Route>
              <Route path="/orders" element={<OrdersTable />}></Route>
              <Route path="/customers" element={<Customers />}></Route>
              <Route path="/demo" element={<DemoAdmin />}></Route>
            </Routes>

          </Box>
        </Box>
      )}
    </ThemeProvider>
  );
}
