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
        autoIncrement: true
    },
    keyId: {
        type: Sequelize.UUID,
        field: 'artsapp_key_id',
        allowNull: false,
        references: {
            model: Key,
            key: "artsapp_key_id"
        }
    },
    mediaId: {
        type: Sequelize.INTEGER,
        field: 'media_id',
        allowNull: true,
        references: {
            model: Media,
            key: "media_id"
        }
    }
}, {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

export default Taxon;
