import { Grid, List, ListItem, ListItemText, Typography } from "@mui/material";

function ReviewOrder() {
  const listItem = [
    {
      id: 1,
      name: "Product 1",
      desciption: "A nice thing",
      price: 9.99,
    },
    {
      id: 2,
      name: "Product 2",
      desciption: "Another thing",
      price: 3.45,
    },
    {
      id: 3,
      name: "Product 3",
      desciption: "Something else",
      price: 7.97,
    },
    {
      id: 4,
      name: "Product 4",
      desciption: "Best thing of all",
      price: 6.99,
    },
  ];

  const renderListItem = () => {
    return listItem.map((item) => (
      <List key={item.id}>
        <ListItem>
          <ListItemText primary={item.name} secondary={item.desciption} />
          <Typography>${item.price}</Typography>
        </ListItem>
      </List>
    ));
  };

  const handleTotalMoney = () =>
    listItem.reduce((totalPrice, currentPrice) => {
      return (totalPrice += currentPrice.price);
    }, 0);

  return (
    <>
      {renderListItem()}
      <List>
        <ListItem>
          <ListItemText primary="Total" />
          <Typography>
            <strong>${handleTotalMoney()}</strong>
          </Typography>
        </ListItem>
      </List>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography component="h6" variant="h6" sx={{mb: '16px'}}>
            <strong>Shipping</strong>
          </Typography>
          <Typography component="p" variant="body1" sx={{mb: 1}}>
            John Smith
          </Typography>
          <Typography component="p" variant="body1" sx={{mb: 1}}>
            1 MUI Drive, Reactville, Anytown, 99999, USA
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography component="h6" variant="h6" sx={{mb: '16px'}}>
            <strong>Payment Detail</strong>
          </Typography>

          <Grid container spacing={2}>
            <Grid  xs={6}>
              <Typography component="p" sx={{mb: 1}}>Card type</Typography>
            </Grid>
            <Grid  xs={6}>
              <Typography component="p" sx={{mb: 1}}>Visa</Typography>
            </Grid>
            <Grid  xs={6}>
              <Typography component="p" sx={{mb: 1}}>Card holder</Typography>
            </Grid>
            <Grid  xs={6}>
              <Typography component="p" sx={{mb: 1}}>Mr John Smith</Typography>
            </Grid>
            <Grid  xs={6}>
              <Typography component="p" sx={{mb: 1}}>Card number</Typography>
            </Grid>
            <Grid  xs={6}>
              <Typography component="p" sx={{mb: 1}}>xxxx-xxxx-xxxx-1234</Typography>
            </Grid>
            <Grid  xs={6}>
              <Typography component="p" sx={{mb: 1}}>Expiry date</Typography>
            </Grid>
            <Grid  xs={6}>
              <Typography component="p" sx={{mb: 1}}>04/2024</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default ReviewOrder;
