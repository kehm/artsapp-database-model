import Sequelize from 'sequelize';
import postgres from '../../../config/postgres.js';
import Key from './Key.js';
import Media from './Media.js';

/**
 * Define table for taxa
 */
const Taxon = postgres.define('taxon', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        field: 'taxon_id',
        autoIncrement: true,
    },
    keyId: {
        type: Sequelize.UUID,
        field: 'artsapp_key_id',
        allowNull: false,
        references: {
            model: Key,
            key: 'artsapp_key_id',
        },
    },
}, {
    timestamps: false,
});

export default Taxon;
