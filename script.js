"use strict";

const frontPageInd = document.querySelector(".front-page-ind");
const projectPageInd = document.querySelector(".project-page-ind");
const contactPageInd = document.querySelector(".contact-page-ind");

(function() {
    if(window.location.href.includes("#front-page")) {
        frontPage();
    } else if (window.location.href.includes("#project-page")) {
        projectPage();
    } else if (window.location.href.includes("#contact-page")) {
        contactPage();
    } else {
        frontPage();
    }
})();

function frontPage() {
    frontPageInd.classList.add("active");
    projectPageInd.classList.remove("active");
    contactPageInd.classList.remove("active");
    window.location.href = "#front-page";
}

function projectPage() {
    projectPageInd.classList.add("active");
    frontPageInd.classList.remove("active");
    contactPageInd.classList.remove("active");
    window.location.href = "#project-page";
}

function contactPage() {
    contactPageInd.classList.add("active");
    frontPageInd.classList.remove("active");
    projectPageInd.classList.remove("active");
    window.location.href = "#contact-page";
}