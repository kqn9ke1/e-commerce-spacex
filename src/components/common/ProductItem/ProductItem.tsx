import React, { FC, useContext } from "react";
import { IProduct } from "../../../models/products";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { productContext } from "../../../contexts/ProductsContext/ProductsContext";
import { ProductsContextType } from "../../../contexts/ProductsContext/types";
import { Link } from "react-router-dom";

type ProductItemProps = {
  item: IProduct;
};

const ProductItem: FC<ProductItemProps> = ({ item }) => {
  const { deleteProduct } = useContext(productContext) as ProductsContextType;
  return (
    <Grid item xs={8} md={6} lg={3}>
      <Card>
        <CardMedia sx={{ height: 340 }} image={item.image} title={item.title} />
        <CardContent sx={{ paddingBottom: 0 }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ height: 60, fontSize: 16 }}
          >
            {item.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ height: 80, fontSize: 13 }}
          >
            {item.description}
          </Typography>
          <Typography variant="h6">${item.price}</Typography>
        </CardContent>
        <CardActions sx={{ paddingTop: 0 }}>
          <Button component={Link} to={`/details/${item.id}`} size="small">
            Learn More
          </Button>
          <Button component={Link} to={`/edit/${item.id}`} size="small">
            Edit
          </Button>
          <Button onClick={() => deleteProduct(item.id)} size="small">
            Delete
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductItem;
