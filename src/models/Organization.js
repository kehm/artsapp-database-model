import Sequelize from 'sequelize';
import postgres from '../../../config/postgres.js';

/**
 * Define table for organization
 */
const Organization = postgres.define('organization', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        field: 'organization_id',
        autoIncrement: true
    }
}, {
    timestamps: false
});

export default Organization;
