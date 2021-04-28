import Sequelize from 'sequelize';
import postgres from '../../../config/postgres.js';
import Language from './Language.js';
import Media from './Media.js';

/**
 * Define table for media info in different languages
 */
const MediaInfo = postgres.define('media_info', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        field: 'media_info_id',
        autoIncrement: true,
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
    languageCode: {
        type: Sequelize.STRING(5),
        field: 'language_code',
        allowNull: false,
        references: {
            model: Language,
            key: 'language_code',
        },
    },
    title: {
        type: Sequelize.STRING(255),
        field: 'title',
        allowNull: true,
    },
}, {
    timestamps: false,
});

export default MediaInfo;
