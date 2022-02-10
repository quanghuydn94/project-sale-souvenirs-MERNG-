import React from "react";
import {
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@material-ui/core";
import "./TableHeader.scss";

export const TableHeader = () => {
  return (
    <>
      <TableHead>
        <TableRow>
          <TableCell width="30%" className="tableHeaderCell">
            <TableSortLabel>Name</TableSortLabel>
          </TableCell>
          <TableCell className="tableHeaderCell">
            <TableSortLabel>Image</TableSortLabel>
          </TableCell>
          <TableCell className="tableHeaderCell">
            <TableSortLabel>Price</TableSortLabel>
          </TableCell>
          <TableCell className="tableHeaderCell">Actions</TableCell>
        </TableRow>
      </TableHead>
    </>
  );
};
