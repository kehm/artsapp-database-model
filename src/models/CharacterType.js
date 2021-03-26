import Sequelize from 'sequelize';
import postgres from '../../../config/postgres.js';

/**
 * Define table for character types
 */
const CharacterType = postgres.define('character_type', {
    name: {
        type: Sequelize.STRING(30),
        primaryKey: true,
        field: 'character_type_name'
    },
    description: {
        type: Sequelize.STRING(60),
        field: 'description',
        allowNull: true
    }
}, {
    timestamps: false
});

export default CharacterType;
