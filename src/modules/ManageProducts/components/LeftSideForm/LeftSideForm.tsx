import {CustomTextField } from "@muc/components";
import { Box } from "@mui/material";

const LeftSideForm = () => {

  return (
    <Box>
      <CustomTextField
        label="Product Name"
        name="productName"
        placeHolder="Type name here"
        type="text"
        width="556px"
      />
      <CustomTextField
        label="Description"
        name="Description"
        placeHolder="Type Description here"
        type="text"
        width="556px"
        multiline={true}
      />
      <CustomTextField
        label="Category"
        name="Category"
        placeHolder="Type Category here"
        type="text"
        width="556px"
      />
      <CustomTextField
        label="Brand Name"
        name="BrandName"
        placeHolder="Type Brand here"
        type="text"
        width="556px"
      />
      <Box display={"flex"} gap={2} my={1}>
        <CustomTextField
          label="SKU"
          name="sku"
          placeHolder="Fox-39876"
          type="number"
          width="266px"
        />
        <CustomTextField
          label="Stock Quantity"
          name="stock"
          placeHolder="9876"
          type="number"
          width="266px"
        />
      </Box>
      <Box display={"flex"} gap={2} my={1}>
        <CustomTextField
          label="Regular Price"
          name="RegularPrice"
          placeHolder="$76"
          type="number"
          width="266px"
        />
        <CustomTextField
          label="Sale Price"
          name="SalePrice"
          placeHolder="$126"
          type="number"
          width="266px"
        />
      </Box>
    </Box>
  );
};


export default LeftSideForm;
