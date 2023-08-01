export type IProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: CategoryType;
};
export type CategoryType = "t-shirt" | "shoe" | "pants";

export type ProductCreate = Omit<IProduct, "id">; //Pick<only one>
