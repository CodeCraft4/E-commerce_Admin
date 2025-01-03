import { AppLayout } from "@muc/layout";
import { Box, Paper } from "@mui/material";
import { LeftSideForm, RightSideForm } from "../../components/components";
import { CustomButton } from "@muc/components";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

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
  // const location = useLocation();
  // const updateProduct = location.state.products

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
            <Box sx={{ display: "flex", gap: "20px", p: 2 }}>
              <Box>
                <LeftSideForm />
              </Box>
              <Box width={"100%"}>
                <RightSideForm />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                justifySelf: "end",
                alignItems: "flex-end",
                width: "52%",
              }}
            >
              {/* {updateProduct && (
                <CustomButton
                  title="Update"
                  variant="contained"
                  width="220px"
                  type="submit"
                />
              )} */}
              <CustomButton
                title="Add"
                // title={`${updateProduct ? 'Delete' : 'Add'}`}
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
