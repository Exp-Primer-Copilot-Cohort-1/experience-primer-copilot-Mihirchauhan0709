function skillsMember() {
    var member = document.getElementById("member");
    var memberValue = member.options[member.selectedIndex].value;
    var memberText = member.options[member.selectedIndex].text;
    if (memberValue == "member") {
        document.getElementById("member").style.color = "black";
    }
    else {
        document.getElementById("member").style.color = "black";
    }
}