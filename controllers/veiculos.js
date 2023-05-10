const conn = require("../db/conn");
const Veiculos = require('../model/Veiculos')

module.exports = class veiculos {

    static cadastro(req, res, next){     
        const { modelo, placa, custo, cor } = req.body;
        Veiculos.create({
            modelo,
            placa,
            custo,
            cor
        })
              .then(() => {
                console.log("OK")
              })
              .catch((error) => {
                console.log(error);
                res.send('Ocorreu um erro ao criar o usuário.');
              });
    }

     static async editar(req, res, next) {
        
            const id = req.params.id;
            console.log("ID mandado para minha rota: ", id);
            try {
              const id = req.params.id
              const user = {
                modelo: req.body.modelo,
                placa: req.body.placa,
                custo: req.body.custo,
                cor: req.body.cor
              }
              await Veiculos.update(user, { where: { id: id } }).then(()=> {
               return res.json("Editado com sucesso")
              }).catch(error => {
                console.log("error ao atualizar: ", error);
              })
        
        
            } catch (error) {
              console.log(error)
            }
    }

    static async remover(req, res, next){
            try {
              const id = req.params.id;
              await Veiculos.destroy({where: {id: id}}).then(()=> {
                res.redirect('/')
              })
            } catch (error) {
                console.log("Error ao deletar: ", error);
            }
    }

}