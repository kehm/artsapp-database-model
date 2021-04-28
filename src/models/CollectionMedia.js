import Sequelize from 'sequelize';
import postgres from '../../../config/postgres.js';
import Collection from './Collection.js';
import Media from './Media.js';

/**
 * Define many-to-many table for collection media
 */
const CollectionMedia = postgres.define('collection_media', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        field: 'key_media_id',
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
    mediaId: {
        type: Sequelize.INTEGER,
        field: 'media_id',
        allowNull: false,
        references: {
            model: Media,
            key: 'media_id',
        },
    },
}, {
    timestamps: false,
});

export default CollectionMedia;
