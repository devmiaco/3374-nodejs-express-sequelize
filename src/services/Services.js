const dataSource = require('../models');

class Services {
    constructor(nomeDoModel) {
        this.model = nomeDoModel;
    }

    async pegaTodosOsRegistros() {
        return dataSource[this.model].findAll();
    }

    async pegaUmRegistroPorId(id) {
        return dataSource[this.model].findByPk(id);        
    }

    async criaRegistro(dadosDoRegistro) {
        console.log("cria registro service");
        return dataSource[this.model].create(dadosDoRegistro);
    }

    async atualizaRegistro(dadosAtualizados, id) {
        const listaDeRegistrosAtualizados = 
            dataSource[this.model].update(dadosAtualizados, { where: { id: id } });

        return listaDeRegistrosAtualizados[0] !== 0;        
    }

    async excluiRegistro(id) {
        return dataSource[this.model].destroy({ where: { id: id } });
    }
}

module.exports = Services;