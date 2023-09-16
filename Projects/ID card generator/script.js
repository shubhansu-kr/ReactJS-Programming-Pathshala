// const form = document.getElementById("idForm");
// console.log("hello");
// console.log(form);
// form.addEventListener("submit",(e)=>{
//     // e.preventDefault();
//     const form = document.querySelector("#idForm");
//     const name = form.elements["name"];
//     console.log(name);
// });
function generateCard(event){
    const n = document.getElementById("name");
    const name = n.value;
    const c = document.getElementById("college");
    const college=c.value;
    const l = document.getElementById("address");
    const location = l.value;
    const img = document.querySelector("#photo");
    // const imageEle = document.querySelector("#image");
    // imageEle.setAttribute("src",image);
    var image = document.getElementById('image');
    image.src = URL.createObjectURL(img.files[0]);
    const nameEle = document.querySelector("#cardName");
    const collegeEle = document.querySelector("#cardCollege");
    const locationEle = document.querySelector("#cardLocation");
    nameEle.innerHTML = `Name: ${name}`;
    collegeEle.innerHTML = `College: ${college}`;
    locationEle.innerHTML = `Location: ${location}`;

}