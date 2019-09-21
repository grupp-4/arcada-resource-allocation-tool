const utility = {
    cap(string) {
        return string.replace(/^\w/, cap => cap.toUpperCase())
    }
}

export default utility

export const cap = utility.cap
