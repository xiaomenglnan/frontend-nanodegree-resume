/*
This is empty on purpose! Your code to build the resume will go here.
 */
/*var formattedName = HTMLheaderName.replace("%data%", "Meng");
var formattedRole = HTMLheaderRole.replace("%data%", "Front-end developer");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);*/

var employee = {
    "name": "meng nana",
    "role": "Front-end Engineer"
};
var formattedName = HTMLheaderName.replace("%data%", employee.name);
var formattedRole = HTMLheaderRole.replace("%data%", employee.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

/*var formattedConnect = HTMLcontactGeneric.replace("%contact%", "contact");
var formattedGeneric = formattedConnect.replace("%data%", "xiaomenglnan@126.com");
var formattedMobile = HTMLmobile.replace("%data%", "13230316525");
var formattedEmail = HTMLemail.replace("%data%", "xiaomenglnan@126.com");
var formattedTwitter = HTMLtwitter.replace("%data%", "xiaomlingnan");
var formattedGithub = HTMLgithub.replace("%data%", "xiaomenglnan");
var formattedBlog = HTMLblog.replace("%data%", "xiaomenglnan.github.io");
var formattedLocation = HTMLlocation.replace("%data%", "China");
$("#topContacts").prepend(formattedGeneric);
$("#topContacts").prepend(formattedMobile);
$("#topContacts").prepend(formattedEmail);
$("#footerContacts").prepend(formattedTwitter);
$("#footerContacts").prepend(formattedGithub);
$("#footerContacts").prepend(formattedBlog);
$("#footerContacts").prepend(formattedLocation);*/

/*var formattedPic = HTMLbioPic.replace("%data%", "images/selfy.jpg");
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", "Love and Life");
$("#header").append(formattedPic);
$("#header").append(formattedWelcomeMsg);

var formattedSkills1 = HTMLskills.replace("%data%", "HTML");
var formattedSkills2 = HTMLskills.replace("%data%", "Javascript");
$("#header").append(HTMLskillsStart);
$("#skills").append(formattedSkills1);
$("#skills li:last").append(formattedSkills2);*/
var bio = {
    "src": "images/selfy.jpg",
    "welcomeMsg": "Love and life",
    contacts:{
        "location":"Daqing,China",
        "generic":"xiaomenglnan@126.com",
        "mobile":"13230316525",
        "twitter":"xiaomlingnan",
        "github":"xiaomenglnan",
        "blog":"xiaomenglnan.github.io",
        "email":"xiaomenglnan@126.com"
    }
};
formattedConnect = HTMLcontactGeneric.replace("%contact%", "contact");
var formattedGeneric = formattedConnect.replace("%data%", bio.contacts.generic);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedBlog = HTMLblog.replace("%data%",bio.contacts.blog );
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").prepend(formattedGeneric);
$("#topContacts").prepend(formattedMobile);
$("#topContacts").prepend(formattedEmail);
$("#footerContacts").prepend(formattedTwitter);
$("#footerContacts").prepend(formattedGithub);
$("#footerContacts").prepend(formattedBlog);
$("#footerContacts").prepend(formattedLocation);
var formattedPic = HTMLbioPic.replace("%data%", bio.src);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
$("#header").append(formattedPic);
$("#header").append(formattedWelcomeMsg);

/*var work = {
    jobs: [{
        "Employer": "Yuan",
        "Title": "Intern",
        "Date": "1",
        "Location": "Daqing",
        "Description": "Learning in a place near home"
    }, {
        "Employer": "Yuan",
        "Title": "Intern",
        "Date": "1",
        "Location": "Daqing",
        "Description": "Learning in a place near home"
    }]
};*/
/*
var formattedEmployer = HTMLworkEmployer.replace("%data%", work.Employer);
var formattedTitle = HTMLworkTitle.replace("%data%", work.Title);
var formattedPosition = formattedEmployer + formattedTitle;
var formattedDates = HTMLworkDates.replace("%data%", work.Date);
var formattedLocation = HTMLworkLocation.replace("%data%", work.Location);
var formattedDescription = HTMLworkDescription.replace("%data%", work.Description);
$("#workExperience").append(HTMLworkStart);
$(".work-entry").append(formattedPosition);
$(".work-entry").append(formattedDates);
$(".work-entry").append(formattedLocation);
$(".work-entry").append(formattedDescription);*/

var education = {
    "schools": [{
        "degree": "Master",
        "dates": "3",
        "location": "Qinhuangdao",
        "major": "Front-end"
    }, {
        "degree": "Bachelor",
        "dates": "4",
        "location": "Qinhuangdao",
        "major": "Front-end"
    }]
};
/*var formattedSchoolName = HTMLschoolName.replace("%data%", education["school"]);
var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education["degree"]);
var formattedSchoolDates = HTMLschoolDates.replace("%data%", education["dates"]);
var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education["location"]);
var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education["Major"]);
var formattedSchool = formattedSchoolName + formattedSchoolDegree;
$("#education").append(HTMLschoolStart);
$(".education-entry").append(formattedSchool);
$(".education-entry").append(formattedSchoolDates);
$(".education-entry").append(formattedSchoolLocation);
$(".education-entry").append(formattedSchoolMajor);*/

/*var displayWork = function() {
    work.jobs.forEach(function(job) {
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.Employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.Title);
        var formattedPosition = formattedEmployer + formattedTitle;
        var formattedDates = HTMLworkDates.replace("%data%", job.Date);
        var formattedLocation = HTMLworkLocation.replace("%data%", job.Location);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.Description);
        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(formattedPosition);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDescription);
    });
};

displayWork();*/
$(document).click(function(loc) {
    // your code goes here
    console.log("clientX=" + loc.clientX);
    console.log("clientY=" + loc.clientY);
});

var work = {
    "jobs": [{
        "employer": "Udacity",
        "title": "Course Developer",
        "location": "Mountain View, CA",
        "dates": "Feb 2014 - Current",
        "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    }, {
        "employer": "LearnBIG",
        "title": "Software Engineer",
        "location": "Seattle, WA",
        "dates": "May 2013 - Jan 2014",
        "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    }, {
        "employer": "LEAD Academy Charter High School",
        "title": "Science Teacher",
        "location": "Nashville, TN",
        "dates": "Jul 2012 - May 2013",
        "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    }, {
        "employer": "Stratford High School",
        "title": "Science Teacher",
        "location": "Nashville, TN",
        "dates": "Jun 2009 - Jun 2012",
        "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    }]
};

// Your code goes here! Let me help you get started

function locationizer(work_obj) {
    var locationArray = [];
    work_obj.jobs.forEach(function(job) {
        locationArray.push(job.location);

    });
    return locationArray;
};

// Did locationizer() work? This line will tell you!
console.log(locationizer(work));

$("#main").append('<input type="button" value="internationalizeButton" onclick="inName(employee.name)">');

function inName(oldName) {
    var finalName = oldName;
    // Your code goes here!
    finalName = finalName.split(" ");

    finalName[0] = finalName[0][0].toUpperCase() +
        finalName[0].slice(1).toLowerCase();
    finalName[1] = finalName[1].toUpperCase();
    // Don't delete this line!
    finalName = finalName.join(" ");
    $("#name").text(finalName);
};

var project = {
    "title": "blog",
    "dates": "6 months",
    "description": "something i want to record",
    "image": "images/tiger.jpg"
};

project.display = function() {
    $("#projects").append(HTMLprojectStart);
    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
    var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
    var formattedProjectImage = HTMLprojectImage.replace("%data%", project.image);
    $(".project-entry:last").append(formattedProjectTitle);
    $(".project-entry:last").append(formattedProjectDates);
    $(".project-entry:last").append(formattedProjectDescription);
    $(".project-entry:last").append(formattedProjectImage);
};

project.display();

$("#mapDiv").append(googleMap);