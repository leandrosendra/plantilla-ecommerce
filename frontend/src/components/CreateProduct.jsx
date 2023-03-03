import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
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
        input.image = url
        dispatch(createProduct(input));
        alert('Product created succesfully');
        setInput({
            name: '',
            description: '',
            genero: '',
            brand: '',
            stock: '',
            price: '',
            image: ''
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
        {url ? 
        (<p><img width='50px' src={ url } alt="Uploaded resource" /></p>): (<h1></h1>)}
                <button style={{backgroundColor: 'red'}} type='submit'>Crear</button>
            </form>
        </div>
    );
};

export default CreateProduct;