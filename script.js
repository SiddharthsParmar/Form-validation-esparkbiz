
const sections = document.querySelectorAll('.form-section');
let currentIndex = 0;
sections.forEach((sec,index)=>console.log(index))

function showSection(index){
sections.forEach((section,i)=>{
section.classList.remove('active');
if(i===index){section.classList.add('active');}
});

}

function validateCurrentForm(){
const currentSection = sections[currentIndex];
const form = currentSection.querySelector('form');
if(form){
return form.checkValidity();
}
return true;
}

document.getElementById('nextBtn').addEventListener('click',()=>{
// if(!validateCurrentForm()){
// alert('Please fill all required fields before proceeding.');
// return;
// }
if(currentIndex < sections.length-1){
currentIndex++;
showSection(currentIndex);
}
});

document.getElementById('prevBtn').addEventListener('click',()=>{
if(currentIndex > 0){
currentIndex--;
showSection(currentIndex);
}
});

// Final Submit Validation
document.getElementById('preferencesForm').addEventListener('submit',function(e){
e.preventDefault();
if(this.checkValidity()){
alert('Form Submitted Successfully ✅');
}
});









// getting values of basic details

function getBasicDetails(){
    // e.preventDefault()
const firstNameBox = document.getElementById("firstName");
const firstName = document.getElementById("firstName").value;
const lastName = document.getElementById("lastName").value;
const email = document.getElementById("email").value;
const phone = document.getElementById("phone").value;
const genderSelected = document.querySelector('input[name="gender"]:checked').value;
const address1 = document.getElementById("address1").value;
const address2 = document.getElementById("address2").value;
const state = document.getElementById("states").value;
const city = document.getElementById("city").value;
const dateOfBirth = document.getElementById("dateofbirth").value
const relationship = document.getElementById("relationship").value
const zipcode = document.getElementById("zipcode").value;
if(genderSelected){
    console.log(genderSelected.value);
    
}

if(firstName==""){
    alert("enter valid fname")
}else if(lastName==""){
    alert("enter valid lnmae")
}else if(lastName==""){
    alert("enter valid lnmae")
}else if(email==""){
    alert("enter valid lnmae")
}else if(phone==""){
    alert("enter valid lnmae")

}else if(genderSelected==""){
    alert("select Gender")
}else if(address1 ==""){
    alert("enter the address 1")
}else if(address2==""){
    alert("enter the address 2");
}else if(city==""){
    alert("enter the city")
}else if(state==""){
    alert("enter the state")
}else if(zipcode==""){
    alert("enter the zipcode")
}else if(dateOfBirth==""){
    alert("enter the dateof birth")

}else if(relationship==""){
    alert("enter the relationship")
}

const phoneReg =  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;
if(phone.match(phoneReg)){
    // alert("phone is valid");
    console.log("phone is valid " , phone);
    console.log(firstName , lastName , email , phone , 
        genderSelected,relationship,address1, address2,city,zipcode,state , relationship,"this is  date"+dateOfBirth);
}else if(email.match(emailRegex)){
    console.log("valid email" , email);
    
}
else if(!email.match(emailRegex)){
    console.log("enter valid email");
    
}


};






// education details table table creation

const addDataBtn = document.getElementById("add-data");
const removeData =   document.getElementById("remove-data");

const degreeValue = document.getElementById("degree");
const boardValue = document.getElementById("board")
const passingYearValue = document.getElementById("year")
const percentageValue = document.getElementById("percentage")

let EducationObject = {}
let educationArray = []

const table  = document.createElement("table");
const showdata = document.getElementById("showdata")
function createTable(){
    
        const th = document.createElement("th")

        const tr  = document.createElement("tr")

        const td = document.createElement("td")

            tr.innerHTML = `<th>Degree</th><th>Board</th><th>Passing Year </th> <th>percentage</th>`

            // tr.appendChild(td) 
            table.appendChild(tr)
            showdata.appendChild(table)

}
// createTable()

const addData = () => {

    if(degreeValue.value==""){
        alert("enter Degree")
        return
    }

    if(board.value==""){
        alert("enter board")
        return
    }

    if(passingYearValue.value==""){
        alert("enter passing year")
        
        return
    }
      else if(isNaN(passingYearValue.value)){


        alert("passing year should be number")
        return
}
        else if(percentageValue.value==""){
        alert("enter Degree")
        return
    }



    const data = {
        degree: degreeValue.value,
        board: boardValue.value,
        passingYear: passingYearValue.value,
        percentage: percentageValue.value
    };

    educationArray.push(data);
    table.innerHTML = "";
    createTable()

    educationArray.forEach(item => {
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${item.degree}</td>
                        <td>${item.board}</td>
                        <td>${item.passingYear}</td>
                        <td>${item.percentage}</td>`;
        table.appendChild(tr);
    });
};

   
   const removeLastData = () => {
    educationArray.pop();   // removes last element from array

    table.innerHTML = "";   // clear table
    createTable()
    educationArray.forEach((item) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${item.degree}</td>
            <td>${item.board}</td>
            <td>${item.passingYear}</td>
            <td>${item.percentage}</td>
        `;
        table.appendChild(tr);
    });
};



// experience details dynamic table


// create table header
const JobTable = document.createElement("table");
const showExperienceData = document.getElementById("showExperienceData");


const tableHeaderInject=()=>{

    const tr= document.createElement("tr")
    tr.innerHTML = `<th>Company name</th><th>From Date</th><th>To date</th><th>Annual Package</th><th>Reason To leave</th> <th>Ref Contact No</th><th>Reference Contact name</th>`
tr.style.fontSize = "small"
tr.style.padding = "1px 3px"
JobTable.appendChild(tr)
showExperienceData.appendChild(JobTable)
}
tableHeaderInject()


//job data geathering




const companyName  = document.getElementById("company");
const fromdate = document.getElementById("fromdate")
const todate = document.getElementById("todate")
const annualPackage = document.getElementById("annualPackage")
const leaveReason = document.getElementById("leaveReason")
const refContactNumber = document.getElementById("refContact")
const refContactName = document.getElementById("refName");













const submitJobData=()=>{


if(companyName.value==""){
    alert("enter company name")
    return
}else if(fromdate.value == ""){
alert("enter from date")
    return
}else if(todate.value == ""){
    alert("enter to date")
    return
}else if(annualPackage.value == ""){
    alert("enter annual package")
    return
}else if(leaveReason.value == ""){
    alert("enter leave reason")
    return
}else if(refContactNumber.value == ""){
    alert("enter  reference contact number")
    return
}else if(refContactName.value == ""){
    alert("enter reference contact name")
    return
}


console.log(companyName.value , fromdate.value , todate.value , annualPackage.value , leaveReason.value 

    ,refContactNumber.value , refContactName.value
);
}
const jobSubmitButton = document.getElementById("submitJob")

jobSubmitButton.addEventListener("click",submitJobData)


const addJobData=()=>{
    let currentDate = new Date().toISOString()
console.log(currentDate);
console.log(fromdate.value);


if(companyName.value==""){
    alert("enter company name")
    return
}else if(fromdate.value == ""){
alert("enter from date")
    return
}else if(fromdate.value > currentDate){
    alert("enter valid date");
    return
}




else if(todate.value == ""){
    alert("enter to date")
    return
}else if(annualPackage.value == ""){
    alert("enter annual package")
    return
}else if(leaveReason.value == ""){
    alert("enter leave reason")
    return
}else if(refContactNumber.value == ""){
    alert("enter  reference contact number")
    return
}else if(isNaN(refContactNumber.value)){
    alert("ref contact is not a num")
    return
}



else if(refContactName.value == ""){
    alert("enter reference contact name")
    return
}
    const jobDatarow = document.createElement('tr')
    const jobData = document.createElement("td")
    jobDatarow.innerHTML=`<td>${companyName.value}</td><td>${fromdate.value}</td><td>${todate.value}</td><td>${annualPackage.value}</td><td>${leaveReason.value}</td><td>${refContactNumber.value}</td><td>${refContactName.value}</td>`
    JobTable.appendChild(jobDatarow)
console.log("data success");

}


const languageChecks = document.querySelectorAll(".language-check");
const skills = document.querySelectorAll(".skill");

let languageArray = [];

languageChecks.forEach(lang => {

lang.addEventListener("change", function(){

let language = this.value;

let relatedSkills = document.querySelectorAll(
`.skill[data-language="${language}"]`
);

if(this.checked){

relatedSkills.forEach(skill=>{
skill.disabled = false;
});

languageArray.push({
language: language,
skills: []
});

}
else{

relatedSkills.forEach(skill=>{
skill.checked = false;
skill.disabled = true;
});

languageArray = languageArray.filter(l => l.language !== language);

}

console.log(languageArray);

});

});


skills.forEach(skill=>{

skill.addEventListener("change", function(){

let language = this.dataset.language;

let langObj = languageArray.find(l => l.language === language);

if(!langObj) return;

if(this.checked){

langObj.skills.push(this.value);

}else{

langObj.skills = langObj.skills.filter(s => s !== this.value);

}

console.log(languageArray);

});

});

// technologies known 

const techChecks = document.querySelectorAll(".tech-check");
const techLevels = document.querySelectorAll(".tech-level");

let technologies = [];


// Enable / Disable radio buttons
techChecks.forEach(tech => {

tech.addEventListener("change", function(){

let techName = this.value;

let relatedLevels = document.querySelectorAll(
`.tech-level[data-tech="${techName}"]`
);

if(this.checked){

relatedLevels.forEach(radio=>{
radio.disabled = false;
});

technologies.push({
technology: techName,
level: ""
});

}else{

relatedLevels.forEach(radio=>{
radio.checked = false;
radio.disabled = true;
});

technologies = technologies.filter(t => t.technology !== techName);

}

console.log(technologies);

});

});


// Store selected level
techLevels.forEach(level => {

level.addEventListener("change", function(){

let techName = this.dataset.tech;

let techObj = technologies.find(t => t.technology === techName);

if(techObj){
techObj.level = this.value;
}

console.log(technologies);

});

});

const form = document.getElementById("preferencesForm");

form.addEventListener("submit", function(e){

e.preventDefault(); // stop page reload

const location = document.getElementById("location").value.trim();
const notice = document.getElementById("notice").value.trim();
const expectedCtc = document.getElementById("expectedCtc").value.trim();


// validation
if(location === ""){
alert("Please select preferred location");
return;
}

if(notice === ""){
alert("Please enter notice period");
return;
}

if(expectedCtc === ""){
alert("Please enter expected CTC");
return;
}

if(isNaN(expectedCtc)){
alert("Expected CTC must be a number");
return;
}


// final object
const preferencesData = {
location: location,
notice_period: notice,
expected_ctc: expectedCtc
};

console.log(preferencesData);
})  

