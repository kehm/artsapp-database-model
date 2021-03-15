import Sequelize from 'sequelize';
import postgres from '../../../config/postgres.js';
import Language from './Language.js';
import Organization from './Organization.js';

/**
 * Define table for organization data in different languages
 */
const OrganizationData = postgres.define('organization_data', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        field: 'organization_data_id',
        autoIncrement: true
    },
    organizationId: {
        type: Sequelize.INTEGER,
        field: 'organization_id',
        allowNull: false,
        references: {
            model: Organization,
            key: "organization_id"
        }
    },
    languageCode: {
        type: Sequelize.STRING(5),
        field: 'language_code',
        allowNull: false,
        references: {
            model: Language,
            key: "language_code"
        }
    },
    name: {
        type: Sequelize.STRING(60),
        field: 'name',
        allowNull: false,
        unique: true
    },
    description: {
        type: Sequelize.STRING(255),
        field: 'description',
        allowNull: true
    },
    homeUrl: {
        type: Sequelize.STRING(255),
        field: 'home_url',
        allowNull: true
    }
}, {
    timestamps: false
});

export default OrganizationData;
