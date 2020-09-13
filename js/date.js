$(document).ready(function() {
	const months = ["Jan.", "Feb.", "March", "April", "May", "June", "July", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];
	var formattedString = "";

	var date = document.lastModified;

    var dateObject = new Date(Date.parse(date));

    formattedString = months[dateObject.getMonth()] + " " + dateObject.getDate() + " " + dateObject.getFullYear();

    $("#date").html(formattedString);
});