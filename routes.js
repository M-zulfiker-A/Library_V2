import express, { Router } from 'express'
import { Author , Book , Publisher} from "./schema.js"


const router = express.Router()

router.get("/Books", async(req, res)=>{
    try{
        const data =await Book.find({})
        res.status(200).json(data)
    }catch(err){
        res.status(400).json({
            message : err.message
        })
    }
})

router.get("/Books/:id", async(req, res)=>{
    const id = req.params.id
    try{
        const data =await Book.findById(id)
        res.status(200).json(data)
    }catch(err){
        res.status(400).json({
            message : err.message
        })
    }
})

router.post("/Books",async(req, res)=>{
    const BookArr = req.body
    try{
        BookArr.forEach(async (element) => {
            await Book.create(element)
        });
        res.status(200).json({
            message: "new Book created",
            books : BookArr
        })
    }catch(err){
        res.status(400).json({
            message : err.message
        })
    }
})

router.put("/Books/:id", async(req, res)=>{
    try {
        const book = await Book.findOneAndReplace({_id : req.params.id} , req.body, { new : true})
        res.status(200).json({
            message : "B0ok successfully replaced",
            book
        })
    } catch (error) {
        res.status(400).json({
            message : err.message
        })
    }
})

router.delete("/Book/:id",async (req, res)=>{
    try {
        await Book.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message : "book deleted"
        })
    } catch (error) {
        res.status(400).json({
            message : err.message
        })
    }
})



router.get("/Publishers", async(req, res)=>{
    try{
        const data =await Publisher.find({})
        res.status(200).json(data)
    }catch(err){
        res.status(400).json({
            message : err.message
        })
    }
})

router.get("/Publishers/:id", async(req, res)=>{
    const id = req.params.id
    try{
        const data =await Publisher.findById(id)
        res.status(200).json(data)
    }catch(err){
        res.status(400).json({
            message : err.message
        })
    }
})

router.post("/Publishers",async(req, res)=>{
    const PublisherArr = req.body
        PublisherArr.forEach(async (element) => {
            try{
                await Publisher.create(element)
                res.status(200).json({
                    message: "new Publisher created",
                    Publishers : PublisherArr
                })
            }catch(err){
                res.status(400).json({
                    message : err.message
                })
            }
        });
        
    
})

router.put("/Publishers/:id", async(req, res)=>{
    try {
        const Publisher = await Publisher.findOneAndReplace({_id : req.params.id} , req.body, { new : true})
        res.status(200).json({
            message : "Publisher successfully replaced",
            Publisher
        })
    } catch (error) {
        res.status(400).json({
            message : err.message
        })
    }
})

router.delete("/Publishers/:id",async (req, res)=>{
    try {
        await Publisher.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message : "publisher deleted"
        })
    } catch (error) {
        res.status(400).json({
            message : err.message
        })
    }
})

router.get("/Authors", async(req, res)=>{
    try{
        const data =await Author.find({})
        res.status(200).json(data)
    }catch(err){
        res.status(400).json({
            message : err.message
        })
    }
})

router.get("/Authors/:id", async(req, res)=>{
    const id = req.params.id
    try{
        const data =await Author.findById(id)
        res.status(200).json(data)
    }catch(err){
        res.status(400).json({
            message : err.message
        })
    }
})

router.post("/Authors",async(req, res)=>{
    const AuthorArr = req.body
        AuthorArr.forEach(async (element) => {
            try{
                await Author.create(element)
            }catch(err){
                res.status(400).json({
                    message : err.message
                })
                return
            }
        });
        res.status(200).json({
            message: "new Author created",
            Authors : AuthorArr
        })
        
    
})

router.put("/Authors/:id", async(req, res)=>{
    try {
        const Author = await Author.findOneAndReplace({_id : req.params.id} , req.body, { new : true})
        res.status(200).json({
            message : "Author successfully replaced",
            Author
        })
    } catch (error) {
        res.status(400).json({
            message : err.message
        })
    }
})

router.delete("/Authors/:id",async (req, res)=>{
    try {
        await Author.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message : "Author deleted"
        })
    } catch (error) {
        res.status(400).json({
            message : err.message
        })
    }
})

router.get("/Books/:id/Authors", async (req, res)=>{
    try{
        const book =await Book.findById(req.params.id).populate('authors')
        const authors = book.authors.map(author=>author.name)
        res.status(200).json(authors)
    }catch(err){
        res.status(400).json({
            message : err.message
        })
    }
})

export default router