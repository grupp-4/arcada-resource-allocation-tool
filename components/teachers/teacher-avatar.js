import {withLogging} from "gillog"

import Avatar from "@material-ui/core/Avatar"

function TeacherAvatar({log, teacher}) {

    // ====== FUNCTIONS ======>
    function extractInitials() {
        // TODO: implement initials extraction for teacher "Avatars"
        return "AA"
    }

    // ====== RENDER ======>
    return (
        <Avatar>
            {extractInitials()}
        </Avatar>
    )
}

TeacherAvatar.propTypes = {}

export default withLogging(TeacherAvatar)
