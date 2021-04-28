import Sequelize from 'sequelize';
import postgres from '../../../config/postgres.js';
import Group from './Group.js';
import Language from './Language.js';

/**
 * Define table for key group info in different languages
 */
const GroupInfo = postgres.define('key_group_info', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        field: 'key_group_info_id',
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

export default GroupInfo;
