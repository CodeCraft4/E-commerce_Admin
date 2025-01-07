import { AppLayout } from "@muc/layout";
import { item_Data } from "@muc/constants";
import { Box, Pagination } from "@mui/material";
import { useState } from "react";
import { ProductCard } from "../../components/components";

const ManageProductsContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = item_Data.slice(startIndex, endIndex);
  const handlePageChange = (event, page: any) => {
    setCurrentPage(page);
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
          {currentItems.map((item, i) => (
            <ProductCard
              key={i}
              img={item.img}
              title={item.title}
              description={item.description}
              sales={item.sales}
              remainingProduct={item.remainingProduct}
              category={item.category}
              price={item.price}
            />
          ))}
        </Box>
        <Pagination
          count={Math.ceil(item_Data.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          variant="outlined"
        />
      </Box>
    </AppLayout>
  );
};

export default ManageProductsContainer;
