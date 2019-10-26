import {clientSide} from "gillog"

const log = clientSide.getLogger("processData")

export default async function processData(data) {
    return (async () => {

        const processedData = {}

        processedData.courses = processCourses(data.Program)
        processedData.teachers = processTeachers(data.Personal)

        return processedData

        function processCourses(programs) {

            const processedCourses = []

            Object.keys(programs).forEach(programName => {
                programs[programName].Kurser.forEach(course => {
                    const processedCourse = {
                        name: course.namn,
                        courseCode: course.kurskod,
                        hours: course.timmar,
                        period: course.period,
                        program: programName,
                        teachers: processTeachersInCourse(course.personal, course.namn)
                    }
                    processedCourses.push(processedCourse)
                })
            })

            return processedCourses

            function processTeachersInCourse(teachers, courseName) {

                const processedTeachers = []

                if (teachers) {
                    teachers.forEach(teacher => {
                        const processedTeacher = symmetryCheckTeacherInCourse({
                            name: teacher.namn,
                            hours: [...teacher.timmar]
                        }, courseName)
                        if (processedTeacher) processedTeachers.push(processedTeacher)
                    })
                }

                return processedTeachers
            }
        }

        function processTeachers(teachers) {

            const processedTeachers = []

            teachers.forEach(teacher => {
                const name = `${teacher.Förnamn} ${teacher.Efternamn}`.trim()
                const processedTeacher = {
                    name: name,
                    courses: processCoursesInTeacher(teacher.Kurser, name)
                }
                processedTeachers.push(processedTeacher)
            })

            return processedTeachers

            function processCoursesInTeacher(courses, teacherName) {

                const processedCourses = []

                if (courses) {
                    courses.forEach(course => {
                        const processedCourse = symmetryCheckCourseInTeacher({
                            name: course.namn,
                            hours: [...course.timmar]
                        }, teacherName)
                        if (processedCourse) processedCourses.push(processedCourse)
                    })
                }

                return processedCourses
            }
        }

        function symmetryCheckTeacherInCourse(teacherInCourse, courseName) {

            // Initializing a variable with the teacher's name
            const teacherName = teacherInCourse.name

            // Finding the teacher document
            const teacher = data.Personal.find(teacher => {
                return `${teacher.Förnamn} ${teacher.Efternamn}` === teacherName
            })

            // If the teacher document was found (`teacher` isn't null, a.k.a. false) then continue checking.
            // Else log a warning about teacher not existing and remove assignment entry from course.
            if (teacher) {
                // Next step is finding out whether the teacher document has a `courses` property (which in the unprocessed data
                // is called `Kurser`)
                if (teacher.Kurser) {
                    // Finding the course assignment within the `courses` property of the teacher document
                    const courseInTeacher = teacher.Kurser.find(course => course.namn === courseName)
                    // If a matching course assignment is found then continue checking that the hours match
                    if (courseInTeacher) {
                        // Initializing variable that indicates whether the hours match
                        let hoursMatch = true
                        // Matching the values in the hours objects of the corresponding assignments
                        for (let i = 0; i < 4; i++) {
                            if (courseInTeacher.timmar[i] !== teacherInCourse.hours[i]) {
                                hoursMatch = false
                                break
                            }
                        }
                        // If the hours don't match then log a warning about it and correct the mismatch by writing the hours
                        // of the teacher assigment over the hours of the course assignment
                        if (!hoursMatch) {
                            log.warn(
                                `Hours mismatch in ${teacherName}'s assignment to ${courseName} and ${courseName}'s assignment to ${teacherName}! ` +
                                `Overwriting hours in ${courseName}'s assignment to ${teacherName} with the hours in ${teacherName}'s assignment to ${courseName}`
                            )
                            courseInTeacher.timmar = [...teacherInCourse.hours]
                        }
                        // Returning the teacher assignment (which has now been guaranteed to be valid) to the course
                        return teacherInCourse
                    }
                }
                // If the teacher document doesn't have a `courses` property, or if the `courses` property doesn't contain an entry
                // for the course the teacher was assigned to, then log a warning about the "asymmetry" and add an entry into the `courses`
                // property that assign that course to the teacher.
                // (If the `courses` property doesn't exist, then the property is of course created first.)
                log.warn(
                    `${teacherName} is assigned to ${courseName} but ${courseName} isn't assigned to ${teacherName}! ` +
                    `Adding assignment entry to teacher`
                )
                if (teacher.Kurser) teacher.Kurser.push({namn: courseName, timmar: [...teacherInCourse.hours]})
                else teacher.Kurser = [{namn: courseName, timmar: [...teacherInCourse.hours]}]
                // Returning the teacher assignment (which has now been guaranteed to be valid) to the course
                return teacherInCourse
            } else {
                log.warn(
                    `The teacher "${teacherName}" assigned to ${courseName} doesn't exist! ` +
                    `Deleting assignment entry from course`
                )
                // Returning null to indicate that the teacher assignment has been removed (doesn't exist anymore)
                return null
            }
        }

        function symmetryCheckCourseInTeacher(courseInTeacher, teacherName) {

            // Initializing a variable with the course's name
            const courseName = courseInTeacher.name

            // Finding the course document
            const course = processedData.courses.find(course => {
                return course.name === courseName
            })

            // If the course document was found (`course` isn't null, a.k.a. false) then continue checking.
            // Else log a warning about course not existing and remove assignment entry from teacher.
            if (course) {
                // Next step is finding out whether the course document has a `teachers` property
                if (course.teachers) {
                    // Finding the teacher assignment within the `teachers` property of the course document
                    const teacherInCourse = course.teachers.find(teacher => teacher.name === teacherName)
                    // If a matching course assignment is found then continue checking that the hours match
                    if (teacherInCourse) {
                        // Initializing variable that indicates whether the hours match
                        let hoursMatch = true
                        // Matching the values in the hours objects of the corresponding assignments
                        for (let i = 0; i < 4; i++) {
                            if (teacherInCourse.hours[i] !== courseInTeacher.hours[i]) {
                                hoursMatch = false
                                break
                            }
                        }
                        // If the hours don't match then log a warning about it and correct the mismatch by writing the hours
                        // of the course assigment over the hours of the teacher assignment
                        if (!hoursMatch) {
                            log.warn(
                                `Hours mismatch in ${courseName}'s assignment to ${teacherName} and ${teacherName}'s assignment to ${courseName}! ` +
                                `Overwriting hours in ${teacherName}'s assignment to ${courseName} with the hours in ${courseName}'s assignment to ${teacherName}`
                            )
                            teacherInCourse.hours = [...courseInTeacher.hours]
                        }
                        // Returning the course assignment (which has now been guaranteed to be valid) to the teacher
                        return courseInTeacher
                    }
                }
                // If the course document doesn't have a `teachers` property, or if the `teachers` property doesn't contain an entry
                // for the teacher the course was assigned to, then log a warning about the "asymmetry" and add an entry into the `teachers`
                // property that assigns that teacher to the course.
                // (If the `teachers` property doesn't exist, then the property is of course created first.)
                log.warn(
                    `${courseName} is assigned to ${teacherName} but ${teacherName} isn't assigned to ${courseName}! ` +
                    `Adding assignment entry to course`
                )
                if (course.teachers) course.teachers.push({name: teacherName, hours: [...courseInTeacher.hours]})
                else course.teachers = [{name: teacherName, hours: [...courseInTeacher.hours]}]
                // Returning the course assignment (which has now been guaranteed to be valid) to the teacher
                return courseInTeacher
            } else {
                log.warn(
                    `The course "${courseName}" assigned to ${teacherName} doesn't exist! ` +
                    `Deleting assignment entry from teacher`
                )
                // Returning null to indicate that the course assignment has been removed (doesn't exist anymore)
                return null
            }
        }
    })().catch(error => log.error(error.stack))
}
