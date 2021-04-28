import Sequelize from 'sequelize';
import postgres from '../../../config/postgres.js';

/**
 * Define table for taxa statements
 */
const Statement = postgres.define('taxon_statement', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        field: 'taxon_statement_id',
        autoIncrement: true,
    },
}, {
    timestamps: false,
});

export default Statement;
