
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
        console.log("No Data Yet for dropdown")
        console.log(dataObj);
    }
}