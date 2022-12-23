import { Box, Typography } from "@mui/material";

function FinishOrder() {
  return (
    <Box sx={{ mt: 5 }}>
      <Typography variant="h5" component="div">
        Thank you for your order.
      </Typography>
      <Typography variant="subtitle1" component="div">
        Your order number is #2001539. We have emailed your order confirmation,
        and will send you an update when your order has shipped.
      </Typography>
    </Box>
  );
}

export default FinishOrder;
