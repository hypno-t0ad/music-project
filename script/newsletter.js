// Confirm user subscribed

document.getElementById("subscribe").addEventListener('click', function () {

    subscription();


})


// check user has input email address

function subscription() {

    if (document.getElementById("user-input").value == "") {

        document.getElementById("confirm-subscribe").innerHTML = "Please input an email address!";

    }

    else {
        document.getElementById("confirm-subscribe").innerHTML = "Success!";
    }

}