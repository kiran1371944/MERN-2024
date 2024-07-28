export const validate =(schema) => async (req,res, next) => {
    try{
        const parsBody = await schema.parseAsync(req.body);
        req.body = parsBody;
        next();
    } catch (err) {
        console.log(err);
        const msg = err.errors[0].message
        res.status(400).json({ message: msg})
    }
}

