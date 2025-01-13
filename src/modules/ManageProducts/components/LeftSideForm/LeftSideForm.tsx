import { CustomTextField } from "@muc/components";
import { ProductType } from "@muc/types";
import { Box } from "@mui/material";

type ProductDetailType = {
  productDetails: ProductType;
};
const LeftSideForm = (props: ProductDetailType) => {
  const { productDetails } = props || {};
  return (
    <Box>
      <CustomTextField
        label="Product Name"
        name="productName"
        placeHolder="Type name here"
        type="text"
        width="556px"
        defaultValue={`${productDetails?.title ? productDetails?.title : ""}`}
      />
      <CustomTextField
        label="Description"
        name="Description"
        placeHolder="Type Description here"
        type="text"
        width="556px"
        multiline={true}
        defaultValue={`${
          productDetails?.description ? productDetails?.description : ""
        }`}
      />
      <CustomTextField
        label="Category"
        name="Category"
        placeHolder="Type Category here"
        type="text"
        width="556px"
        defaultValue={`${
          productDetails?.category ? productDetails?.category : ""
        }`}
      />
      <CustomTextField
        label="Brand Name"
        name="BrandName"
        placeHolder="Type Brand here"
        type="text"
        width="556px"
        defaultValue={`${productDetails?.title ? productDetails?.title : ""}`}
      />
      <Box display={{ md: "flex", sm: "block", xs: "block" }} gap={2} my={1}>
        <CustomTextField
          label="SKU"
          name="sku"
          placeHolder="Fox-39876"
          type="number"
          width="266px"
          defaultValue={"2323"}
        />
        <CustomTextField
          label="Stock Quantity"
          name="stock"
          placeHolder="9876"
          type="number"
          width="266px"
          defaultValue={"23"}
        />
      </Box>
      <Box display={{ md: "flex", sm: "block", xs: "block" }} gap={2} my={1}>
        <CustomTextField
          label="Regular Price"
          name="RegularPrice"
          placeHolder="$76"
          type="number"
          width="266px"
          defaultValue={`${productDetails?.price ? productDetails?.price : ""}`}
        />
        <CustomTextField
          label="Sale Price"
          name="SalePrice"
          placeHolder="$126"
          type="number"
          width="266px"
          defaultValue={`${productDetails?.sales ? productDetails?.sales : ""}`}
        />
      </Box>
    </Box>
  );
};

export default LeftSideForm;
