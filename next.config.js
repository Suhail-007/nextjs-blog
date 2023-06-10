const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {

    if (phase === 'PHASE_DEVELOPMENT_SERVER') {
        return {
            env: {
                mongodb_username: 'suhail-007',
                mongodb_password: 'Suhail1998',
                mongodb_cluster: 'cluster0',
                mongodb_database: 'myblog',
            }
        }
    }

    return {
        env: {
            mongodb_username: 'suhail-007',
            mongodb_password: 'Suhail1998',
            mongodb_cluster: 'cluster0',
            mongodb_database: 'myblog',
        }
    }
}