import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {
  Box,
  Divider,
  Typography,
  Checkbox,
  Avatar,
  IconButton,
} from "@mui/material";
import { ArrowForwardIos, Delete, MoreVert } from "@mui/icons-material";
import { COLORS, ROUTES } from "@muc/constants";
import { MenuButton } from "@muc/components";
import { useNavigate } from "react-router-dom";
import { TableData } from "@muc/types";

type tableDataType = {
  data: TableData[];
  title?: string;
};

const DataTable = (props: tableDataType) => {
  const { data, title } = props || {};
  const navigate = useNavigate();

  const [selected, setSelected] = useState<number[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setSelected(data?.map((row: TableData) => row?.orderId));
    } else {
      setSelected([]);
    }
    setSelectAll(event.target.checked);
  };

  const handleSelectRow = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    const isChecked = event.target.checked;

    const newSelected = isChecked
      ? [...selected, id]
      : selected.filter((item) => item !== id);

    setSelected(newSelected);
    setSelectAll(newSelected.length === data.length);
  };

  const isRowSelected = (id: number) => selected.includes(id);

  return (
    <TableContainer>
      <Box
        sx={{
          padding: "24px 16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "left",
          mb: { md: 1 },
        }}
      >
        <Typography variant="h2">{title}</Typography>

        <MenuButton
          MoreIcon={<MoreVert />}
          DeleteTitle="Delete"
          DeleteIcon={<Delete />}
        />
      </Box>
      <Divider />
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
                checked={selectAll}
                onChange={handleSelectAll}
                inputProps={{
                  "aria-label": "select all rows",
                }}
              />
            </TableCell>
            <TableCell>Product</TableCell>
            <TableCell>OrderId</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Customer&nbsp;Name</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
              }}
            >
              <TableCell padding="checkbox">
                <Checkbox
                  checked={isRowSelected(row.id)}
                  onChange={(event) => handleSelectRow(event, row?.id)}
                  inputProps={{
                    "aria-labelledby": `checkbox-${row.id}`,
                  }}
                />
              </TableCell>
              <TableCell component="th" scope="row">
                {row.productName}
              </TableCell>
              <TableCell>#{row.orderId}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell align="center">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <Avatar
                    variant="circular"
                    sx={{ width: "24px", height: "24px", fontSize: "12px" }}
                  >
                    {row?.poster ? (
                      <Box
                        component={"img"}
                        src={row?.poster}
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    ) : (
                      row.customerName.slice(0, 1)
                    )}
                  </Avatar>
                  <Typography variant="body1">{row.customerName}</Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Box sx={{ display: "flex", gap: "5px", alignItems: "center" }}>
                  <Box
                    component={"span"}
                    sx={{
                      width: 10,
                      height: 10,
                      borderRadius: 50,
                      bgcolor:
                        row?.status === "Canceled"
                          ? COLORS.secondary.main
                          : COLORS.primary.main,
                    }}
                  />
                  {row.status}
                </Box>
              </TableCell>
              <TableCell>
                <Box sx={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  ${row.amount}
                  <IconButton
                    onClick={() =>
                      navigate(ROUTES.ADMIN.ORDERS_DETAILS, {
                        state: { order: [row] },
                      })
                    }
                  >
                    <ArrowForwardIos fontSize="small" />
                  </IconButton>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
