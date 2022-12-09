// position can be: left-top | left-center | left-bottom | center | center-top | center-bottom | right-center | right-top | right-bottom

type HorizontalPosition = 'left' | 'right' | 'center'
type VerticalPosition = 'top' | 'bottom' | 'center'

// We use literals to substitute the variable in the value.
//
// type NotificationPropsType = {
//     position: `${HorizontalPosition}-${VerticalPosition}`
// }

// But we need to replace center-center with just center
// Exclude<> - replacement operator
// | 'center' - what to add to our values

type NotificationPropsType = {
    position: | Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'>
              | 'center'
}

export const Notification = ({position}: NotificationPropsType) => {
    return (
        <div>
            Notification's position - {position}
        </div>
    )
}