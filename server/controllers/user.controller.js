
export const addNotes = async(req,res)=>{
    try {
        
    } catch (error) {
        console.log(error.message);
        res.status(400).json({
            error:true,
            success:false,
            message:error.message
        });
    }
}