import {withLogging} from "gillog"

import Avatar from "@material-ui/core/Avatar"

function TeacherAvatar({log, teacher}) {

    // ====== FUNCTIONS ======>
    function extractInitials(name) {
        // TODO: implement initials extraction for teacher "Avatars"
        return "AA"
    }

    // ====== RENDER ======>
    return (
        <Avatar>
            {extractInitials(teacher.name)}
        </Avatar>
    )
}

TeacherAvatar.propTypes = {}

export default withLogging(TeacherAvatar)
