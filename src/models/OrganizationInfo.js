import Sequelize from 'sequelize';
import postgres from '../../../config/postgres.js';
import Language from './Language.js';
import Organization from './Organization.js';

/**
 * Define table for organization info in different languages
 */
const OrganizationInfo = postgres.define('organization_info', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        field: 'organization_info_id',
        autoIncrement: true,
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
    languageCode: {
        type: Sequelize.STRING(5),
        field: 'language_code',
        allowNull: false,
        references: {
            model: Language,
            key: 'language_code',
        },
    },
    fullName: {
        type: Sequelize.STRING(60),
        field: 'full_name',
        allowNull: false,
    },
    shortName: {
        type: Sequelize.STRING(5),
        field: 'short_name',
        allowNull: true,
    },
    description: {
        type: Sequelize.STRING(255),
        field: 'description',
        allowNull: true,
    },
    homeUrl: {
        type: Sequelize.STRING(255),
        field: 'home_url',
        allowNull: true,
    },
}, {
    timestamps: false,
});

export default OrganizationInfo;
