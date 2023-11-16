import { useGetUsersQuery } from "@/services/users"

export default function Dashboard() {
	const users = useGetUsersQuery()

	console.log(users)

	return <div>Ola</div>
}
