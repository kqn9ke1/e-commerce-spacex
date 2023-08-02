import React, { useContext, useEffect, useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Typography,
  Container,
  ThemeProvider,
  CssBaseline,
  Button,
  TextField,
  SelectChangeEvent,
  createTheme,
} from "@mui/material";
import { productContext } from "../../contexts/ProductsContext/ProductsContext";
import { ProductsContextType } from "../../contexts/ProductsContext/types";
import { useNavigate, useParams } from "react-router-dom";
import { CategoryType } from "../../models/products";

const defaultTheme = createTheme();

const EditProductPage = () => {
  const { product, getOneProduct, editProduct } = useContext(
    productContext
  ) as ProductsContextType;

  const { id } = useParams();
  const navigate = useNavigate();

  const [formValue, setFormValue] = useState({
    id: 1,
    title: "",
    description: "",
    price: "",
    image: "",
    category: "",
  });

  useEffect(() => {
    id && getOneProduct(+id);
  }, []);

  useEffect(() => {
    if (product) {
      setFormValue({ ...product, price: product.price.toString() });
    }
  }, [product]);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<string>
  ) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      !formValue.title.trim() ||
      !formValue.description.trim() ||
      !formValue.price.trim() ||
      !formValue.image.trim()
    ) {
      alert("fill all fields");
      return;
    }
    editProduct({
      ...formValue,
      price: +formValue.price,
      category: formValue.category as CategoryType,
    });

    navigate(-1);
    console.log(formValue);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Edit Product
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              label="Title"
              name="title"
              autoFocus
              value={formValue.title}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="description"
              label="Description"
              value={formValue.description}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="price"
              label="Price"
              type="number"
              value={formValue.price}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="image"
              label="Image"
              value={formValue.image}
              onChange={handleChange}
            />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="category"
                value={formValue.category}
                label="Category"
                onChange={handleChange}
              >
                <MenuItem value={"t-shirt"}>T-shirt</MenuItem>
                <MenuItem value={"shoes"}>Shoe</MenuItem>
                <MenuItem value={"pants"}>Pants</MenuItem>
              </Select>
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default EditProductPage;
