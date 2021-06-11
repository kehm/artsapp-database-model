import Sequelize from 'sequelize';
import postgres from '../../../config/postgres.js';
import Character from './Character.js';

/**
 * Define table for character states
 */
const CharacterState = postgres.define('character_state', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        field: 'character_state_id',
        autoIncrement: true,
    },
    characterId: {
        type: Sequelize.INTEGER,
        field: 'taxon_character_id',
        allowNull: true,
        references: {
            model: Character,
            key: 'taxon_character_id',
        },
    },
}, {
    timestamps: false,
});

export default CharacterState;
