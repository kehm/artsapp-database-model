import postgres from "../../../config/postgres.js";
import Collection from "../models/Collection.js";
import Collections from "../models/Collections.js";
import Editors from "../models/Editors.js";
import Group from "../models/Group.js";
import GroupParents from "../models/GroupParents.js";
import Key from "../models/Key.js";
import KeyStatus from "../models/KeyStatus.js";
import Language from "../models/Language.js";
import Languages from "../models/Languages.js";
import Media from "../models/Media.js";
import Organization from "../models/Organization.js";
import OrganizationData from "../models/OrganizationData.js";
import Permission from "../models/Permission.js";
import Permissions from "../models/Permissions.js";
import Revision from "../models/Revision.js";
import Revisions from "../models/Revisions.js";
import RevisionStatus from "../models/RevisionStatus.js";
import Role from "../models/Role.js";
import Session from "../models/Session.js";
import User from "../models/User.js";
import Workgroup from "../models/Workgroup.js";
import Workgroups from "../models/Workgroups.js";
import { keyStatus, revisionStatus, roles, permissions, rolePermissions, languages } from "./defaults.js";

/**
 * Sync tables
 */
const syncTables = () => {
    return new Promise((resolve, reject) => {
        postgres.sync({ force: process.env.POSTGRES_FORCE === 'true' }).then(() => resolve()).catch(err => reject(err));
    });
}

/**
 * Insert default values in tables
 */
const initDefaults = () => {
    return new Promise((resolve, reject) => {
        let promises = [];
        keyStatus.forEach(status => {
            promises.push(new Promise((resolve, reject) => {
                KeyStatus.findOrCreate({
                    where: {
                        name: status.name
                    },
                    defaults: status
                }).then(() => resolve()).catch(err => reject(err));
            }));
        });
        revisionStatus.forEach(status => {
            promises.push(new Promise((resolve, reject) => {
                RevisionStatus.findOrCreate({
                    where: {
                        name: status.name
                    },
                    defaults: status
                }).then(() => resolve()).catch(err => reject(err));
            }));
        });
        roles.forEach(role => {
            promises.push(new Promise((resolve, reject) => {
                Role.findOrCreate({
                    where: {
                        name: role.name
                    },
                    defaults: role
                }).then(() => resolve()).catch(err => reject(err));
            }));
        });
        permissions.forEach(permission => {
            promises.push(new Promise((resolve, reject) => {
                Permission.findOrCreate({
                    where: {
                        name: permission.name
                    },
                    defaults: permission
                }).then(() => resolve()).catch(err => reject(err));
            }));
        });
        languages.forEach(language => {
            promises.push(new Promise((resolve, reject) => {
                Language.findOrCreate({
                    where: {
                        name: language.name
                    },
                    defaults: language
                }).then(() => resolve()).catch(err => reject(err));
            }));
        });
        Promise.all(promises).then(() => {
            promises = [];
            rolePermissions.forEach(rolePermission => {
                promises.push(new Promise((resolve, reject) => {
                    Permissions.findOrCreate({
                        where: {
                            role: rolePermission.role,
                            permission: rolePermission.permission
                        },
                        defaults: rolePermission
                    }).then(() => resolve()).catch(err => reject(err));
                }));
            });
            Promise.all(promises).then(() => resolve()).catch(err => reject(err));
        }).catch(err => reject(err));
    });
}

/**
 * Sync and populate tables
 */
const initPostgres = async () => {
    await syncTables();
    await initDefaults();
}

export default initPostgres;
