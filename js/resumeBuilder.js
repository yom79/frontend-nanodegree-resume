/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var bio = {
   "name": "Anne Jacqueline Hathaway",
   "role": "Actress",
   "contacts": {
     "mobile": "310-272-7000",
     "email": "annehathaway@icloud.com",
     "github": "ahy82",
     "twitter": "@annehathaway",
     "location": "Brooklyn, NY"
   },
   "welcome-message": "Welcome to My Page!",
   "skills": ["acting", "singing", "rapping", "babysitting"],
   "bioPic": "images/biopic1.jpg",
   "display": function () {

      var formattedName = HTMLheaderName.replace("%data%", bio.name);
      var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

      $("#header").prepend(formattedRole);
      $("#header").prepend(formattedName);

      var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
      var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
      var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
      var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
      var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

      let placement = ["#topContacts", "#footerContacts"];

      /*for...of used in stead of forEach, which is being deprecated*/

      for (placement of placement) {
        $(placement).append(formattedMobile);
        $(placement).append(formattedEmail);
        $(placement).append(formattedGithub);
        $(placement).append(formattedTwitter);
        $(placement).append(formattedLocation);
      }

      var formattedBiopic = HTMLbioPic.replace("%data%", bio.bioPic);
      $("#header").append(formattedBiopic);

      var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio["welcome-message"]);
      $("#header").append(formattedMessage);

      $("#header").append(HTMLskillsStart);
      for (let skill of bio.skills) {
        var formattedSkill = HTMLskills.replace("%data%", skill);
        $("#skills").append(formattedSkill);
      }
   }
 };

bio.display();


 var work = {
   "jobs": [
     {
       "employer": "Kingdown of Genovia",
       "title": "Princess",
       "location": "Genovia",
       "dates": "2001-2005",
       "description": "Trained to become Princess of Genovia"
     },
     {
       "employer": "Runway Magazine",
       "title": "Assistant to Editor",
       "location": "New York City",
       "dates": "2006-2010",
       "description": "Persevered with humiliating treatment from a demanding boss"
     },
     {
       "employer": "Wonderland, Inc.",
       "title": "White Queen",
       "location": "Underland",
       "dates": "2010-Present",
       "description": "Contributed to making Underland by sharing my love and beauty with others"
      }
   ],
   "display": function () {
     $("#workExperience").append(HTMLworkStart);
     for (let job of work.jobs) {
       var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
       var formattedTitle = HTMLworkTitle.replace("%data%",job.title);
       var formattedEmployerTitle = formattedEmployer + formattedTitle;
       var formattedDates = HTMLworkDates.replace("%data%",job.location);
       var formattedLocation = HTMLworkLocation.replace("%data%",job.dates);
       var formattedDescription = HTMLworkDescription.replace("%data%",job.description);

       $(".work-entry:last").append(formattedEmployerTitle);
       $(".work-entry:last").append(formattedDates);
       $(".work-entry:last").append(formattedLocation);
       $(".work-entry:last").append(formattedDescription);
     }
   }
 };

work.display();

  var projects = {
    "films": [
     {
     "title": "Princess Diaries",
     "role": "Mia Thermopolis",
     "dates": "2001",
     "description": "Directed by Garry Marshall",
     "images": "images/princessdiaries.jpg"
     },
     {
     "title": "Brokeback Mountain",
     "role": "Lureen Newsome Twist",
     "dates": "2005",
     "description": "Directed by Ang Lee",
     "images": "images/brokebackmountain.jpg"
     },
     {
     "title": "The Devil Wears Prada",
     "role": "Andrea (Andy) Sachs",
     "dates": "2006",
     "description": "Directed by David Frankel",
     "images": "images/devilwearsprada.jpg"
     },
     {
     "title": "Rachel Getting Married",
     "role": "Kym Buchman",
     "dates": "2008",
     "description": "Directed by Jonathan Demme",
     "images": "images/rachelgettingmarried.jpg"
     },
     {
     "title": "Alice in Wonderland",
     "role": "Mirana of Marmoreal (The White Queen)",
     "dates": "2010",
     "description": "Directed by Tim Burton",
     "images": "images/aliceinwonderland.jpg"
     },
     {
     "title": "The Dark Knight Rises",
     "role": "Selina Kyle (Catwoman)",
     "dates": "2012",
     "description": "Directed by Christopher Nolan",
     "images": "images/darkknightrises.jpg"
     },
     {
     "title": "Les Miserables",
     "role": "Fantine",
     "dates": "2012",
     "description": "Directed by Tom Hooper",
     "images": "images/lesmiserables.jpg"
     },
     {
     "title": "The Intern",
     "role": "Jules Ostin",
     "dates": "2015",
     "description": "Directed by Nancy Meyers",
     "images": "images/theintern.jpg"
   }
 ],
   "display": function () {
     for (film of projects.films) {
       $("#projectDetails").append(HTMLprojectStart);

       var formattedProjectTitle = HTMLprojectTitle.replace("%data%", film.title);
       var formattedProjectDates = HTMLprojectDates.replace("%data%", film.dates);
       var formattedProjectDescription = HTMLprojectDescription.replace("%data%", film.description);
       var formattedProjectImage = HTMLprojectImage.replace("%data%", film.images);

       $(".project-entry:last").append(formattedProjectTitle);
       $(".project-entry:last").append(formattedProjectDates);
       $(".project-entry:last").append(formattedProjectDescription);
       $(".project-entry:last").append(formattedProjectImage);
     }
   }
 };

projects.display();


 var awards = {
   "awards": [
     "Academy Award for Best Supporting Actress",
     "BAFTA Award for Best Actress in a Supporting Role",
     "Golden Globe - Best Performance by an Actress in a Supporting Role in a Motion Picture",
     "Primetime Emmy Award for Outstanding Voice-Over Performance",
     "Screen Actors Guild Award for Outstanding Performance by a Female Actor in a Supporting Role",
     "Broadcast Film Critics Association Award for Best Supporting Actress"
   ],
   "display": function() {
     $("#awards").append(HTMLawardStart);
     for (let award of awards.awards) {
       var formattedAwards = HTMLawards.replace("%data%", award);
       $(".award-entry:last").append(formattedAwards);
     }
   }
};

awards.display();

 var education = {
   "schools": [
     {
       "name": "Millburn High School",
       "location": "Millburn, New Jersey",
       "degree": "Diploma",
       "majors": "N/A",
       "dates": "1996-2000",
       "URL": "http://www.edline.net/pages/Millburn_HS"
     },
     {
       "name": "Vassar College",
       "location": "Poughkeepsie, New York",
       "degree": "None",
       "majors":["English", "Women's Studies"],
       "dates": "2000-2004",
       "URL": "https://www.vassar.edu/"
     },
     {
       "name": "New York University",
       "location": "New York, NY",
       "degree": "None",
       "majors":["Theatre"],
       "dates": "2005-Unknown",
       "URL": "https://gallatin.nyu.edu/"
     }
   ],
   "onlineCourses": [
     {
     "title": "Character Design: Creating Princess Characters",
     "school": "Taught By A Pro (Online)",
     "dates": "2000",
     "URL": "http://taughtbyapro.com/"
    },
    {
      "title": "Much Ado About Nothing in Performance",
      "school": "Shakespeare Birthplace Trust",
      "dates": "2003",
      "URL": "https://www.shakespeare.org.uk/explore-shakespeare/moocs/"
    }
  ],
  "display": function () {
    $("#education").append(HTMLschoolStart);

    for (school of education.schools) {
      var formattedSchoolName = HTMLschoolName.replace("%data%",school.name);
      var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",school.degree);
      var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
      var formattedSchoolDates = HTMLschoolDates.replace("%data%",school.dates);
      var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",school.location);
      var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",school.majors);

      $(".education-entry:last").append(formattedSchoolNameDegree);
      $(".education-entry:last").append(formattedSchoolDates);
      $(".education-entry:last").append(formattedSchoolLocation);
      $(".education-entry:last").append(formattedSchoolMajor);
    }

    $(".education-entry:last").append(HTMLonlineClasses);

    for (course of education.onlineCourses) {
      var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title);
      var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
      var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
      var formattedOnlineDates = HTMLonlineDates.replace("%data%", course.dates);
      var formattedOnlineURL1 = HTMLonlineURL1.replace("%data%", course.URL);
      var formattedOnlineURL2 = HTMLonlineURL2.replace("%data%", course.URL);
      var formattedOnlineURL = formattedOnlineURL1+formattedOnlineURL2;

      $(".education-entry:last").append(formattedOnlineTitleSchool);
      $(".education-entry:last").append(formattedOnlineDates);
      $(".education-entry:last").append(formattedOnlineURL);
    }
  }
};

education.display();

/*add google map*/
$("#mapDiv").append(googleMap);
