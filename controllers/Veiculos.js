const conn = require("../db/conn");
const Veiculos = require('../model/Veiculos')


module.exports = class vehicles {

    static async register(req, res){  

        const { modelo, placa, custo, cor } = req.body;

        await Veiculos.create({
            modelo,
            placa,
            custo,
            cor
        })
        .then(() => {
            console.log("CADASTRO DE VEICULOS FEITO COM SUCESSO")
        })
        .catch((error) => {
            console.log("ERROR: ", error);
            res.send('Ocorreu um erro ao criar o usuário.');
        });
    }


     static async edit(req, res) {
        
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

    static async delete(req, res,){
            try {
              const id = req.params.id;
              await Veiculos.destroy({where: {id: id}}).then(()=> {
                console.log("Veiculo deletado com sucesso")
              })
            } catch (error) {
                console.log("Error ao deletar: ", error);
            }
    }

    static async allvehicles(req, res) {
      const veiculos = await Veiculos.findAll({ raw: true });
    }
  
}