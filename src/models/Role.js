import Sequelize from 'sequelize';
import postgres from '../../../config/postgres.js';

/**
 * Define table for user roles
 */
const Role = postgres.define('role', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        field: 'role_id',
        autoIncrement: true,
    },
}, {
    timestamps: false,
});

export default Role;
