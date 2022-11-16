import { queryAllByTestId } from '@testing-library/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';




//cualquier cosa que venga de la Ruta es un STRING.
//console.log(typeof props.match.params.id)====>arroja la palabra String en consola
//1. let id= Number(props.match.params.id)
//2. console.log(id)====>50 en consola
//3. console.log(typeof id)====>number en consola


function Products() {


    const productsList = [
        {
            id: 1,
            name: 'Producto A',
            price: 100,
            description: 'AAAA'
        },
        {
            id: 2,
            name: 'Producto B',
            price: 200,
            description: 'BBBB'
        },
        {
            id: 3,
            name: 'Producto C',
            price: 300,
            description: 'CCCC'
        },
        {
            id: 4,
            name: 'Producto D',
            price: 400,
            description: 'DDDDDD'
        }

    ];
    console.log(productsList)

    //console.log(props)
    // console.log(props.match.params)

    let params = useParams()
    console.log(params)
    console.log(params.id)
    // let id = params

    //console.log(productsList[1].name)

    // let id = Number(props.match.params.id)
    //itero con filter o find


    let product = productsList.filter(oneProduct => oneProduct.id > 2)
    console.log(product)
    let product2 = productsList.filter(oneProduct2 => oneProduct2.id === 3)
    console.log(product2)
    let product3 = productsList.filter(oneProduct3 => oneProduct3.description.length > 5)
    console.log(product3)
    let product4 = productsList.filter(oneProduct4 => oneProduct4.id == params.id)
    console.log(product4)

    return (

     
        <div>

            <h1>COMPONENTE PRODUCTS  </h1>
         
            <button><Link to='/products/1'>Product 1</Link></button><br></br>
            <button><Link to='/products/2'>Product 2</Link></button><br></br>
            <button><Link to='/products/3'>Product 3</Link></button><br></br>
            <button><Link to='/products/4'>Product 4</Link></button><br></br>
            {
                //product4 &&
              
            }
            {
                //      !product && <p> No hay productos con ese ID</p>
            }
        </div>
    );
}

export default Products;



//¿Cuál es la diferencia entre props and State?
//Mientras ambos contienen información que influye en el resultado del render, son diferentes debido a una importante razón: props se pasa al componente (similar a los parámetros de una función) mientras que state se administra dentro del componente (similar a las variables declaradas dentro de una función).

/*PRUEBA DE QUE TOMA LOS DATOS DEL ARRAY.
<p>{productsList[0].id}</p>
            <p>{productsList[0].name}</p>
            <p>{productsList[0].price}</p>
            <p>{productsList[0].description}</p>
            */

