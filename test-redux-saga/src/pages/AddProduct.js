import { useMutation } from '@apollo/client';
import React, { useState, useRef } from 'react';
import { CreateProduct } from '../components/ManagedProducts/CreateProduct';
import { addSingleProduct } from '../graphql-client/mutation';
import { getProducts } from '../graphql-client/queries';

export const AddProduct = () => {
    const snackbarRef = useRef(null);
    const [editValue, setEditorValue] = useState('');
    const [newProduct, setNewProduct] = useState({
        name: '',
        description: '',
        title: '',
        price: '',
        image: '',
    });

    newProduct.content = editValue;
    const { name, description, title, price, image, content } = newProduct;

    console.log(newProduct);
    const handleChangeEditor = (content) => {
        setEditorValue(content);
    };
    const onChangeInput = (event) => {
        setNewProduct({
            ...newProduct,
            [event.target.name]: event.target.value,
        });
    };
    const onAddProduct = (event) => {
        event.preventDefault();
        addProduct({
            variables: {
                name,
                description,
                title,
                price: parseInt(price),
                image,
                content,
            },
            refetchQueries: [{ query: getProducts }],
        });
        setNewProduct({
            name: '',
            description: '',
            title: '',
            price: '',
            image: '',
        });
        setEditorValue('');
        snackbarRef.current.show();
    };

    const [addProduct, dataMutation] = useMutation(addSingleProduct);
    return (
        <div>
            <CreateProduct
                onChangeInput={onChangeInput}
                handleChangeEditor={handleChangeEditor}
                onAddProduct={onAddProduct}
                newProduct={newProduct}
                snackRef={snackbarRef}
            />
        </div>
    );
};
