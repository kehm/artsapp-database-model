import Sequelize from 'sequelize';
import postgres from '../../../config/postgres.js';

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
}, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});

export default User;
