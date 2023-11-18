const addButton = document.querySelector("#addStudent");

  const studentList = [];

  const displayData = function (studentObj) {

    const { studname, rollno, age, studclass, division } = studentObj;

    const stud_name = document.createElement("p");
    stud_name.innerText = studname;
    const studname_div = document.createElement("div");
    studname_div?.appendChild(stud_name);

    const roll_no = document.createElement("p");
    roll_no.innerText = rollno;
    const rollno_div = document.createElement("div");
    rollno_div?.appendChild(roll_no);

    const age_tag = document.createElement("p");
    age_tag.innerText = age;
    const age_div = document.createElement("div");
    age_div?.appendChild(age_tag);
    
    const class_tag = document.createElement("p");
    class_tag.innerText = studclass;
    const class_div = document.createElement("div");
    class_div?.appendChild(class_tag);
    
    const division_tag = document.createElement("p");
    division_tag.innerText = division;
    const division_div = document.createElement("div");
    division_div?.appendChild(division_tag);


    // creating product row
    const studentRow = document.createElement("div");
    studentRow?.append(studname_div, rollno_div, age_div, class_div, division_div);
    studentRow.className = "studentRow";

    // selecting #outputsDiv to append the products data
    const outputsDiv = document.getElementById("outputsDiv");
    outputsDiv?.append(studentRow);

  };

  addButton?.addEventListener("click", function (buttonClickEvent) {
    const stud_name = document.querySelector("input#studname");
    const studName = stud_name.value;
    // console.log(`name is ${name}`);
    const roll_no = document.querySelector("input#rollno");
    const rollNo = roll_no.value;
    const age = document.querySelector("input#age");
    const studAge = age.value;
    const stud_class = document.querySelector("input#studclass");
    const studClass = stud_class.value;
    const division = document.querySelector("input#division");
    const studDivision = division.value;
    const studentObject = {
        studname: studName,
        rollno: rollNo,
      age: studAge,
      studclass: studClass,
      division: studDivision
    };
    console.log(studentObject);
    studentList?.push(studentObject);
    localStorage?.setItem("studentList", JSON.stringify(studentList));
    console.log(studentList);
    displayData(studentObject);
    studName.value = "";
    rollNo.value = "";
    studAge.value = "";
    studClass.value = "";
    studDivision.value = "";
  });

  function getStudentAndshowStudent() {
    const studentList = JSON.parse(localStorage.getItem("studentList"));
    // console.log(studentList);
    for (let studentObj of studentList) {
      displayData(studentObj);
    }
  }
  getStudentAndshowStudent();