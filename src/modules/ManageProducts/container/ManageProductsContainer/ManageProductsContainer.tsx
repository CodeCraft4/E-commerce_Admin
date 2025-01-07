import { AppLayout } from "@muc/layout";
import { PRODUCTS_DATA } from "@muc/constants";
import { Box, Pagination } from "@mui/material";
import { useState } from "react";
import { ProductCard } from "../../components/components";

const ManageProductsContainer = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 15;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = PRODUCTS_DATA.slice(startIndex, endIndex);
  const handlePageChange = (event:React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
    console.log(event);
  };

  return (
    <AppLayout title="All Products" path="Home" isProduct={true}>
      <Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            justifyContent: "center",
          }}
        >
          {currentItems.map((item) => (
            <ProductCard item={item} />
          ))}
        </Box>
        <Pagination
          count={Math.ceil(PRODUCTS_DATA.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          variant="outlined"
        />
      </Box>
    </AppLayout>
  );
};

export default ManageProductsContainer;
