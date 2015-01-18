var bio = {
    "name":"John Bucklew",
    "role":"Software Engineer",
    "contacts":{"mobile":"123-456-7890",
                "email":"bucklewbiz@gmail.com",
                "github":"jbucklew",
                "twitter":"na",
                "location":"Parkville, MD"
               },
    "welcomeMessage":"Welcome to my Resume",
    "skills":["html", "css", "javascript", "jQuery", "php", "mySql" ],
    "biopic":"images/fry.jpg",
    "display":function() {
        // Add information from bio object to html page.

        // Add role and name
        var formattedRole = HTMLheaderRole.replace("%data%", this.role);
        $("#header").prepend(formattedRole);
        var formattedName = HTMLheaderName.replace("%data%", this.name);
        $("#header").prepend(formattedName);

        // Add contacts
        for(contact in this.contacts) {
            var formattedContact = HTMLcontactGeneric.replace("%contact%", contact);
            formattedContact = formattedContact.replace("%data%", this.contacts[contact]);
            $("#topContacts").append(formattedContact);
            $("#footerContacts").append(formattedContact);
        }

        // Add biopic
        var formattedBioPic = HTMLbioPic.replace("%data%", this.biopic);
        $("#header").append(formattedBioPic);

        // Add welcome message
        var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", this.welcomeMessage);
        $("#header").append(formattedWelcomeMsg);

        // Add skills
        $("#header").append(HTMLskillsStart);
        for(skill in this.skills) {
            var formattedSkill = HTMLskills.replace("%data%", this.skills[skill]);
            $("#skills").append(formattedSkill);
        }
    }
}

var education = {
    "schools":[
        {
            "name":"UMBC",
            "location":"1000 Hilltop Circle, Baltimore, MD 21250",
            "degree":"BS",
            "majors":[ "Computer Science" ],
            "dates":"1997",
            "url":"http://umbc.edu"
        },
        {
            "name":"Community College of Baltimore County",
            "location":"7201 Rossville Boulevard, Baltimore, MD 21237",
            "degree":"None",
            "majors":[ "General Studies" ],
            "dates":"1994",
            "url":"http://ccbcmd.edu"
        }
    ],
    "onlineCourses":[
        {
            "title":"Front End Web Developer",
            "school":"Udacity",
            "dates":"2015",
            "url":"https://www.udacity.com/course/nd001"
        }
    ],
    "display":function() {
        // Add information from education object to html page.

        // Add schools
        for(school in this.schools) {
            $("#education").append(HTMLschoolStart);

            // Add concatenation of school name and degree
            var formattedName = HTMLschoolName.replace("%data%", this.schools[school].name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", this.schools[school].degree);
            $(".education-entry:last").append(formattedName+formattedDegree);

            // Add date graduated
            var formattedDates = HTMLschoolDates.replace("%data%", this.schools[school].dates);
            $(".education-entry:last").append(formattedDates);

            // Add location
            var formattedLocation = HTMLschoolLocation.replace("%data%", this.schools[school].location);
            $(".education-entry:last").append(formattedLocation);

            // Add majors
            for(major in this.schools[school].majors){
                var formattedMajor = HTMLschoolMajor.replace("%data%", this.schools[school].majors[major]);
                $(".education-entry:last").append(formattedMajor);
            }
        }

        // Add online classes
        // Add header to indicate there are online courses that were attended
        $(".education-entry:last").append(HTMLonlineClasses);

        for( course in this.onlineCourses ) {
            // Add concatenation of class title and school
            var formattedTitle = HTMLonlineTitle.replace("%data%", this.onlineCourses[course].title);
            var formattedSchool = HTMLonlineSchool.replace("%data%", this.onlineCourses[course].school);
            $(".education-entry:last").append(formattedTitle + formattedSchool);

            // Add dates attended
            var formattedDates = HTMLonlineDates.replace("%data%", this.onlineCourses[course].dates);
            $(".education-entry:last").append(formattedDates);

            // Add URL of class
            var formattedURL = HTMLonlineURL.replace("%data%", this.onlineCourses[course].url);
            $(".education-entry:last").append(formattedURL);
        }
    }
}

var work = {
    "jobs":[
        {
            "employer":"AT&T",
            "title":"Software Engineer",
            "location":"7150 Standard Drive, Hanover, MD 21076",
            "dates":"1998-",
            "description":"Full stack development"
        },
        {
            "employer":"CSC",
            "title":"Intern",
            "location":"7231 Parkway Drive, Hanover, MD 21076",
            "dates":"1997-1998",
            "description":"Security"
        }
    ],
    "display":function() {
        // Add information from work object to html page.

        // Add jobs
        for(job in this.jobs){
            $("#workExperience").append(HTMLworkStart);

            // Add concatenation of employer and title
            var formattedEmployer = HTMLworkEmployer.replace("%data%", this.jobs[job].employer);
            var formattedTitle  = HTMLworkTitle.replace("%data%", this.jobs[job].title);
            $(".work-entry:last").append(formattedEmployer + " " + formattedTitle);

            // Add dates
            var formattedDates = HTMLworkDates.replace("%data%", this.jobs[job].dates);
            $(".work-entry:last").append(formattedDates);

            // Add location
            var formattedLocation = HTMLworkLocation.replace("%data%", this.jobs[job].location);
            $(".work-entry:last").append(formattedLocation);

            // Add description
            var formattedDescription = HTMLworkDescription.replace("%data%", this.jobs[job].description);
            $(".work-entry:last").append(formattedDescription);
        }
    }
}

var projects = {
    "projects":[
        {
            "title":"Project 1",
            "dates":"2001 - 2002",
            "description":"Desc 1",
            "images":["images/197x148.gif", "images/197x148.gif"]
        },
        {
            "title":"Project 2",
            "dates":"2002 - 2003",
            "description":"Desc 2",
            "images":["images/197x148.gif"]
        }
    ],
    "display":function() {
        // Add information from projects object to html page.

        // Add projects
        for(project in this.projects){
            $("#projects").append(HTMLprojectStart);

            // Add title
            var formattedTitle  = HTMLprojectTitle.replace("%data%", this.projects[project].title);
            $(".project-entry:last").append(formattedTitle);

            // Add dates
            var formattedDates  = HTMLprojectDates.replace("%data%", this.projects[project].dates);
            $(".project-entry:last").append(formattedDates);

            // Add description of project
            var formattedDescription  = HTMLprojectDescription.replace("%data%", this.projects[project].description);
            $(".project-entry:last").append(formattedDescription);

            // Add any images related to the project
            for(image in this.projects[project].images){
                var formattedImage = HTMLprojectImage.replace("%data%", this.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
}

// Call display functions for all sections of the resume
bio.display();
education.display();
work.display();
projects.display();

// Add google maps to the page showing work and education locations
$("#mapDiv").append(googleMap);

// Add console logging of all clicks on the page
$(document).click(function(loc){
  logClicks( loc.pageX, loc.pageY );
});
