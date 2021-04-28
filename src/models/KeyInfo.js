import Sequelize from 'sequelize';
import postgres from '../../../config/postgres.js';
import Key from './Key.js';
import Language from './Language.js';

/**
 * Define table for key info in different languages
 */
const KeyInfo = postgres.define('key_info', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        field: 'key_info_id',
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
    title: {
        type: Sequelize.STRING(60),
        field: 'title',
        allowNull: false,
    },
    description: {
        type: Sequelize.TEXT,
        field: 'description',
        allowNull: true,
    },
}, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});

export default KeyInfo;
