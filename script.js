"use strict";

const form = document.getElementById("form");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const currentYear = new Date().getFullYear();
const yearsDisplay = document.querySelector(".years");
const monthsDisplay = document.querySelector(".months");
const daysDisplay = document.querySelector(".days");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

// day.addEventListener("input", checkInputs);
// month.addEventListener("input", checkInputs);
// year.addEventListener("input", checkInputs);

function checkInputs() {
  const dayValue = day.value.trim();
  const monthValue = month.value.trim();
  const yearValue = year.value.trim();

  let allInputsValid = true;

  if (dayValue === "") {
    setError(day, "This field is required");
    allInputsValid = false;
  } else if (
    dayValue > daysInMonth(monthValue, yearValue) ||
    dayValue <= 0 ||
    dayValue > 31
  ) {
    setError(day, "Must be a valid day");
    allInputsValid = false;
  } else {
    setSuccess(day);
  }

  if (monthValue === "") {
    setError(month, "This field is required");
    allInputsValid = false;
  } else if (monthValue <= 0 || monthValue > 12) {
    setError(month, "Must be a valid month");
    allInputsValid = false;
  } else {
    setSuccess(month);
  }

  if (yearValue === "") {
    setError(year, "This field is required");
    allInputsValid = false;
  } else if (yearValue <= 0 || yearValue > currentYear) {
    setError(year, "Must be in the past");
    allInputsValid = false;
  } else {
    setSuccess(year);
  }

  if (allInputsValid) {
    calculateAge(dayValue, monthValue, yearValue);
  }
}

function setError(input, message) {
  const formControl = input.parentElement;
  formControl.classList.add("error");
  const errorMsg = formControl.querySelector(".error-msg");
  errorMsg.textContent = message;
}

function setSuccess(input) {
  const formControl = input.parentElement;
  formControl.classList.remove("error");
}

function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

function calculateAge(dayValue, monthValue, yearValue) {
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();

  let years = currentYear - yearValue;
  let months = currentMonth - monthValue;
  let days = currentDay - dayValue;

  if (months < 0 || (months === 0 && days < 0)) {
    years--;
    months = 12 - Math.abs(months);
    days = daysInMonth(monthValue, yearValue) - Math.abs(days);
  }

  yearsDisplay.textContent = years;
  yearsDisplay.classList.add("animate__animated", "animate__wobble");

  monthsDisplay.textContent = months;
  monthsDisplay.classList.add("animate__animated", "animate__wobble");

  daysDisplay.textContent = days;
  daysDisplay.classList.add("animate__animated", "animate__wobble");
}
