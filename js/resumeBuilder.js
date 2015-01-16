//This JavaScript collects the data for our resume, then formats it and displays it on the resume page.

//This array is the list of professional skills.
var skills=["strategy", "project management", "management consulting", "operations", "data systems", "web development"];

//This bio JSON object contants main biographical information including the skills array from above as well as a display function that is defined later.
var bio={
	"name":"Sia Karamalegos",
	"role":"Consultant and Web Developer",
	"skills":skills,
	"contacts":{
		"mobile":"504-555-1234",
		"email":"siakaramalegos@gmail.com",
		"github":"siakaramalegos",
		"twitter":"@thegreengreek",
		"location":"New Orleans, LA"
	},
	"welcomeMessage":"Results-oriented, energetic professional with proven expertise in strategy, project management, and operations.  Diverse experience in small start-up to large corporate settings across multiple industries, especially high-tech and education.",
	"bioPic":"images/bio.jpg"
};

//This work JSON object contains the current and previous work experience as well as a display function that is defined later.
var work={
	"jobs":[
	  {
	    "employer":"DataLaunch for Schools",
	    "title":"Founder & Chief Thinker",
	    "location":"New Orleans, LA",
	    "dates":"2013-present",
	    "description": "Founded this boutique consulting firm to provide data and systems support to public schools.  Operated as the Director of Information Strategy at Algiers Charter School Association to support their data team with PowerSchool and state compliance/reporting as well as leading the Google Apps for Education transition for email, calendar, share drive, and intranet.  Supported New Orleans Public Schools during their first OneApp enrollment year.  Facilitated transition to two new student data systems for New Orleans College Preparatory Academies"
	  },
	  {
	    "employer":"Propeller: A Force for Social Innovation",
	    "title":"Accelerator Consultant",
	    "location":"New Orleans, LA",
	    "dates":"2014-present",
	    "description": "Consultant for the 2014-2015 Social Venture Accelerator"
	  },
	  {
	    "employer":"Algiers Charter School Association",
	    "title":"Director of Information Strategy",
	    "location":"New Orleans, LA",
	    "dates":"2013-2014",
	    "description": "See DataLaunch for Schools, above."
	  },
	  {
	    "employer":"FirstLine Schools",
	    "title":"Director of Data Management",
	    "location":"New Orleans, LA",
	    "dates":"2011-2013",
	    "description": "Create and maintain intuitive academic data systems, design efficient system and process architecture, and provide staff development to support schools in driving student achievement through data.  Present strategic insight on the executive team for short- and long-term planning and implementation.  Also deliver network-level strategic data analysis and manage state accountability and compliance reporting."
	  },
	  {
	    "employer":"FirstLine Schools",
	    "title":"Blended Learning Project Manager",
	    "location":"New Orleans, LA",
	    "dates":"2011-2011",
	    "description": "Coordinated and managed the design and pilot implementation of personalized (or blended) learning at 2 schools for the 2011-2012 school year.  Responsible for project planning and coordination, milestone delivery, budget, and fundraising (grant writing and initial management)."
	  },
	  {
	    "employer":"PRTM Management Consultants",
	    "title":"Associate",
	    "location":"Dallas, TX",
	    "dates":"2007-2009",
	    "description": "Management consultant specializing in product innovation and supply chain management.  Projects spanned multiple industries and functions, such as product innovation and development, strategic sourcing, engineering change management, logistics, and lean inventory management in service supply chains. Also co-wrote an article for PRTM Insight entitled “A Blueprint for Green: Developing an operational strategy that’s eco-friendly–and profitable too”."
	  },
	  {
	    "employer":"Applied Materials",
	    "title":"Senior Analyst, Corporate Strategy",
	    "location":"Santa Clara, CA",
	    "dates":"2006-2007",
	    "description": "Helped design, implement, and facilitate the new company-wide strategic planning process. Performed strategic fit analysis for potential M&A deals.  Carried out executive-level project requests."
	  },
	  {
	    "employer":"KLA-Tencor",
	    "title":"Product Marketing Manager",
	    "location":"San Jose, CA",
	    "dates":"2005-2006",
	    "description": "Created marketing strategies and collateral for the world-wide data storage industry (hard disk drive thin-film head makers) in the companys Growth and Emerging Markets division."
	  },
	  {
	    "employer":"National Semiconductor Corporation",
	    "title":"Photolithography Process Engineer",
	    "location":"Arlington, TX",
	    "dates":"2000-2003",
	    "description": "Optimized processes and increased product yields.  Managed the statistical process control and inventory management systems."
	  }
	]
}

//This education JSON object contains both formal (degree) education as well as online course information.  It also contains a display function which is defined later.
var education={
	"schools":[
	  {
	  	"name":"Harvard Business School",
	  	"location":"Boston, MA",
	  	"degree":"MBA",
	  	"majors":["business"],
	  	"dates":"2005",
	  	"url":"http://www.hbs.edu/about/Pages/default.aspx"
	  },
	  {
	    "name":"Texas A&M University",
	  	"location":"College Station, TX",
	  	"degree":"BS",
	  	"majors":["chemical engineering"],
	  	"dates":"1999",
	  	"url":"https://www.tamu.edu/"
	  }
	],
	"onlineCourses":[
	  {
	  	"title":"Front-End Web Developer Nanodegree",
	  	"school":"Udacity",
	  	"date":"2015",
	  	"url":"https://www.udacity.com/course/nd001"
	  },
	  {
	  	"title":"Web Development",
	  	"school":"Udacity",
	  	"date":"2013",
	  	"url":"https://www.udacity.com/course/cs253"
	  },
	  {
	  	"title":"MITx: 6.00x Introduction to Computer Science and Programming",
	  	"school":"edX - MITx",
	  	"date":"2013",
	  	"url":"https://www.edx.org/course/introduction-computer-science-mitx-6-00-1x-0"
	  }
	]
}

//This projects JSON object contains basic info and images for web development projects completed thus far.  It also will contain a display function which is defined later.
var projects={
	"projects":[
	  {
	  	"title":"DataLaunch for Schools website",
	  	"dates":"2013",
	  	"description":"Website for my education systems consulting business",
	  	"images":["images/datalaunch1.png","images/datalaunch2.png"]
	  },
	  {
	  	"title":"Udacity Mug project",
	  	"dates":"2015",
	  	"description":"Project 1 for the Udacity Front-End Web Developer Nanodegree",
	  	"images":["images/udacitymugscreenshot.png"]
	  }
	]
}

//This is the display function for the bio object, mentioned previously.
bio.display = function() {
	var formattedName=HTMLheaderName.replace("%data%",bio["name"]);
	var formattedRole=HTMLheaderRole.replace("%data%",bio.role);
	var formattedMobile=HTMLmobile.replace("%data%",bio.contacts.mobile);
	var formattedEmail=HTMLemail.replace("%data%",bio.contacts.email);
	var formattedGithub=HTMLgithub.replace("%data%",bio.contacts.github);
	var formattedTwitter=HTMLtwitter.replace("%data%",bio.contacts.twitter);
	var formattedLocation=HTMLlocation.replace("%data%",bio.contacts["location"]);
	var formattedWelcome=HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
	var formattedPic=HTMLbioPic.replace("%data%",bio.bioPic);
	$("#mainheader").prepend(formattedRole);
	$("#mainheader").prepend(formattedName);
	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedTwitter);
	$("#mainheader").append(formattedLocation);
	$("#biopic").append(formattedPic);
	$("#welcome").append(formattedWelcome);
	if(bio.skills.length>0) {
		$("#skillz").append(HTMLskillsStart);
		for (var i = 0; i < bio.skills.length; i++) {
			var formattedSkill=HTMLskills.replace("%data%", bio.skills[i]);
		    $("#skills").append(formattedSkill);
		};
	};
}
//Invoking the bio.display function:
bio.display();

//This is the display function for the work object, mentioned previously.
work.display = function() {
	if(work.jobs.length>0) {
		for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer=HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle=HTMLworkTitle.replace("%data%", work.jobs[job]["title"]);
			var formattedEmployerTitle= formattedEmployer+formattedTitle;
			var formattedWorkDates=HTMLworkDates.replace("%data%", work.jobs[job]["dates"]);
			var formattedWorkLoc=HTMLworkLocation.replace("%data%", work.jobs[job]["location"]);
			var formattedWorkDesc=HTMLworkDescription.replace("%data%", work.jobs[job]["description"]);
			$(".work-entry:last").append(formattedEmployerTitle);
			$(".work-entry:last").append(formattedWorkDates);
			$(".work-entry:last").append(formattedWorkLoc);
			$(".work-entry:last").append(formattedWorkDesc);		
		}
	}	
}
//Invoking the work.display function:
work.display();

//This is the display function for the education object, mentioned previously.
education.display = function() {
	//This first portion reads through the schools array and displays data for each school.
	if(education.schools.length>0) {
		for (school in education.schools) {
			$("#education").append(HTMLschoolStart);
			var formattedSchoolName=HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedDegree=HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedSchoolDates=HTMLschoolDates.replace("%data%", education.schools[school]["dates"]);
			var formattedSchoolLoc=HTMLschoolLocation.replace("%data%", education.schools[school]["location"]);
			$(".education-entry:last").append(formattedSchoolName);
			$(".education-entry:last").append(formattedDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLoc);
			if (education.schools[school].majors.length > 0) {
				for (major in education.schools[school].majors) {
					var formattedMajor=HTMLschoolMajor.replace("%data%",education.schools[school].majors[major]);
					$(".education-entry:last").append(formattedMajor);
				}
			}	
		}
	}
	//This second portion reads through the online courses array and displays data for each course.
	if(education.onlineCourses.length>0) {
		$("#education").append(HTMLonlineClasses);
		for (course in education.onlineCourses) {
			$("#education").append(HTMLschoolStart);
			var formattedOnlineTitle=HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
			var formattedOnlineSchool=HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
			var formattedOnlineDates=HTMLonlineDates.replace("%data%", education.onlineCourses[course]["date"]);
			var formattedonlineURL=HTMLonlineURL.replace("%data%", education.onlineCourses[course]["url"]);
			$(".education-entry:last").append(formattedOnlineTitle);
			$(".education-entry:last").append(formattedOnlineSchool);
			$(".education-entry:last").append(formattedOnlineDates);
			$(".education-entry:last").append(formattedonlineURL);
		}
	}
}
//Invoking the education.display function:
education.display();

//This is the display function for the projects object, mentioned previously.
projects.display = function() {
	if(projects.projects.length>0) {
		for (project in projects.projects) {
			$("#projects").append(HTMLprojectStart);
			var formattedpTitle=HTMLprojectTitle.replace("%data%", projects.projects[project]["title"]);
			var formattedpDates=HTMLprojectDates.replace("%data%", projects.projects[project]["dates"]);
			var formattedpDesc=HTMLprojectDescription.replace("%data%", projects.projects[project]["description"]);
			$(".project-entry:last").append(formattedpTitle);
			$(".project-entry:last").append(formattedpDates);
			$(".project-entry:last").append(formattedpDesc);
			if (projects.projects[project].images.length > 0) {
				for (image in projects.projects[project].images) {
					var formattedpImage=HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
					$(".project-entry:last").append(formattedpImage);
				}
			}		
		}
	}	
}
//Invoking the projects.display function:
projects.display();

//This function converts the bio.name string to an international version of a name (First LAST).
function inName(name) {
	var nameArray=bio["name"].trim().split(" ");
	nameArray[0]=nameArray[0].slice(0,1).toUpperCase()+nameArray[0].slice(1).toLowerCase();
	nameArray[1]=nameArray[1].toUpperCase();
	return nameArray[0]+" "+nameArray[1];
}

//Adding the internationalize button to the bottom of the page.
$("#main").append(internationalizeButton);


//map of where I've lived and worked
$("#mapDiv").append(googleMap);

//Adding in an accordian function to expand and collapse sections
//$(document).ready(function() {
//	$("#accordion").accordion({
//		collapsible: true
//	});
//});


//We used this for an exercise in the JavaScript Basics course.  
/*--
function locationizer() {
	var locArray=[];
	for (job in work.jobs) {
		locArray.push(work.jobs[job]["location"]);
	}
	return locArray;
}
--*/