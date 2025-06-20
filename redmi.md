Mi service.js tiene:

5 funciones las cuales son:

createNewProduct: Crear un nuevo producto en la lista de productos
allProducts: Devuelve todas las listas de producto
productById: Devuelve un producto por su id
updateProductById: Actualizar un producto por su id
deleteProductById: Borrar un producto por su id


Mi controller.js tiene:

una ruta que se llama createNewProduct la cual llama a la funcion createNewProduct de service.js
una ruta que se llama allProducts la cual llama a la funcion allProducts de service.js
una ruta que se llama productById la cual llama a la funcion productById de service.js
una ruta que se llama updateProductById la cual llama a la funcion updateProductById de service.js  
una ruta que se llama deleteProductById la cual llama a la funcion deleteProductById de service.js


Mi server.js tiene:

1 ruta que se llama app.use('/product', product) la cual llama a la ruta de controller.js
1 ruta que se llama app.listen(PORT, () => { console.log(`Server is running on http://localhost:${PORT}`); }) la cual se encarga de iniciar el servidor

Mi validation.js tiene:

Tiene 3 funciones las cuales son:

validateId: Valida si el id es un numero
foundId: Si el id existe en la lista de productos
foundProduct: Si el producto existe en la lista de productos