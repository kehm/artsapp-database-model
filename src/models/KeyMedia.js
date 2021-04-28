import Sequelize from 'sequelize';
import postgres from '../../../config/postgres.js';
import Key from './Key.js';
import Media from './Media.js';

/**
 * Define many-to-many table for key media
 */
const KeyMedia = postgres.define('key_media', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        field: 'key_media_id',
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

export default KeyMedia;
