import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { productContext } from "../../contexts/ProductsContext/ProductsContext";
import { ProductsContextType } from "../../contexts/ProductsContext/types";
import { CategoryType } from "../../models/products";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function AddProductPage() {
  const { addProduct } = React.useContext(
    productContext
  ) as ProductsContextType;
  const [formValue, setFormValue] = React.useState({
    title: "",
    description: "",
    price: "",
    image: "",
    category: "t-shirt",
  });

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
  console.log(formValue);

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
    addProduct({
      ...formValue,
      price: +formValue.price,
      category: formValue.category as CategoryType,
    });
    setFormValue({
      title: "",
      description: "",
      price: "",
      image: "",
      category: "t-shirt",
    });
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
            New Product
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
                <MenuItem value={"shoe"}>Shoe</MenuItem>
                <MenuItem value={"pants"}>Pants</MenuItem>
              </Select>
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add New Product
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
