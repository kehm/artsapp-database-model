import Sequelize from 'sequelize';
import postgres from '../../../config/postgres.js';
import Collection from './Collection.js';
import Language from './Language.js';

/**
 * Define table for collection info in different languages
 */
const CollectionInfo = postgres.define('collection_info', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        field: 'collection_info_id',
        autoIncrement: true,
    },
    collectionId: {
        type: Sequelize.INTEGER,
        field: 'collection_id',
        allowNull: false,
        references: {
            model: Collection,
            key: 'collection_id',
        },
    },
    languageCode: {
        type: Sequelize.STRING(5),
        field: 'language_code',
        allowNull: false,
        references: {
            model: Language,
            key: 'language_code',
        },
    },
    name: {
        type: Sequelize.STRING(60),
        field: 'name',
        allowNull: false,
    },
    description: {
        type: Sequelize.TEXT,
        field: 'description',
        allowNull: true,
    },
}, {
    timestamps: false,
});

export default CollectionInfo;
