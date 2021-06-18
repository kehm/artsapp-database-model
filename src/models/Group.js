import Sequelize from 'sequelize';
import postgres from '../../../config/postgres.js';
import User from './User.js';

/**
 * Define table for key groups
 */
const Group = postgres.define('key_group', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        field: 'key_group_id',
        autoIncrement: true,
    },
    createdBy: {
        type: Sequelize.UUID,
        field: 'created_by',
        allowNull: true,
        references: {
            model: User,
            key: 'artsapp_user_id',
        },
    },
}, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});

export default Group;
