import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allCategory, createCategory} from '../../Redux/Action/action.js' 

const ControlBack = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(allCategory())
    }, [dispatch]);

    const cat = useSelector((state) => state.category);
    const [category, setCategory] = useState({
        name:''
    })

    const handleCategory=(e)=>{
        console.log(e.target);
        setCategory({name : e.target.value})
    }
    const cretionCategoryy = (category)=>{
        dispatch(createCategory(category))
        console.log('se envio');
        
        dispatch(allCategory())
    }
    
    console.log(cat);
    
  return (
    <div>
        <div className='createCategory'>
            
            <h1>creacion de categoria</h1>
            <input type="text" value={category.name} name={"category"} onChange={handleCategory} placeholder='nombre de categoria'/>
            <button onClick={()=>cretionCategoryy(category)}>creacion</button> 
        </div>
        <div className='createProduct'>
            <h1>creacion de Productos</h1>

            {/* <input type="text" placeholder='name'/><br /> */}
            {/* <input type="text" placeholder='price'/><br /> */}
            {/* <input type="text" placeholder=''/> */}
        </div>
    </div>
  )
}

export default ControlBack

/*
*product*
name
price
categoriasId


*categorias*
name


*/