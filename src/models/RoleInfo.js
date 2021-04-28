import Sequelize from 'sequelize';
import postgres from '../../../config/postgres.js';
import Language from './Language.js';
import Role from './Role.js';

/**
 * Define table for role info in different languages
 */
const RoleInfo = postgres.define('role_info', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        field: 'role_info_id',
        autoIncrement: true,
    },
    roleId: {
        type: Sequelize.INTEGER,
        field: 'role_id',
        allowNull: false,
        references: {
            model: Role,
            key: 'role_id',
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
        type: Sequelize.STRING(30),
        field: 'name',
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING(255),
        field: 'description',
        allowNull: true,
    },
}, {
    timestamps: false,
});

export default RoleInfo;
