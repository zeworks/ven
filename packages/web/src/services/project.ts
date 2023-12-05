export const useProjectsQuery = () => {
	return {
		projects: [],
	}
}

export const useProjectQuery = () => {
	return {
		isLoaded: true,
		project: undefined as any,
	}
}
