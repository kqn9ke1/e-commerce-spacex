import { IProduct, ProductCreate } from "../../models/products";

export type ProductsContextType = {
  products: IProduct[];
  product: IProduct | null;
  pageTotalCount: number;
  page: number;
  getProducts: () => void;
  addProduct: (newProduct: ProductCreate) => void;
  deleteProduct: (id: number) => void;
  getOneProduct: (id: number) => void;
  editProduct: (newData: IProduct) => void;
  setPage: (num: number) => void;
};

export type IInitState = {
  products: IProduct[];
  product: IProduct | null;
  pageTotalCount: number;
};

type IProductsAction = {
  type: "products";
  payload: IProduct[];
};

type IProductAction = {
  type: "product";
  payload: IProduct;
};

type IPageTotalCountAction = {
  type: "pageTotalCount";
  payload: number;
};

export type TProductAction =
  | IProductsAction
  | IProductAction
  | IPageTotalCountAction;
