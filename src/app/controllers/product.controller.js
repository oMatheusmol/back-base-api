const BaseController = require('./base.controller');
const ProductRepository = require('../domain/repositories/product.repository');
const repository = new ProductRepository();

class ProductController extends BaseController {
  constructor() {
    super();
  }

  async post(req, res) {
    try {
      const posted = await repository.post(req.body);
      
      if(posted === 'Error' || null) return res.status(401).send({"message": "Falha no cadastro"});
      
      const data = {"message": "Salvo com sucesso" };
      super.post(res, data);

    } catch (err) {
      super.sendError(res, err);
    }
   }

   async get(req, res) {
    try {
      const got = await repository.get(req.params.productName);
         
      if(got === 'Error' || null) return res.status(401).send({"message": "Falha na busca"});
      
      super.post(res, got);

    } catch (err) {
      super.sendError(res, err);
    }
   }

   async put(req, res) {
    try {
      const puted = await repository.put(req.body);
          
      if(puted === 'Error' || null) return res.status(401).send({"message": "Falha na alteracao"});
      
      super.post(res, {"message": "Alterado com sucesso" });

    } catch (err) {
      super.sendError(res, err);
    }
   }

   async delete(req, res) {
    try {
      const deleted = await repository.delete(req.body);
      
      if(deleted === 'Error' || null) return res.status(401).send({"message": "Falha ao deletar"});
      
      super.post(res, {"message": "Deletado com sucesso" });

    } catch (err) {
      super.sendError(res, err);
    }
   }
  
}

module.exports = new ProductController();