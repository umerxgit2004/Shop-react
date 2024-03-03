import Product from "../model/product.model.js";
export const add = async (req, res) => {
    const{productName,description,price,image} = req.body
    if (!productName || !description || !price ||!image){
        console.log("All fields are required")
    }
    const product = new Product({
        productName,
        description,
        price,
        image
    })

try{
    await product.save()
    res.json("Added new product")
} catch (error) {
    console.log(error)
}


}