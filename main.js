
const buyTicket = () => {
    let tickets = [];
    let first_name = document.getElementById("first_name").value
    let last_name = document.getElementById("last_name").value
    let price = document.getElementById("price").value
    let match = document.getElementById("match").value
  
    tickets.push(
        {first_name: first_name, last_name: last_name, price: price, match: match})
        let tr = ""
        for(let item of tickets){
            tr+= "<tr>" +
            "<td>" + item.first_name + "</td>" +
            "<td>" + item.last_name + "</td>" +
            "<td>" + item.match + "</td>" +
            "<td>" + item.price + "</td>" +
            "</tr>"
        }
        document.getElementById("tr").innerHTML = tr
}