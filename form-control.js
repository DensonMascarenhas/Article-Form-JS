let cArtcicle = false;
let cName = false;
let cEmail = false;
let cUsername = false;
let cContact = false;
//getters
function getButton() {
    return document.getElementById("btnSubmit");
}

function getEmail() {
    return document.getElementById("emaiId");
}

function getContact() {
    return document.getElementById("contactNumber");
}

function getName() {
    return document.getElementById("articleName");
}

function getOwner() {
    return document.getElementById("ownerName");
}

function getUsername() {
    return document.getElementById("userName");

}

function disableButton() {
    getButton().style.visibility = "hidden";
}

function enableButton() {
    getButton().style.visibility = "visible";
}


//validations
function validateArticle() {
    let articleName = getName();
    if (articleName.value.length < 2 || !isNaN(articleName.value)) {
        document.getElementById("articleError").style.display = "block";
        articleName.style.border = "2px solid red";
        cArtcicle = false;
        displayButton();

    } else {
        document.getElementById("articleError").style.display = "none";
        articleName.style.border = "2px solid rgb(221, 210, 210)";
        cArtcicle = true;
        displayButton()
    }

}

function validateOwner() {
    let ownerName = getOwner();
    if (ownerName.value.length < 2 || !isNaN(ownerName.value)) {
        document.getElementById("ownerError").style.display = "block";
        ownerName.style.border = "2px solid red";
        cName = false;
        displayButton()

    } else {
        document.getElementById("ownerError").style.display = "none";
        ownerName.style.border = "2px solid rgb(221, 210, 210)";
        cName = true;
        displayButton()
    }

}

function validateUsername() {
    let userName = getUsername();
    if (userName.value.length < 2 || !isNaN(userName.value)) {
        document.getElementById("usernameError").style.display = "block";
        userName.style.border = "2px solid red";
        cUsername = false;
        displayButton()

    } else {
        document.getElementById("usernameError").style.display = "none";
        userName.style.border = "2px solid rgb(221, 210, 210)";
        cUsername = true;
        displayButton()
    }

}

function validateEmail() {
    let exp = /^([a-z0-9\.-]+)@([a-z0-9-]+).([a-z]{2,10})(.[a-z]{2,8})$/;
    let field = getEmail();
    if (!exp.test(field.value)) {
        field.style.border = "2px solid red";
        // btnsubmit.style.visibility = "hidden";
        document.getElementById("emailError").style.display = "block";
        cEmail = false;
        displayButton()

    } else {
        field.style.border = "2px solid rgb(221, 210, 210)";
        // btnsubmit.style.visibility = 'visible';
        document.getElementById("emailError").style.display = "none";
        cEmail = true;
        displayButton()
    }

}

function vaidateContact() {
    let field = getContact();
    let contact = field.value;
    if (isNaN(contact) || contact.length != 10) {
        field.style.border = "2px solid red";
        // btnsubmit.style.visibility = "hidden";
        document.getElementById("contactError").style.display = "block";
        cContact = false;
        displayButton()

    } else {
        field.style.border = "2px solid rgb(221, 210, 210)";
        // btnsubmit.style.visibility = 'visible';
        document.getElementById("contactError").style.display = "none";
        cContact = true;
        displayButton()
    }


}

function displayButton() {

    if (cContact && cEmail && cArtcicle && cName && cUsername) {
        enableButton();
    } else {
        disableButton();

    }

}

let pop = document.getElementById("popup");

function validateForm() {
    openPopup();
}


function openPopup() {
    pop.classList.add("open-popup");
}

function closePopup() {
    pop.classList.remove("open-popup");
}