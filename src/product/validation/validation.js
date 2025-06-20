const validateId = (int, res) => {
   if (isNaN(int)){
        res.json({
            mesage: "Error id is string",
            status: 400
        })
    }
}

const foundId = (id, res) => {
    if(id == -1){
        res.json({
            message: "Error id not found",
            status: 404
        })
    }
}

const foundProduct = (product, res) => {
    if(!product){
        res.json({
            message: "Error product not found",
            status: 404
        })
    }
}
export { validateId, foundId, foundProduct }