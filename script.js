document.getElementById("newClaimForm").style.display = "none";

const newClaim = () => {
    document.getElementById("newClaimForm").style.display = "block";
}


const additionalInfo = document.getElementById("additionalInfo");
const targetDivMotor = document.getElementById("motorExtended");
const checkbxMotor = document.getElementById("motor");
const targetDivHousehold = document.getElementById("householdExtended");
const checkbxHousehold = document.getElementById("property");
const targetDivPet = document.getElementById("petExtended");
const checkbxPet = document.getElementById("pet");
checkbxMotor.onclick = function () {
    if (targetDivMotor.style.display !== "none") {
        targetDivMotor.style.display = "none";
    }
    else {
        targetDivMotor.style.display = "block";
    }
}
checkbxHousehold.onclick = function () {
    if (targetDivHousehold.style.display !== "none") {
        targetDivHousehold.style.display = "none";
    }
    else {
        targetDivHousehold.style.display = "block";
    }
}
checkbxPet.onclick = function () {
    if (targetDivPet.style.display !== "none") {
        targetDivPet.style.display = "none";
    }
    else {
        targetDivPet.style.display = "block";
    }
}