export type ProfileProps = {
    name: string
}

export const Profile = ({name}: ProfileProps) => {
    return (
        <p>User's profile. Name is ${name} </p>
    )
}