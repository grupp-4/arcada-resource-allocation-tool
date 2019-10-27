import {withLogging} from "gillog"

import Avatar from "@material-ui/core/Avatar"

function TeacherAvatar({log, teacher}) {

    // ====== FUNCTIONS ======>
    function extractInitials(name) {
        return name.split(" ").map((n,i,a)=> i === 0 || i+1 === a.length ? n[0] : null).join("")
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
