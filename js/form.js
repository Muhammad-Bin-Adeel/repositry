
    function validateForm(event) {
        event.preventDefault(); // Prevent default form submission

        var str1 = document.fm.fname.value;
        var str2 = document.fm.lname.value;
        var cityIndex = document.fm.city.selectedIndex;
        var email = document.fm.email.value;
        var reg = /^([A-Za-z0-9_\-\.])+@([A-Za-z0-9_\-\.])+\.[A-Za-z]{2,4}$/;
        var nameReg = /^[A-Za-z]+$/;

        if (str1.length == 0) {
            alert("Enter first name");
            return false;
        }

        if (!nameReg.test(str1)) {
            alert("First name should contain only alphabetic characters");
            return false;
        }

        if (str2.length == 0) {
            alert("Enter last name");
            return false;
        }

        if (!nameReg.test(str2)) {
            alert("Last name should contain only alphabetic characters");
            return false;
        }

        // if (cityIndex == 0) {
        //     alert("Select your city");
        //     return false;
        // }

        if (reg.test(email) == false) {
            alert("Invalid email address");
            return false;
        }

        // displayInformation();

        redirectToThankYouPage();
        document.fm.fname.value="";
        document.fm.lname.value="";
        document.fm.city.selectedIndex="";
        document.fm.email.value="";
        return true;
    }

    // function displayInformation() {
    //     var str1 = document.fm.fname.value;
    //     var str2 = document.fm.lname.value;
    //     var city = document.fm.city.value;
    //     var email = document.fm.email.value;

    //     var infoDiv = document.getElementById('info');
    //     infoDiv.innerHTML = `
    //         <b>First name:</b> ${str1}<br />
    //         <b>Last name:</b> ${str2}<br />
    //         <b>City:</b> ${city}<br />
    //         <b>Email Address:</b> ${email}<br />
    //     `;
    // }

    function redirectToThankYouPage() {
        window.location.href ="ThankyouPage.html"; // Redirect to thanks.html
    }
