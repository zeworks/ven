enum PERMISSION_PARENT_KEYS {
	ModuleUsers = "module_users",
	ModuleRoles = "module_roles",
	ModuleProjects = "module_projects",
}

export const PERMISSION_KEYS = [
	//#region Users
	{
		name: "Create User",
		key: "permission_users_create",
		parent: PERMISSION_PARENT_KEYS.ModuleUsers,
		status: true,
	},
	{
		name: "Update User",
		key: "permission_users_update",
		parent: PERMISSION_PARENT_KEYS.ModuleUsers,
		status: true,
	},
	{
		name: "Delete User",
		key: "permission_users_delete",
		parent: PERMISSION_PARENT_KEYS.ModuleUsers,
		status: true,
	},
	{
		name: "View User",
		key: "permission_users_view",
		parent: PERMISSION_PARENT_KEYS.ModuleUsers,
		status: true,
	},
	{
		name: "Disable User",
		key: "permission_users_disable",
		parent: PERMISSION_PARENT_KEYS.ModuleUsers,
		status: true,
	},
	{
		name: "Enable User",
		key: "permission_users_enable",
		parent: PERMISSION_PARENT_KEYS.ModuleUsers,
		status: true,
	},
	//#endregion
	//#region Roles
	{
		name: "Create Role",
		key: "permission_roles_create",
		parent: PERMISSION_PARENT_KEYS.ModuleRoles,
		status: true,
	},
	{
		name: "Update Role",
		key: "permission_roles_update",
		parent: PERMISSION_PARENT_KEYS.ModuleRoles,
		status: true,
	},
	{
		name: "Delete Role",
		key: "permission_roles_delete",
		parent: PERMISSION_PARENT_KEYS.ModuleRoles,
		status: true,
	},
	{
		name: "View Role",
		key: "permission_roles_view",
		parent: PERMISSION_PARENT_KEYS.ModuleRoles,
		status: true,
	},
	//#endregion
	//#region Projects
	{
		name: "Create Project",
		key: "permission_projects_create",
		parent: PERMISSION_PARENT_KEYS.ModuleProjects,
		status: true,
	},
	{
		name: "Update Project",
		key: "permission_projects_update",
		parent: PERMISSION_PARENT_KEYS.ModuleProjects,
		status: true,
	},
	{
		name: "Delete Project",
		key: "permission_projects_delete",
		parent: PERMISSION_PARENT_KEYS.ModuleProjects,
		status: true,
	},
	{
		name: "View Project",
		key: "permission_projects_view",
		parent: PERMISSION_PARENT_KEYS.ModuleProjects,
		status: true,
	},
	//#endregion
]
