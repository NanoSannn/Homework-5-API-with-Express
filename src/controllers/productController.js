exports.getProducts = async (req, res)=>{
    res.send(`get all Products`);
}
exports.getProducts = async(req,res)=>{
    res.send(`get all products > ID:${req.body.id} , Name:${req.body.name} `);
};

exports.getProductById = async(req,res)=>{
    res.send(`get by id = ${req.params.id}`);
};

exports.getProductByName = async(req,res)=>{
    res.send(`get by name = ${req.params.name}`);
};
exports.addProduct = async(req,res)=>{
    res.send(`Add Product > ID:${req.body.id} , Name:${req.body.name} `);
};
exports.editWholeProduct = async(req,res)=>{
    res.send(`Edit Product > ID:${req.body.id} , Name:${req.body.name} `);
};
exports.editProduct = async(req,res)=>{
    res.send(`Edit2 Product > ID:${req.body.id} , Name:${req.body.name} `);
};
exports.deleteProduct = async(req,res)=>{
    res.send(`Delete Product by id: ${req.params.id} `);
};