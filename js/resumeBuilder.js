var name = "Tkhiien Lok Chan"
var role = "Junior Python Developer"
var email = "tkhiien@gmail.com"
var skills = ["programming","teaching","JS", "python"];
var bio = {"name": "Lok",
           "age":22,
           "skills":skills,
           "role":role,
           "contacts":{"mobile":"38(096)936-48-91",
                       "email":email,
                       "github":"TkhiienLok",
                       "location":"Kharkiv, UA"},
           "picture":"images/profile_pic.jpg",
           "welcomeMsg":"Hi, I am a Junior Developer, this is my resume site."};
bio.city = "Kharkiv";

var work = {"jobs":[{"position":"Programming Tutor",
                     "employer":"IT-Univer",
                     "years":"2016 - 2019",
                     "location":"Kharkiv, UA",
                     "description":"Teaching high/middle school students programming using Python."}]};

var education = {"schools": [{"name":"KhNPU of G.S.Scovoroda",
                              "years":"2013 - 2017",
                              "degree":"Bachelor",
                              "majors":"Computer Science",
                              "city":"Kharkiv"}],

                 "onlineCourses": [{"title":"JavaScript Basics",
                                   "school":"udacity"},
                                  {"title":"Introduction to programming using Python",
                                   "school":"edx"},
                                  {"title":"Python for Data Science",
                                  "school":"edx"}]};


var projects = {"projects":[{
                            "title":"Web Application for my CV",
                            "description":"Application was built with Flask and deployed on heroku.com.",
                            "link":"https://appformycv.herokuapp.com/",
                            "images":["images/portfoliopic.jpg"]}]};

function inName(name){
    name = name.trim().split(' ');
    console.log(name);
    name[name.length - 1] = name[name.length - 1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase()+ name[0].slice(1).toLowerCase();
    console.log(name.join(' '));
    return name.join(' ');}

bio.display = function (){
//    $("#header").append(HTMLcontactGeneric);
    formattedName = HTMLheaderName.replace("%data%", name);
    formattedRole = HTMLheaderRole.replace("%data%", role);
    $("#header").prepend(internationalizeButton);
//    $("#international").click(bio.inName(name));
    document.querySelector("button").click(inName(name));
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);


    formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#header").append(formattedMobile);
    $("#header").append(formattedEmail);
    $("#header").append(formattedGithub);
    $("#header").append(formattedLocation);

    formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
    $("#header").append(formattedMessage);

    formattedPic = HTMLbioPic.replace("%data%", bio.picture);
    $("#header").append(formattedPic);

    if (bio.skills.length > 0){
        $("#header").append(HTMLskillsStart);
        var formattedSkill = null;
        for (i = 0; i < bio.skills.length; i++){
            formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);}
    }

}


work.display = function(){
    for (job in work.jobs){
        $("#workExperience").append(HTMLworkStart);
        formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
        formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        formattedEmployer = formattedEmployer.replace("#", "http://ituniver.com/");
        formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].years);
        formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedEmployer + formattedTitle);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedDescription);
    }
}

projects.display = function(){
    for (var proj in projects.projects){
        $("#projects").append(HTMLprojectStart);
        formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[proj].title);
        formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[proj].description);
        formattedTitle = formattedTitle.replace("#", projects.projects[proj].link);
        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[proj].images.length > 0){
            for (image in projects.projects[proj].images){
                formattedImage = HTMLprojectImage.replace("%data%", projects.projects[proj].images[image]);
                $(".project-entry:last").append(formattedImage);}}

    }
}
education.display = function(){
    for (school in education.schools){
        $("#education").append(HTMLschoolStart);
        formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].years);
        formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].city);
        formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors)
        $(".education-entry:last").append(formattedName);
        $(".education-entry:last").append(formattedDegree);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(formattedLocation);
        $(".education-entry:last").append(formattedMajors);
        }

     $(".education-entry:last").append(HTMLonlineClasses);

     for (course in education.onlineCourses){
         formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
         formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
         $(".education-entry:last").append(formattedTitle + formattedSchool);
     }


}


bio.display();
work.display();
projects.display();
education.display();

//$("#mapDiv").append(googleMap);







