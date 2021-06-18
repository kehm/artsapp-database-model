import Sequelize from 'sequelize';
import postgres from '../../../config/postgres.js';
import Organization from './Organization.js';
import User from './User.js';

/**
 * Define table for workgroups
 */
const Workgroup = postgres.define('workgroup', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        field: 'workgroup_id',
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING(60),
        field: 'name',
        allowNull: false,
        unique: true,
    },
    organizationId: {
        type: Sequelize.INTEGER,
        field: 'organization_id',
        allowNull: false,
        references: {
            model: Organization,
            key: 'organization_id',
        },
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

export default Workgroup;
