function getFormvalue() {
    event.preventDefault(); // Prevents form from reloading the page

    // Access the form by ID
    const form = document.getElementById("form1");

    // Get values from the input fields using the 'name' attribute
    const firstName = form.fname.value.trim();
    const lastName = form.lname.value.trim();

    // Show the full name in an alert
    alert(`${firstName} ${lastName}`);
}
