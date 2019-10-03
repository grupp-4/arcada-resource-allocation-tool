export default function processData(data) {

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
                    hours: {
                        p1: course.period === 1 ? course.timmar : 0,
                        p2: course.period === 2 ? course.timmar : 0,
                        p3: course.period === 3 ? course.timmar : 0,
                        p4: course.period === 4 ? course.timmar : 0
                    },
                    period: course.period,
                    program: programName,
                    teacher: course.lärare ? course.lärare : ""
                }
                processedCourses.push(processedCourse)
            })
        })
        return processedCourses
    }

    function processTeachers(teachers) {
        const processedTeachers = []
        teachers.forEach(teacher => {
            const processedTeacher = {
                firstName: teacher.Förnamn,
                lastName: teacher.Efternamn
            }
            processedTeachers.push(processedTeacher)
        })
        return processedTeachers
    }
}
