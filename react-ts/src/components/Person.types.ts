export type Name = {
    firstName: string,
    secondName: string
}

export type PersonType = {
    name: Name
}

type PersonList = {
    // Array of Name
    names: Name[],
}

