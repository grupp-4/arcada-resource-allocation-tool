
export default function CreateDropdownTeachers(dataObj) {
    if (dataObj && dataObj.teachers) {
        const teacherArray = dataObj.teachers.map(teacher => {
            return ({ value: teacher.firstName+' '+teacher.lastName, label: teacher.firstName+' '+teacher.lastName})
        });
        console.log("The Teacher Array");
        console.log(teacherArray);
        return teacherArray;
    }
    else {
        console.log("No Data Yet for dropdown")
        console.log(dataObj);
    }
}