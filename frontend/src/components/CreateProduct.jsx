import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createProduct, allProduct } from '../Redux/Action/action'
import Upload from './Upload'

const CreateProduct = () => {

    const [url, updateUrl] = useState();
    console.log(url);

    function handleOnUpload(error, result, widget) {
    if ( error ) {
      updateError(error);
      widget.close({
        quiet: true
      });
      return;
    }
    updateUrl(result?.info?.secure_url);
  }


    const dispatch = useDispatch();
    const products = useSelector((state) => state.product)

    useEffect(() => {
        dispatch(allProduct())
    }, [dispatch])

    const [input, setInput] = useState({
        name: '',
        description: '',
        genero: '',
        brand: '',
        stock: '',
        price: '',
        image: ''
    })

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(createProduct(input));
        alert('Product created succesfully');
        setInput({
            name: '',
            description: '',
            genero: '',
            brand: '',
            stock: '',
            price: '',
            image: `${url}`
        })
    }

    return (
        <div>
            <form onSubmit={(e) => { handleSubmit(e) }}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={input.name}
                        name='name'
                        onChange={(e) => { handleChange(e) }}
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <input
                        type="text"
                        value={input.description}
                        name='description'
                        onChange={(e) => { handleChange(e) }}
                    />
                </div>
                <div>
                    <label>genre:</label>
                    <input
                        type="text"
                        value={input.genero}
                        name='genero'
                        onChange={(e) => { handleChange(e) }}
                    />
                </div>
                <div>
                    <label>brand:</label>
                    <input
                        type="text"
                        value={input.brand}
                        name='brand'
                        onChange={(e) => { handleChange(e) }}
                    />
                </div>
                <div>
                    <label>stock:</label>
                    <input
                        type="number"
                        value={input.stock}
                        name='stock'
                        onChange={(e) => { handleChange(e) }}
                    />
                </div>
                <div>
                    <label>price:</label>
                    <input
                        type="number"
                        value={input.price}
                        name='price'
                        onChange={(e) => { handleChange(e) }}
                    />
                </div>
                <button style={{backgroundColor: 'red'}} type='submit'>Crear</button>
            </form>
            <div>
                {
                    products?.map((p) => {
                        return (
                            <div style={{border: '1px solid black', display: 'flex', flexDirection: 'column'}}>
                            <div>{p.name}</div>
                            <div>{p.description}</div>
                            <div>{p.genero}</div>
                            <div>{p.brand}</div>
                            <div>{p.stock}</div>
                            <div>{p.price}</div>
                            </div>
                        )
                    })
                }
            </div>
            <Upload onUpload={handleOnUpload}>
          {({ open }) => {
            function handleOnClick(e) {
              e.preventDefault();
              open();
            }
            return (
              <button onClick={handleOnClick}>
                Upload an Images
              </button>
            )
          }}
        </Upload>
        <p><img src={ url } alt="Uploaded resource" /></p>
        </div>
    );
};

export default CreateProduct;