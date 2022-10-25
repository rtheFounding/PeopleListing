"use strict";

let people = [
    {
        id: 1,
        firstName: "Ezra",
        lastName: "Aiden",
        email: "e.aiden@basshall.com",
        ipAddress: "18.6.24.104"
    },
    {
        id: 2,
        firstName: "Ian",
        lastName: "Auston",
        email: "ian.auston@goldmansachs.com",
        ipAddress: "17.16.4.105"
    },
    {
        id: 3,
        firstName: "Anakin",
        lastName: "Skywalker",
        email: "a.skywalker@basshall.com",
        ipAddress: "20.9.21.105"
    },
    {
        id: 4,
        firstName: "Leia",
        lastName: "Organa",
        email: "l.organa@basshall.com",
        ipAddress: "11.6.27.101"
    },
    {
        id: 5,
        firstName: "Obi-Wan",
        lastName: "Kenobi",
        email: "o.kenobi@basshall.com",
        ipAddress: "12.1.22.103"
    }
];

window.onload = function () {
    loadTable();
}

function loadTable() {
    const tblBody = document.getElementById("tblBody");
    for (let i = 0; i < people.length; i++) {
        buildTicketRow(tblBody, people[i]);


    }
}
function buildTicketRow(tbody, thePerson) {
    let row = tbody.insertRow(-1);

    let cell1 = row.insertCell(0);
    cell1.innerHTML = thePerson.firstName + " " + thePerson.lastName;

    let cell2 = row.insertCell(1);
    cell2.innerHTML = thePerson.ipAddress;

    let cell3 = row.insertCell(2);
    cell3.innerHTML = thePerson.email;


}