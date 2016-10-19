/*Define bio json object with biography information*/
var bio = {
    "name": "Meng",
    "role": "Front-end Developer",
    "contacts": {
        "mobile": "13230316525",
        "email": "xiaomenglnan@126.com",
        "github": "xiaomenglnan",
        "twitter": "xiaomenglnan",
        "location": "Daqing,China"
    },
    "welcomeMessage": "Love and life",
    "skills": ["html", "css", "javascript", "jquery"],
    "biopic": "images/selfy.jpg",

/*Define encapsulated function in bio object to display all the related information*/
    "display": function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        $("#topContacts").append(formattedMobile);
        $("#topContacts").append(formattedEmail);
        $("#topContacts").append(formattedGithub);
        $("#topContacts").append(formattedTwitter);
        $("#topContacts").append(formattedLocation);
        $("#footerContacts").append(formattedMobile);
        $("#footerContacts").append(formattedEmail);
        $("#footerContacts").append(formattedGithub);
        $("#footerContacts").append(formattedTwitter);
        $("#footerContacts").append(formattedLocation);
        $("#header").append(formattedBioPic);
        $("#header").append(formattedWelcomeMessage);
        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function(skill) {
            var formattedSkills = HTMLskills.replace("%data%", skill);
            $("#skills").append(formattedSkills);
        });
    }
};

/*To do:display all the bio information*/
bio.display();

/*Define education json object with education information*/
var education = {
    "schools": [{
        "name": "Yanshan",
        "degree": "Bachelor",
        "location": "Qinhuangdao",
        "majors": ["Front-end Developer", "Blog developer"],
        "dates": "2010 fall",
        "url": "http://ysu.edu.cn/"
    }, {
        "name": "Kedong No.1 Middle School",
        "degree": "Senior High",
        "location": "Kedong,China",
        "majors": ["English lover", "Family lover"],
        "dates": "2007 fall",
        "url": "http://KedongNo.1.com"
    }],
    "onlineCourses": [{
        "title": "Sia",
        "school": "Mushroommie",
        "dates": "2016 summer",
        "url": "http://xiaomenglnan.github.io"
    }, {
        "title": "Front-end developer",
        "school": "Udacity",
        "dates": "2016 fall",
        "url": "https://classroom.udacity.com/nanodegrees/nd001/syllabus"
    }],

/*Define encapsulated function in education object to display all the related information*/
    "display": function() {
        $("#education").append(HTMLschoolStart);
        education.schools.forEach(function(school) {
            var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
            var formattedfSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
            var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
            $(".education-entry").append(formattedSchoolName);
            $(".education-entry").append(formattedfSchoolDegree);
            $(".education-entry").append(formattedSchoolDates);
            $(".education-entry").append(formattedLocation);
            school.majors.forEach(function(major) {
                var formattedMajor = HTMLschoolMajor.replace("%data%", major);
                $(".education-entry").append(formattedMajor);
            });
        });
        $(".education-entry").append(HTMLonlineClasses);
        education.onlineCourses.forEach(function(onlineCourse) {
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);
            var formattedOnlineURL = HTMLonlineURL.replace("%data%", onlineCourse.url);
            $(".education-entry").append(formattedOnlineTitle);
            $(".education-entry").append(formattedOnlineSchool);
            $(".education-entry").append(formattedOnlineDates);
            $(".education-entry").append(formattedOnlineURL);
        });
    }
};

/*To do:display all the education information*/
education.display();

/*Define work json object with work information*/
var work = {
    "jobs": [{
        "employer": "Yuan",
        "title": "Intern",
        "location": "Daqing,China",
        "dates": "2015 summer",
        "description": "Coding pages and testing"
    }, {
        "employer": "Yuan",
        "title": "Intern",
        "location": "Daqing,China",
        "dates": "2016 summer",
        "description": "Coding pages and testing"
    }],

/*Define encapsulated function in work object to display all the related information*/
    "display": function() {
        $("#workExperience").append(HTMLworkStart);
        work.jobs.forEach(function(job) {
            var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title);
            var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);
            $(".work-entry").append(formattedWorkEmployer);
            $(".work-entry").append(formattedWorkTitle);
            $(".work-entry").append(formattedWorkDates);
            $(".work-entry").append(formattedWorkLocation);
            $(".work-entry").append(formattedWorkDescription);
        });
    }
};

/*To do:display all the work information*/
work.display();

/*Define projects json object with projects information*/
var projects = {
    "projects": [{
        "title": "My blog in github",
        "dates": "2016-08-10",
        "description": "Record something I want to record",
        "images": ["images/dog.jpg", "images/home.jpg"]
    }, {
        "title": "Visit with Chao to Xian",
        "dates": "2016-07-23",
        "description": "Visit my boyfriend's family",
        "images": ["images/river.jpg", "images/tiger.jpg"]
    }],

/*Define encapsulated function in projects object to display all the related information*/
    "display": function() {
        $("#projects").append(HTMLprojectStart);
        projects.projects.forEach(function(project) {
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
            $(".project-entry").append(formattedProjectTitle);
            $(".project-entry").append(formattedProjectDates);
            $(".project-entry").append(formattedProjectDescription);
            project.images.forEach(function(image) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", image);
                $(".project-entry").append(formattedProjectImage);
            });
        });
    }
};

/*To do:display all the projects information*/
projects.display();

$("#mapDiv").append(googleMap);
