const Sequelize = require("sequelize");
const Umzug = require("umzug");
const sequelize = require("./server/models").sequelize;

const umzug = new Umzug({
    storage: 'sequelize',
    storageOptions: {
        sequelize: sequelize
    },

    migrations: {
        params: [
            sequelize.getQueryInterface(),
            sequelize.constructor
        ],
        path: './migrations',
        pattern: /\.js$/
    }
});

//execute all pending migrations
umzug.up().then(migrations => {
    console.log("Migrated succesfully");
});