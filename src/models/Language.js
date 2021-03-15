import Sequelize from 'sequelize';
import postgres from '../../../config/postgres.js';

/**
 * Define table for languages
 */
const Language = postgres.define('language', {
    code: {
        type: Sequelize.STRING(5),
        primaryKey: true,
        field: 'language_code'
    },
    name: {
        type: Sequelize.STRING(30),
        field: 'name',
        allowNull: false,
        unique: true
    }
}, {
    timestamps: false
});

export default Language;
