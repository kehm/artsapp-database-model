import Sequelize from 'sequelize';
import postgres from '../../../config/postgres.js';
import Language from './Language.js';
import Revision from './Revision.js';

/**
 * Define many-to-many table for revision languages
 */
const Languages = postgres.define('revision_languages', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        field: 'revision_languages_id',
        autoIncrement: true
    },
    revisionId: {
        type: Sequelize.UUID,
        field: 'revision_id',
        allowNull: false,
        references: {
            model: Revision,
            key: "revision_id"
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
    }
}, {
    timestamps: false
});

export default Languages;
