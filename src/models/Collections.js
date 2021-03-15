import Sequelize from 'sequelize';
import postgres from '../../../config/postgres.js';
import Collection from './Collection.js';
import Key from './Key.js';

/**
 * Define many-to-many table for key collections
 */
const Collections = postgres.define('key_collections', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        field: 'key_collection_id',
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
    collectionId: {
        type: Sequelize.INTEGER,
        field: 'collection_id',
        allowNull: false,
        references: {
            model: Collection,
            key: "collection_id"
        }
    }
}, {
    timestamps: false
});

export default Collections;
