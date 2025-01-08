import { AppLayout } from "@muc/layout";
import { Box, Paper } from "@mui/material";
import { LeftSideForm, RightSideForm } from "../../components/components";
import { CustomButton } from "@muc/components";
import { FormProvider, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

interface ProductFormInputs {
  productName: string;
  Description: string;
  Category: string;
  BrandName: string;
  sku: number;
  stock: number;
  RegularPrice: number;
  SalePrice: number;
}

const AddNewProductsContainer = () => {
  const methods = useForm<ProductFormInputs>();
  const navigate = useNavigate();
  const location = useLocation();
  const updateProduct = location.state?.item;
  console.log(updateProduct);

  const onAddProduct = (data: ProductFormInputs) => {
    console.log(data, "--- Complete Form Data");
  };

  return (
    <AppLayout title="Add New Product" path="Home">
      <FormProvider {...methods}>
        <Box
          component="form"
          onSubmit={methods.handleSubmit(onAddProduct)}
          sx={{
            width: "100%",
          }}
        >
          <Box component={Paper}>
            <Box
              sx={{
                display: { md: "flex", sm: "block", xs: "block" },
                gap: { md: "20px" },
                p: 2,
              }}
            >
              <Box width={"100%"}>
                <LeftSideForm productDetails={updateProduct} />
              </Box>
              <Box width={"100%"}>
                <RightSideForm productDetails={updateProduct} />
              </Box>
            </Box>
            <Box
              sx={{
                display: { md: "flex", sm: "flex", xs: "block" },
                justifyContent: "center",
                alignItems: "center",
                m: "auto",
                gap: "20px",
                width: { md: "52%", sm: "90%", xs: "90%" },
              }}
            >
              {updateProduct && (
                <CustomButton
                  title="Update"
                  variant="contained"
                  width="220px"
                  type="submit"
                />
              )}
              <CustomButton
                title={`${updateProduct ? "Delete" : "Add"}`}
                variant="contained"
                width="220px"
                type="submit"
              />
              <CustomButton
                title="Cancel"
                variant="outlined"
                width="220px"
                onClick={() => navigate(-1)}
              />
            </Box>
            <br />
          </Box>
        </Box>
      </FormProvider>
    </AppLayout>
  );
};

export default AddNewProductsContainer;
