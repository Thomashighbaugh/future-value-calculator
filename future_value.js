"use strict";

var $ = function(id) {
  return document.getElementById(id);
};
var calculateFV = function(investment, rate, years) {
  var futureValue = investment;
  for (var i = 1; i <= years; i++) {
    futureValue += (futureValue * rate) / 100;
  }
  futureValue = futureValue.toFixed(2);
  return futureValue;
};
var processEntries = function() {
  var investment = parseFloat($("investment").value);
  var rate = parseFloat($("annual_rate").value);
  var years = parseInt($("years").value);
  if (isNaN(investment) || investment <= 0) {
    $("investment_error").firstChild.nodeValue =
      "Must be between 0 and 100,000";
  } else if (isNaN(investment) || investment >= 100000) {
    $("investment_error").firstChild.nodeValue =
      "Must be between 0 and 100,000";
  } else if (isNaN(rate) || rate <= 0) {
    $("rate_error").firstChild.nodeValue = "Must be between 0 and 15";
  } else if (isNaN(rate) || rate >= 15) {
    $("rate_error").firstChild.nodeValue = "Must be between 0 and 15";
  } else if (isNaN(years) || years <= 0) {
    $("years_error").firstChild.nodeValue = "Must be between 0 and 50";
  } else if (isNaN(years) || years >= 50) {
    $("years_error").firstChild.nodeValue = "Must be between 0 and 50";
  } else {
    $("future_value").value = calculateFV(investment, rate, years);

    $("rate_error").firstChild.nodeValue = "";
    $("investment_error").firstChild.nodeValue = "";
    $("years_error").firstChild.nodeValue = "";
  }
};

window.onload = function() {
  $("calculate").onclick = processEntries;
  $("investment").focus();
};
