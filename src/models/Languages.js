import Sequelize from 'sequelize';
import postgres from '../../../config/postgres.js';
import Key from './Key.js';
import Language from './Language.js';

/**
 * Define many-to-many table for key languages
 */
const Languages = postgres.define('key_languages', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        field: 'key_languages_id',
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
    languageCode: {
        type: Sequelize.STRING(5),
        field: 'language_code',
        allowNull: false,
        references: {
            model: Language,
            key: 'language_code',
        },
    },
}, {
    timestamps: false,
});

export default Languages;
