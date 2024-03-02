import express from "express"

const router = express.Router()

router.get("/", (req, res) => {
    res.json("Api is Working fine")
})

export default router