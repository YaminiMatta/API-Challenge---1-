function buttonF(text, cname, all) {
    let element = document.createElement("button");
    element.innerHTML = text;
    element.className = cname;
    all.appendChild(element);
}

function printData(head, description, container) {

    let divElement = document.createElement("div");
    divElement.className = "promotion";

    let image = document.createElement("img");
    image.src = "10.jpg";
    image.className = "image-t";
    divElement.appendChild(image);

    let header = document.createElement("h1");
    header.innerHTML = head;
    header.className = "heading";
    divElement.appendChild(header);

    let paragraphElement = document.createElement("p");
    paragraphElement.innerHTML = description;
    paragraphElement.className = "Allcustomer";
    divElement.appendChild(paragraphElement);

    container.appendChild(divElement);

    let buttonDiv = document.createElement("div");
    buttonF("Terms & Conditions", "terms", buttonDiv);
    buttonF("Join Now", "join", buttonDiv);

    container.appendChild(buttonDiv);

}

function allPromotiondata() {
    let contain = document.querySelector(".container");
    for (let i = 0; i < data.length; i++) {
        if (!data[i].onlyNewCustomers) {
            printData(data[i].name, data[i].description, contain);
        }
    }
}

var data;
const api_url = "http://www.mocky.io/v2/5bc3b9cc30000012007586b7";
async function getData() {
    const response = await fetch(api_url);
    data = await response.json();
    allPromotiondata();
}

function newPromotionData() {
    document.querySelector(".container").innerHTML = " ";
    let contain = document.querySelector(".container");
    for (let i = 0; i < data.length; i++) {
        if (data[i].onlyNewCustomers) {
            printData(data[i].name, data[i].description, contain);
        }
    }
}