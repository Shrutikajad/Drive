const jwt =require("jsonwebtoken")

function auth(req,res){
    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({
            msg:"Please login to access this resource"})
    }

    try{
        const decoded =jwt.verify(token,process.env.SECERT_KEY);

        req.user=decoded;

        return

    }catch(err){
        
        return res.status(401).json({
            msg:"Unauthorized"
        })
    }
}