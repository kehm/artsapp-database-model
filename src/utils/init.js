import postgres from '../../../config/postgres.js';
import Character from '../models/Character.js';
import CharacterState from '../models/CharacterState.js';
import CharacterType from '../models/CharacterType.js';
import Collection from '../models/Collection.js';
import CollectionInfo from '../models/CollectionInfo.js';
import CollectionMedia from '../models/CollectionMedia.js';
import Collections from '../models/Collections.js';
import Editors from '../models/Editors.js';
import Group from '../models/Group.js';
import GroupInfo from '../models/GroupInfo.js';
import GroupMedia from '../models/GroupMedia.js';
import GroupParents from '../models/GroupParents.js';
import Key from '../models/Key.js';
import KeyInfo from '../models/KeyInfo.js';
import KeyMedia from '../models/KeyMedia.js';
import KeyStatus from '../models/KeyStatus.js';
import Language from '../models/Language.js';
import Languages from '../models/Languages.js';
import Media from '../models/Media.js';
import MediaInfo from '../models/MediaInfo.js';
import MediaType from '../models/MediaType.js';
import Organization from '../models/Organization.js';
import OrganizationInfo from '../models/OrganizationInfo.js';
import OrganizationStatus from '../models/OrganizationStatus.js';
import Permission from '../models/Permission.js';
import Permissions from '../models/Permissions.js';
import Publishers from '../models/Publishers.js';
import Revision from '../models/Revision.js';
import Revisions from '../models/Revisions.js';
import RevisionStatus from '../models/RevisionStatus.js';
import Role from '../models/Role.js';
import RoleInfo from '../models/RoleInfo.js';
import Session from '../models/Session.js';
import Taxon from '../models/Taxon.js';
import User from '../models/User.js';
import Workgroup from '../models/Workgroup.js';
import Workgroups from '../models/Workgroups.js';
import {
    keyStatus, revisionStatus, organizationStatus, roles, permissions,
    rolePermissions, languages, characterTypes, mediaTypes, roleInfo,
} from './defaults.js';
import initDefaultsTest from './init-test.js';

/**
 * Initialize table associations
 */
const initAssociations = () => new Promise((resolve, reject) => {
    try {
        // taxon_character.character_type_name
        Character.belongsTo(CharacterType, { foreignKey: { name: 'character_type_name' } });
        CharacterType.hasOne(Character, { foreignKey: { name: 'character_type_name' } });
        // taxon_character.artsapp_key_id
        Character.belongsTo(Key, { foreignKey: { name: 'artsapp_key_id' } });
        Key.hasOne(Character, { foreignKey: { name: 'artsapp_key_id' } });
        // character_state.taxon_character_id
        CharacterState.belongsTo(Character, { foreignKey: { name: 'taxon_character_id' } });
        Character.hasOne(CharacterState, { foreignKey: { name: 'taxon_character_id' } });
        // collection.workgroup_id
        Collection.belongsTo(Workgroup, { foreignKey: { name: 'workgroup_id' } });
        Workgroup.hasOne(Collection, { foreignKey: { name: 'workgroup_id' } });
        // collection.created_by
        Collection.belongsTo(User, { foreignKey: { name: 'created_by' } });
        User.hasOne(Collection, { foreignKey: { name: 'created_by' } });
        // collection_info.collection_id
        CollectionInfo.belongsTo(Collection, { foreignKey: { name: 'collection_id' } });
        Collection.hasOne(CollectionInfo, { foreignKey: { name: 'collection_id' } });
        // collection_info.language_code
        CollectionInfo.belongsTo(Language, { foreignKey: { name: 'language_code' } });
        Language.hasOne(CollectionInfo, { foreignKey: { name: 'language_code' } });
        // key_collections
        Key.belongsToMany(Collection, { through: 'key_collections', as: 'keys_collections', foreignKey: 'artsapp_key_id', otherKey: 'collection_id' });
        Collection.belongsToMany(Key, { through: 'key_collections', as: 'collections_keys', foreignKey: 'collection_id', otherKey: 'artsapp_key_id' });
        // key_collections.artsapp_key_id
        Collections.belongsTo(Key, { foreignKey: { name: 'artsapp_key_id' } });
        Key.hasOne(Collections, { foreignKey: { name: 'artsapp_key_id' } });
        // key_editors
        Key.belongsToMany(User, { through: 'key_editors', as: 'keys_editors', foreignKey: 'artsapp_key_id', otherKey: 'artsapp_user_id' });
        User.belongsToMany(Key, { through: 'key_editors', as: 'users_editors', foreignKey: 'artsapp_user_id', otherKey: 'artsapp_key_id' });
        // key_editors.artsapp_user_id
        Editors.belongsTo(User, { foreignKey: { name: 'artsapp_user_id' } });
        User.hasOne(Editors, { foreignKey: { name: 'artsapp_user_id' } });
        // key_group.created_by
        Group.belongsTo(User, { foreignKey: { name: 'created_by' } });
        User.hasOne(Group, { foreignKey: { name: 'created_by' } });
        // key_group_info.key_group_id
        GroupInfo.belongsTo(Group, { foreignKey: { name: 'key_group_id' } });
        Group.hasOne(GroupInfo, { foreignKey: { name: 'key_group_id' } });
        // key_group_info.language_code
        GroupInfo.belongsTo(Language, { foreignKey: { name: 'language_code' } });
        Language.hasOne(GroupInfo, { foreignKey: { name: 'language_code' } });
        // key_group_parents
        Group.belongsToMany(Group, { through: 'key_group_parents', as: 'groups', foreignKey: 'key_group_id', otherKey: 'key_group_id' });
        Group.belongsToMany(Group, { through: 'key_group_parents', as: 'group_parents', foreignKey: 'key_group_id', otherKey: 'key_group_id' });
        // artsapp_key.revision_id
        Key.belongsTo(Revision, { foreignKey: { name: 'revision_id' } });
        Revision.hasOne(Key, { foreignKey: { name: 'revision_id' } });
        // artsapp_key.key_group_id
        Key.belongsTo(Group, { foreignKey: { name: 'key_group_id' } });
        Group.hasOne(Key, { foreignKey: { name: 'key_group_id' } });
        // artsapp_key.workgroup_id
        Key.belongsTo(Workgroup, { foreignKey: { name: 'workgroup_id' } });
        Workgroup.hasOne(Key, { foreignKey: { name: 'workgroup_id' } });
        // artsapp_key.created_by
        Key.belongsTo(User, { foreignKey: { name: 'created_by' } });
        User.hasOne(Key, { foreignKey: { name: 'created_by' } });
        // artsapp_key.key_status_name
        Key.belongsTo(KeyStatus, { foreignKey: { name: 'key_status_name' } });
        KeyStatus.hasOne(Key, { foreignKey: { name: 'key_status_name' } });
        // key_info.artsapp_key_id
        KeyInfo.belongsTo(Key, { foreignKey: { name: 'artsapp_key_id' } });
        Key.hasOne(KeyInfo, { foreignKey: { name: 'artsapp_key_id' } });
        // key_info.language_code
        KeyInfo.belongsTo(Language, { foreignKey: { name: 'language_code' } });
        Language.hasOne(KeyInfo, { foreignKey: { name: 'language_code' } });
        // key_languages
        Key.belongsToMany(Language, { through: 'key_languages', as: 'keys_languages', foreignKey: 'artsapp_key_id', otherKey: 'language_code' });
        Language.belongsToMany(Key, { through: 'key_languages', as: 'languages_keys', foreignKey: 'language_code', otherKey: 'artsapp_key_id' });
        // media.media_type_name
        Media.belongsTo(MediaType, { foreignKey: { name: 'media_type_name' } });
        MediaType.hasOne(Media, { foreignKey: { name: 'media_type_name' } });
        // media.created_by
        Media.belongsTo(User, { foreignKey: { name: 'created_by' } });
        User.hasOne(Media, { foreignKey: { name: 'created_by' } });
        // key_media.media_id
        KeyMedia.belongsTo(Media, { foreignKey: { name: 'media_id' } });
        Media.hasOne(KeyMedia, { foreignKey: { name: 'media_id' } });
        // key_group_media.media_id
        GroupMedia.belongsTo(Media, { foreignKey: { name: 'media_id' } });
        Media.hasOne(GroupMedia, { foreignKey: { name: 'media_id' } });
        // collection_media.media_id
        CollectionMedia.belongsTo(Media, { foreignKey: { name: 'media_id' } });
        Media.hasOne(CollectionMedia, { foreignKey: { name: 'media_id' } });
        // media_info.media_id
        MediaInfo.belongsTo(Media, { foreignKey: { name: 'media_id' } });
        Media.hasOne(MediaInfo, { foreignKey: { name: 'media_id' } });
        // key_publishers
        Key.belongsToMany(Organization, { through: 'key_publishers', as: 'keys_publishers', foreignKey: 'artsapp_key_id', otherKey: 'organization_id' });
        Organization.belongsToMany(Key, { through: 'key_publishers', as: 'organizations_publishers', foreignKey: 'organization_id', otherKey: 'artsapp_key_id' });
        // organization_info.organization_id
        OrganizationInfo.belongsTo(Organization, { foreignKey: { name: 'organization_id' } });
        Organization.hasOne(OrganizationInfo, { foreignKey: { name: 'organization_id' } });
        // organization_info.language_code
        OrganizationInfo.belongsTo(Language, { foreignKey: { name: 'language_code' } });
        Language.hasOne(OrganizationInfo, { foreignKey: { name: 'language_code' } });
        // organization.organization_status_name
        Organization.belongsTo(OrganizationStatus, { foreignKey: { name: 'organization_status_name' } });
        OrganizationStatus.hasOne(Organization, { foreignKey: { name: 'organization_status_name' } });
        // role_info.role_id
        RoleInfo.belongsTo(Role, { foreignKey: { name: 'role_id' } });
        Role.hasOne(RoleInfo, { foreignKey: { name: 'role_id' } });
        // role_info.language_code
        RoleInfo.belongsTo(Language, { foreignKey: { name: 'language_code' } });
        Language.hasOne(RoleInfo, { foreignKey: { name: 'language_code' } });
        // role_permissions
        Role.belongsToMany(Permission, { through: 'role_permissions', as: 'roles_permissions', foreignKey: 'role_id', otherKey: 'permission_name' });
        Permission.belongsToMany(Role, { through: 'role_permissions', as: 'permissions_roles', foreignKey: 'permission_name', otherKey: 'role_id' });
        // key_revision.revision_status_name
        Revision.belongsTo(RevisionStatus, { foreignKey: { name: 'revision_status_name' } });
        RevisionStatus.hasOne(Revision, { foreignKey: { name: 'revision_status_name' } });
        // key_revision.created_by
        Revision.belongsTo(User, { foreignKey: { name: 'created_by' } });
        User.hasOne(Revision, { foreignKey: { name: 'created_by' } });
        // key_revisions
        Key.belongsToMany(Revision, { through: 'key_revisions', as: 'keys_revisions', foreignKey: 'artsapp_key_id', otherKey: 'revision_id' });
        Revision.belongsToMany(Key, { through: 'key_revisions', as: 'revisions_keys', foreignKey: 'revision_id', otherKey: 'artsapp_key_id' });
        // key_revisions.revision_id
        Revisions.belongsTo(Revision, { foreignKey: { name: 'revision_id' } });
        Revision.hasOne(Revisions, { foreignKey: { name: 'revision_id' } });
        // taxon.artsapp_key_id
        Taxon.belongsTo(Key, { foreignKey: { name: 'artsapp_key_id' } });
        Key.hasOne(Taxon, { foreignKey: { name: 'artsapp_key_id' } });
        // artsapp_user.organization_id
        User.belongsTo(Organization, { foreignKey: { name: 'organization_id' } });
        Organization.hasOne(User, { foreignKey: { name: 'organization_id' } });
        // artsapp_user.role_id
        User.belongsTo(Role, { foreignKey: { name: 'role_id' } });
        Role.hasOne(User, { foreignKey: { name: 'role_id' } });
        // workgroup.organization_id
        Workgroup.belongsTo(Organization, { foreignKey: { name: 'organization_id' } });
        Organization.hasOne(Workgroup, { foreignKey: { name: 'organization_id' } });
        // workgroup.created_by
        Workgroup.belongsTo(User, { foreignKey: { name: 'created_by' } });
        User.hasOne(Workgroup, { foreignKey: { name: 'created_by' } });
        // user_workgroups
        User.belongsToMany(Workgroup, { through: 'user_workgroups', as: 'users_workgroups', foreignKey: 'artsapp_user_id', otherKey: 'workgroup_id' });
        Workgroup.belongsToMany(User, { through: 'user_workgroups', as: 'workgroups_users', foreignKey: 'workgroup_id', otherKey: 'artsapp_user_id' });
        // user_workgroups.artsapp_user_id
        Workgroups.belongsTo(User, { foreignKey: { name: 'artsapp_user_id' } });
        User.hasOne(Workgroups, { foreignKey: { name: 'artsapp_user_id' } });
        // user_workgroups.workgroup_id
        Workgroups.belongsTo(Workgroup, { foreignKey: { name: 'workgroup_id' } });
        Workgroup.hasOne(Workgroups, { foreignKey: { name: 'workgroup_id' } });
        resolve();
    } catch (err) {
        reject(err);
    }
});

/**
 * Insert default values in tables
 */
const initDefaults = () => new Promise((resolve, reject) => {
    let promises = [];
    characterTypes.forEach((element) => {
        promises.push(CharacterType.findOrCreate({
            where: {
                name: element.name,
            },
            defaults: element,
        }));
    });
    mediaTypes.forEach((element) => {
        promises.push(MediaType.findOrCreate({
            where: {
                name: element.name,
            },
            defaults: element,
        }));
    });
    keyStatus.forEach((element) => {
        promises.push(KeyStatus.findOrCreate({
            where: {
                name: element.name,
            },
            defaults: element,
        }));
    });
    revisionStatus.forEach((element) => {
        promises.push(RevisionStatus.findOrCreate({
            where: {
                name: element.name,
            },
            defaults: element,
        }));
    });
    organizationStatus.forEach((element) => {
        promises.push(OrganizationStatus.findOrCreate({
            where: {
                name: element.name,
            },
            defaults: element,
        }));
    });
    roles.forEach((element) => {
        promises.push(Role.findOrCreate({
            where: {
                id: element.id,
            },
            defaults: element,
        }));
    });
    permissions.forEach((element) => {
        promises.push(Permission.findOrCreate({
            where: {
                name: element.name,
            },
            defaults: element,
        }));
    });
    languages.forEach((element) => {
        promises.push(Language.findOrCreate({
            where: {
                name: element.name,
            },
            defaults: element,
        }));
    });
    Promise.all(promises).then(() => {
        promises = [];
        roleInfo.forEach((element) => {
            promises.push(RoleInfo.findOrCreate({
                where: {
                    roleId: element.roleId,
                    languageCode: element.languageCode,
                },
                defaults: element,
            }));
        });
        rolePermissions.forEach((element) => {
            promises.push(Permissions.findOrCreate({
                where: {
                    roleId: element.roleId,
                    permissionName: element.permissionName,
                },
                defaults: element,
            }));
        });
        Promise.all(promises).then(() => resolve()).catch((err) => reject(err));
    }).catch((err) => reject(err));
});

/**
 * Alter primary key sequences
 */
const alterSequences = () => {
    if (process.env.POSTGRES_FORCE === 'true') {
        postgres.query(`ALTER SEQUENCE ${process.env.POSTGRES_SCHEMA}.media_media_id_seq RESTART WITH 10000;`);
        postgres.query(`ALTER SEQUENCE ${process.env.POSTGRES_SCHEMA}.taxon_taxon_id_seq RESTART WITH 2000;`);
        postgres.query(`ALTER SEQUENCE ${process.env.POSTGRES_SCHEMA}.taxon_character_taxon_character_id_seq RESTART WITH 3000;`);
        postgres.query(`ALTER SEQUENCE ${process.env.POSTGRES_SCHEMA}.character_state_character_state_id_seq RESTART WITH 4000;`);
    }
};

/**
 * Sync and populate tables
 */
const initPostgres = async () => {
    if (process.env.POSTGRES_INIT === 'true') {
        await postgres.sync({ force: process.env.POSTGRES_FORCE === 'true' });
        await initAssociations();
        await initDefaults();
        await initDefaultsTest();
        alterSequences();
    } else await initAssociations();
};

export default initPostgres;
