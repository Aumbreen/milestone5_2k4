// GGet references to the form and display area
var form = document.getElementById("resume-form");
var resumedisplayelement = document.getElementById("resume-display");
var shareablelinkcontainer = document.getElementById("sharable-link-container");
var shareablelinkElement = document.getElementById("shareable-link");
var downloadPdfButton = document.getElementById("download-pdf");
// handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault();
    // collect input values
    var username = document.getElementById("username").value;
    var name = document.getElementById("name").value;
    var fatherName = document.getElementById("fatherName").value;
    var contactDatail = document.getElementById("contactDatail").value;
    var email = document.getElementById("email").value;
    var NIC = document.getElementById("NIC").value;
    var education = document.getElementById("education").value;
    var skills = document.getElementById("skills").value;
    var experience = document.getElementById("experience").value;
    var resumeData = {
        username: username,
        name: name,
        fatherName: fatherName,
        contactDatail: contactDatail,
        email: email,
        NIC: NIC,
        education: education,
        skills: skills,
        experience: experience
    };
    localStorage.setItem(username, JSON.stringify(resumeData));
    // generate resume content dynamically
    var resumHTML = "\n<h1><b> Editable Resume</b></h1>\n<h3>Personal Information</h3>\n<p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n<p><b>fatherName:</b><span contenteditable=\"true\">").concat(fatherName, "</span></p>\n<p><b>ContactDetail:</b><span contenteditable=\"true\">").concat(contactDatail, "</span></p>\n<p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n<p><b>NIC:<b/><span contenteditable=\"true\">").concat(NIC, "</span></p>\n\n<h3>Education</h3>\n<p contenteditable=\"true\">").concat(education, "</p>\n\n<h3>skills</h3>\n<p contenteditable=\"true\">").concat(skills, "</p>\n<h3>Experience</h3>\n<p contenteditable=\"true\">").concat(experience, "</p>\n");
    // display the generated  resume 
    resumedisplayelement.innerHTML = resumHTML;
    var shareableURL = "".concat(window.localStorage.origin, "?username").concat(encodeURIComponent(username));
    // display shareable link;
    shareablelinkcontainer.style.display = "block";
    shareablelinkElement.href = shareableURL;
    shareablelinkElement.textContent = shareableURL;
});
// handle PDF download
downloadPdfButton.addEventListener('click', function () {
    window.print();
});
// ;prefill the form based on username in the URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        // Autofill form if data is found in localstorage
        var savedresumeData = localStorage.getItem("username");
        if (savedresumeData) {
            var resumeData = JSON.parse(savedresumeData);
        }
    }
});
