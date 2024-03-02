import Product from "../model/product.model.js";
export const add = async (req, res) => {
    const{productName,description,price } = req.body
    if (!productName || !description || !price){
        console.log("All fields are required")
    }
    const product = new Product({
        productName,
        description,
        price
    })

try{
    await product.save()
    res.json("Added new product")
} catch (error) {
    console.log(error)
}


}