const db = require('./Banco');

const Agendamento = db.sequelize.define('agendamentos',
    {
        nome:{
            type:db.Sequelize.STRING,
        },
        email:{
            type:db.Sequelize.STRING,
        },
        telefone:{
            type:db.Sequelize.STRING,
        },
        data_contato:{
            type:db.Sequelize.DATE,
        },
        observacao:{
            type:db.Sequelize.TEXT,
        },
        origem:{
            type:db.Sequelize.STRING,
        }
    }
);

//Agendamento.sync({force:true});

module.exports = Agendamento;