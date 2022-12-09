// In our component, we want it to always have a value of
// isPositive, isNegative, isZero - if there is even one, there should not be any others

type RandomNumberValue = {
    value: number
}

// RandomNumberValue & {} - The entry means all of RandomNumberValue and more {}
type PositiveNumber = RandomNumberValue & {
    isPositive: boolean,
    isNegative?: never,
    isZero?: never
}

type NegativeNumber = RandomNumberValue & {
    isNegative: boolean,
    isPositive?: never,
    isZero?: never
}

type ZeroNumber = RandomNumberValue & {
    isZero: boolean,
    isNegative?: never,
    isPositive?: never,
}


type RandomNumberProps = PositiveNumber | NegativeNumber | ZeroNumber

export const RandomNumber = ({value, isPositive, isNegative, isZero}: RandomNumberProps) => {
    return (
        <div>
            {value} {isPositive && 'positive'} {isNegative && 'negative'}
            {isZero && 'zero'}
        </div>
    )
}

export const ShowRandomNumber = () => {
    return (
        <RandomNumber value={10} isPositive />
    )
}