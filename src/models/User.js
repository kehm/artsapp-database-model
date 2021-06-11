import Sequelize from 'sequelize';
import postgres from '../../../config/postgres.js';
import Organization from './Organization.js';
import Role from './Role.js';

/**
 * Define table for users
 */
const User = postgres.define('artsapp_user', {
    id: {
        type: Sequelize.UUID,
        primaryKey: true,
        field: 'artsapp_user_id',
        defaultValue: Sequelize.UUIDV4,
    },
    idpId: {
        type: Sequelize.STRING(255),
        field: 'idp_id',
        allowNull: true,
        unique: true,
    },
    name: {
        type: Sequelize.STRING(255),
        field: 'full_name',
        allowNull: true,
    },
    email: {
        type: Sequelize.STRING(255),
        field: 'email',
        allowNull: true,
        validate: {
            isEmail: true,
        },
        unique: true,
    },
    accessToken: {
        type: Sequelize.STRING(255),
        field: 'access_token',
        allowNull: true,
    },
    expiresAt: {
        type: Sequelize.BIGINT,
        field: 'expires_at',
        allowNull: true,
    },
    scope: {
        type: Sequelize.STRING(255),
        field: 'scope',
        allowNull: true,
    },
    idToken: {
        type: Sequelize.TEXT,
        field: 'id_token',
        allowNull: true,
    },
    organizationId: {
        type: Sequelize.INTEGER,
        field: 'organization_id',
        allowNull: true,
        references: {
            model: Organization,
            key: 'organization_id',
        },
    },
    roleId: {
        type: Sequelize.INTEGER,
        field: 'role_id',
        allowNull: true,
        references: {
            model: Role,
            key: 'role_id',
        },
    },
}, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});

export default User;
