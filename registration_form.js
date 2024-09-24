function get_info() {
    alert("Registration successful");

    document.write(
        "ENTERED DETAILS ARE : <br>" +
        "<br><b>First Name:</b> " + document.getElementById("first-name").value +
        "<br><b>Last Name:</b> " + document.getElementById("last-name").value +
        "<br><b>Father Name:</b> " + document.getElementById("father-name").value +
        "<br><b>Mother Name:</b> " + document.getElementById("mother-name").value +
        "<br><b>Email:</b> " + document.getElementById("email").value +
        "<br><b>Phone Number:</b> " + document.getElementById("phno").value +
        "<br><b>Date of Birth:</b> " + document.getElementById("dob").value +
        "<br><b>Gender:</b> " + document.getElementById("gender").value +
        "<br><b>Highest Education Qualification:</b> " + document.getElementById("qualification").value +
        "<br><b>Qualification Type:</b> " + document.getElementById("qualitype").value
    );
}
