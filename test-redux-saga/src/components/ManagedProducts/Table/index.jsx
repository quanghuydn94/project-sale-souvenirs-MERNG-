import { useMutation } from "@apollo/client";
import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TablePagination,
  TableRow,
  TextField,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import {
  deleteSingleProduct,
  updateProductData,
} from "../../../graphql-client/mutation";
import { getProducts } from "../../../graphql-client/queries";
import { TableBodyProducts } from "./TableBody";
import { TableHeader } from "./TableHeader";
import { useState } from "react";
import { useRef } from "react";
import { SearchBox } from "./SearchBox";
import { useEffect } from "react";

export const TableProducts = () => {
  const refs = useRef();
  const data = useSelector((state) => state.shop.graphqlData);
  const [allProducts, setAllProducts] = useState(data);
  useEffect(() => {
    setAllProducts(data);
  }, [data]);
  const [open, setOpen] = useState(false);

  // Delete product
  const deleteProductById = (product) => {
    deleteProduct({
      variables: { id: product.id },
      refetchQueries: [{ query: getProducts }],
    });
  };
  const [deleteProduct, { error }] = useMutation(deleteSingleProduct);

  //Edit product
  const [editProductId, setEditProductId] = useState(null);
  const [editForm, setEditForm] = useState({
    name: "",
    description: "",
    title: "",
    price: "",
    image: "",
  });
  const EditFormData = (event) => {
    setEditForm({
      ...editForm,
      [event.target.name]: event.target.value,
    });
  };
  const handleOpen = (event, product) => {
    event.preventDefault();
    setEditProductId(product.id);
    setOpen(true);
    const formValues = {
      name: product.name,
      description: product.description,
      title: product.title,
      price: product.price,
      image: product.image,
    };
    setEditForm(formValues);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleUpdateProduct = (event) => {
    event.preventDefault();
    editProduct({
      variables: {
        id: editProductId,
        product: {
          name: editForm.name,
          title: editForm.title,
          price: parseInt(editForm.price),
          description: editForm.description,
          image: editForm.image,
        },
      },
      refetchQueries: [{ query: getProducts }],
    });
    setOpen(false);
  };
  const [editProduct] = useMutation(updateProductData);

  //Pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  //Search filter product
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (value) => {
    setSearchTerm(value);
    filterData(value);
  };
  const filterData = (value) => {
    const lowerCaseValue = value.toLowerCase().trim();
    if (!lowerCaseValue) {
      setAllProducts(data);
    } else {
      const filteredData = data.filter((item) => {
        return Object.keys(item).some((key) => {
          return item[key].toString().toLowerCase().includes(lowerCaseValue);
        });
      });
      setAllProducts(filteredData);
    }
  };
  return (
    <TableContainer style={{ background: "white" }}>
      <SearchBox searchTerm={searchTerm} handleSearch={handleSearch} />

      <Table>
        <TableHeader />
        <TableBody>
          {allProducts &&
            allProducts
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((product, index) => (
                <TableRow key={index}>
                  <TableBodyProducts
                    product={product}
                    deleteProduct={deleteProductById}
                    changeEditFormData={EditFormData}
                    handleClose={handleClose}
                    handleOpen={handleOpen}
                    open={open}
                    editForm={editForm}
                    update={handleUpdateProduct}
                  />
                </TableRow>
              ))}
        </TableBody>
      </Table>
      <TablePagination
        ref={refs}
        component="div"
        rowsPerPageOptions={[5, 10, 15]}
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};
