const express = require("express")
const authMiddleware = require('../middleware/authe.js')
const router = express.Router();

 router.get("/home", (req, res) => {
    res.render('home')
});

// router.get("/download/:path", authMiddleware,async(req,res)=>{
//     const loddegInUserId =req.user.userId
//     const path =req.params.path;

//     const file =await fileModel.findOne({
//         user:loggedInUserId,
//         path:path
//     })

//     if(!file){
//         return res.status(401).json({
//             msg:"unauthorized"
//         })
//     }


//})

module.exports = router;