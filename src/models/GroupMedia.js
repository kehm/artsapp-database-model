import Sequelize from 'sequelize';
import postgres from '../../../config/postgres.js';
import Group from './Group.js';
import Media from './Media.js';

/**
 * Define many-to-many table for key group media
 */
const GroupMedia = postgres.define('key_group_media', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        field: 'key_media_id',
        autoIncrement: true,
    },
    groupId: {
        type: Sequelize.INTEGER,
        field: 'key_group_id',
        allowNull: false,
        references: {
            model: Group,
            key: 'key_group_id',
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

export default GroupMedia;
