
export default function CreateDropdownList(dataObj) {
    if (dataObj && dataObj.courses) {
        const courseArray = dataObj.courses.map(course => {
            return ({ value: course.name, label: course.name })
        });
        console.log("The courseArray");
        console.log(courseArray);
        return courseArray;
    }
    else {
        console.log("No Data Yet in add-course")
        console.log(dataObj);
    }
}