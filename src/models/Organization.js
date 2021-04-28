import Sequelize from 'sequelize';
import postgres from '../../../config/postgres.js';
import OrganizationStatus from './OrganizationStatus.js';

/**
 * Define table for organization
 */
const Organization = postgres.define('organization', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        field: 'organization_id',
        autoIncrement: true,
    },
    status: {
        type: Sequelize.STRING(30),
        field: 'organization_status_name',
        allowNull: false,
        references: {
            model: OrganizationStatus,
            key: 'organization_status_name',
        },
    },
}, {
    timestamps: false,
});

export default Organization;
