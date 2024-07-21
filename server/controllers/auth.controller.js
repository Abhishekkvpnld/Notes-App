

export const register = async(req,res)=>{
    try {
        
    } catch (error) {
        res.status(400).json({
            success:false,
            error:true,
            message:error.message
        })
    }
};


export const login = async(req,res)=>{
    try {
        
    } catch (error) {
        res.status(400).json({
            success:false,
            error:true,
            message:error.message
        })
    }
}