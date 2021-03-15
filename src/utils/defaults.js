//Database default values

export const keyStatus = [
    { name: "PRIVATE", description: "Private" },
    { name: "BETA", description: "Beta" },
    { name: "PUBLISHED", description: "Published" }
]

export const revisionStatus = [
    { name: "DRAFT", description: "Draft" },
    { name: "REVIEW", description: "Review" },
    { name: "ACCEPTED", description: "Accepted" }
]

export const roles = [
    { name: "ADMIN", description: "Administrator" },
    { name: "EDITOR", description: "Editor" },
    { name: "AUTHOR", description: "Author" },
    { name: "DEFAULT", description: "Default" }
]

export const permissions = [
    { name: "CREATE", description: "Create new keys" },
    { name: "PUBLISH", description: "Publish/unpublish keys" },
    { name: "EDIT", description: "Edit keys" },
    { name: "READ", description: "See existing keys" }
]

export const rolePermissions = [
    { role: "ADMIN", permission: "CREATE" },
    { role: "ADMIN", permission: "PUBLISH" },
    { role: "ADMIN", permission: "EDIT" },
    { role: "ADMIN", permission: "READ" },
    { role: "EDITOR", permission: "CREATE" },
    { role: "EDITOR", permission: "EDIT" },
    { role: "EDITOR", permission: "READ" },
    { role: "AUTHOR", permission: "EDIT" },
    { role: "AUTHOR", permission: "READ" },
    { role: "DEFAULT", permission: "READ" }
]

export const languages = [
    { code: "no", name: "Norwegian" },
    { code: "en", name: "English" }
]
