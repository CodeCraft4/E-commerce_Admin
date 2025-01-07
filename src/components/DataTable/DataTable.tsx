import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box, Divider, Typography, Checkbox, Avatar } from "@mui/material";
import { Delete, MoreVert } from "@mui/icons-material";
import { COLORS } from "@muc/constants";
import { MenuButton } from "@muc/components";

type tableDataType = {
  data: any[];
  title?: string;
};

const DataTable = (props: tableDataType) => {
  const { data, title } = props || {};

  const [selected, setSelected] = useState<number[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setSelected(data?.map((row) => row?.orderId));
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
            <TableCell>Customer Name</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.d}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                cursor: "pointer",
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
              <TableCell >{row.date}</TableCell>
              <TableCell
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
                align="center"
              >
                <Avatar
                  variant="circular"
                  sx={{ width: "24px", height: "24px", fontSize: "12px" }}
                >
                  {row.image ? (
                    <Box
                      component={"img"}
                      src={row.image}
                      sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  ) : (
                    row.customerName.slice(0, 1)
                  )}
                </Avatar>
                <Typography variant="body1">{row.customerName}</Typography>
              </TableCell>
              <TableCell >
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
              <TableCell >${row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;