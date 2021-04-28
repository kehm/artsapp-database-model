import Sequelize from 'sequelize';
import postgres from '../../../config/postgres.js';
import Permission from './Permission.js';
import Role from './Role.js';

/**
 * Define many-to-many table for role permissions
 */
const Permissions = postgres.define('role_permissions', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        field: 'role_permissions_id',
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
    permissionName: {
        type: Sequelize.STRING(30),
        field: 'permission_name',
        allowNull: false,
        references: {
            model: Permission,
            key: 'permission_name',
        },
    },
}, {
    timestamps: false,
});

export default Permissions;
