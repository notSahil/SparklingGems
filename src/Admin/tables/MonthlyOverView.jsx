import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import { API_BASE_URL } from '../../config/api';


const MonthlyOverview = () => {
  const [productCount, setProductCount] = useState(null);
  const [userCount, setUserCount] = useState(null);
  const [orderCount, setOrderCount] = useState(null);
  const [deliveredCount, setDeliveredCount] = useState(0);
  const [cancelledCount, setCancelledCount] = useState(0);
  const [shippedCount, setShippedCount] = useState(0);
  const [pendingCount, setPendingCount] = useState(0);
  

  useEffect(() => {
    const fetchProductCount = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/products/all`);
        if (!response.ok) {
          throw new Error('Failed to fetch product data');
        }
        const data = await response.json();
        setProductCount(data.length);
      } catch (error) {
        console.error('Error fetching product data:', error.message);
      }
    };

    const fetchUserCount = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/admin/Customer/users`);
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const data = await response.json();
        setUserCount(data.length);
      } catch (error) {
        console.error('Error fetching user data:', error.message);
      }
    };

    const fetchOrderData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/admin/orders/`);
        if (!response.ok) {
          throw new Error('Failed to fetch order data');
        }
        const data = await response.json();
        setOrderCount(data.length);

        // Calculate the counts for different order statuses
        let delivered = 0;
        let cancelled = 0;
        let shipped = 0;
        let pending = 0;
        data.forEach(order => {
          switch (order.orderStatus) {
            case 'DELIVERED':
              delivered++;
              break;
            case 'CANCELLED':
              cancelled++;
              break;
            case 'SHIPPED':
              shipped++;
              break;
            case 'PENDING':
              pending++;
              break;
            default:
              break;
          }
        });
        setDeliveredCount(delivered);
        setCancelledCount(cancelled);
        setShippedCount(shipped);
        setPendingCount(pending);
      } catch (error) {
        console.error('Error fetching order data:', error.message);
      }
    };

    fetchProductCount();
    fetchUserCount();
    fetchOrderData();
  }, []);

  return (
    <Card>
      <CardContent>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={4}>
            <Box display="flex" alignItems="center">
              <ShoppingCartIcon fontSize="large" />
              <Typography variant="h6" gutterBottom>
                Total Products: {productCount || 'Loading...'}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box display="flex" alignItems="center">
              <PersonIcon fontSize="large" />
              <Typography variant="h6" gutterBottom>
                Total Users: {userCount || 'Loading...'}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box display="flex" alignItems="center">
              <AssignmentIcon fontSize="large" />
              <Typography variant="h6" gutterBottom>
                Total Orders: {orderCount || 'Loading...'}
              </Typography>
            </Box>
            <Typography variant="body1" gutterBottom>
              <CheckCircleIcon /> Delivered: {deliveredCount}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <CancelIcon /> Cancelled: {cancelledCount}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <LocalShippingIcon /> Shipped: {shippedCount}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <HourglassEmptyIcon /> Pending: {pendingCount}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MonthlyOverview;
