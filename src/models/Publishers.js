import Sequelize from 'sequelize';
import postgres from '../../../config/postgres.js';
import Key from './Key.js';
import Organization from './Organization.js';

/**
 * Define many-to-many table for key publishers (organizations)
 */
const Publishers = postgres.define('key_publishers', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        field: 'key_publishers_id',
        autoIncrement: true,
    },
    keyId: {
        type: Sequelize.UUID,
        field: 'artsapp_key_id',
        allowNull: false,
        references: {
            model: Key,
            key: 'artsapp_key_id',
        },
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
}, {
    timestamps: false,
});

export default Publishers;
