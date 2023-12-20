import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table"
import { useToast } from "@/components/ui/use-toast"
import { Route } from "@/config/types"
import { cn } from "@/lib/utils"
import { useSessionProvider } from "@/providers/session"
import { useGetAccountsQuery } from "@/services/account"
import { Account, Status } from "@ven/graphql/dist/graphql"
import { MoreHorizontal } from "lucide-react"
import { useCallback, useMemo, useState } from "react"
import { Link } from "react-router-dom"

function EnableMemberDialog({
	data,
	onEnable,
	onCancel,
}: {
	data?: Account
	onEnable: () => void
	onCancel: () => void
}) {
	const onSetActive = useCallback(() => {
		// TODO: should call the mutation to set the account active
		// change the status to ACTIVE
		// and then call the onActive function from props
		onEnable()
	}, [onEnable])

	return (
		<AlertDialog open>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
					<AlertDialogDescription>
						You are about to <strong>activate</strong> the account of{" "}
						<strong>{data?.profile?.firstName}</strong>, are you sure?
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel onClick={onCancel}>Cancel</AlertDialogCancel>
					<AlertDialogAction onClick={onSetActive}>Activate</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}

function DisableMemberDialog({
	data,
	onDisable,
	onCancel,
}: {
	data?: Account
	onDisable: () => void
	onCancel: () => void
}) {
	const onClick = useCallback(() => {
		// TODO: should call the mutation to set the account active
		// change the status to ACTIVE
		// and then call the onActive function from props
		onDisable()
	}, [onDisable])

	return (
		<AlertDialog open>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
					<AlertDialogDescription>
						You are about to <strong>disable</strong> the account of{" "}
						<strong>{data?.profile?.firstName}</strong>, are you sure?
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel onClick={onCancel}>Cancel</AlertDialogCancel>
					<AlertDialogAction onClick={onClick}>Disable</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}

function MemberAvatar({ account }: { account: Account }) {
	return (
		<Avatar className="h-8 w-8">
			{account?.profile?.picture ? (
				<AvatarImage src={account?.profile?.picture} alt="user profile" />
			) : (
				<AvatarFallback className="text-xs">
					{[
						account?.profile?.firstName[0],
						account?.profile?.lastName?.[0],
					].join("")}
				</AvatarFallback>
			)}
		</Avatar>
	)
}

function MemberStatus({ status }: { status: Status }) {
	return (
		<Badge
			size="sm"
			variant="secondary"
			className={cn({
				"bg-emerald-400/20": status === Status.Active,
				"bg-yellow-400/50": status === Status.Pending,
				"bg-slate-600/50": status === Status.Inactive,
			})}
		>
			{status === Status.Active
				? "ACTIVE"
				: status === Status.Pending
				? "PENDING"
				: "INACTIVE"}
		</Badge>
	)
}

export function MembersList() {
	const accountsQuery = useGetAccountsQuery()
	const { session, isRoleAdmin } = useSessionProvider()
	const { toast } = useToast()

	// State
	const [enabledMember, setEnabledMember] = useState<Account>()
	const [disabledMember, setDisabledMember] = useState<Account>()

	const accounts = useMemo(
		() =>
			(accountsQuery.data?.accounts?.data || []).filter(
				(a) => a?.id !== session?.id
			),
		[accountsQuery.data, session?.id]
	)

	const renderMemberStatusAction = useCallback((account: Account) => {
		if (account?.status !== Status.Active)
			return (
				<DropdownMenuItem onClick={() => setEnabledMember(account as Account)}>
					Enable member
				</DropdownMenuItem>
			)

		return (
			<DropdownMenuItem onClick={() => setDisabledMember(account as Account)}>
				Disable member
			</DropdownMenuItem>
		)
	}, [])

	// TODO: refactor this loading state
	if (accountsQuery.isLoading) return <div>loading...</div>

	// TODO: refactor this empty state
	if (!accounts.length) return <div>no accounts</div>

	return (
		<>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead></TableHead>
						<TableHead>Name</TableHead>
						<TableHead>Status</TableHead>
						<TableHead></TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{accounts?.map((account) => (
						<TableRow key={account?.id}>
							<TableCell className="max-w-0">
								<MemberAvatar account={account as Account} />
							</TableCell>
							<TableCell>
								{[account?.profile?.firstName, account?.profile?.lastName].join(
									" "
								)}
							</TableCell>
							<TableCell>
								<MemberStatus status={account!.status} />
							</TableCell>
							<TableCell className="max-w-[20px] text-end">
								{isRoleAdmin && (
									<DropdownMenu>
										<DropdownMenuTrigger asChild>
											<Button variant="ghost" className="h-8 w-8 p-0">
												<span className="sr-only">Open menu</span>
												<MoreHorizontal className="h-4 w-4" />
											</Button>
										</DropdownMenuTrigger>
										<DropdownMenuContent align="end">
											<DropdownMenuLabel>Actions</DropdownMenuLabel>
											<DropdownMenuItem
												onClick={() => {
													navigator.clipboard.writeText(account?.id || "")
													toast({
														description: "You copied the member ID.",
													})
												}}
											>
												Copy member ID
											</DropdownMenuItem>
											{renderMemberStatusAction(account as Account)}
											<DropdownMenuSeparator />
											<DropdownMenuItem asChild>
												<Link to={`${Route.SettingsMembers}/${account?.id}`}>
													View Member
												</Link>
											</DropdownMenuItem>
										</DropdownMenuContent>
									</DropdownMenu>
								)}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			{enabledMember && (
				<EnableMemberDialog
					data={enabledMember}
					onEnable={() => setEnabledMember(undefined!)}
					onCancel={() => setEnabledMember(undefined!)}
				/>
			)}
			{disabledMember && (
				<DisableMemberDialog
					data={disabledMember}
					onDisable={() => setDisabledMember(undefined!)}
					onCancel={() => setDisabledMember(undefined!)}
				/>
			)}
		</>
	)
}
