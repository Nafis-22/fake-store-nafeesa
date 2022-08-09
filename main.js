fetch("https://fakestoreapi.com/products").then((res) => {
  res.json().then((data) => {
    console.log(data);
    if (data.length > 0) {
      var temp = "";
      data.forEach((itemData) => {
        temp += "<tr>";
        temp += "<td>" + itemData.title + "</td>";
        temp +=
          "<td>" +
          `<img src=${itemData.image} width="100" height="100"></img>` +
          "</td>";
        temp += "<td>" + itemData.price + "</td>";
      });

      document.getElementById("data").innerHTML = temp;
    }
  });
});
