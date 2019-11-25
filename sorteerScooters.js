//JSON importeren
let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function(){
  if(this.readyState == 4 && this.status == 200) {
    sorteerScooterObj.data = JSON.parse(this.responseText);
    sorteerScooterObj.uitvoeren();

  }

}

xmlhttp.open('GET', "scooters.json", true);
xmlhttp.send();

//object dat de scooters uitvoert en sorteert

let sorteerScooterObj = {
  data: "",

  uitvoeren: function(){
    let uitvoer = "";
    for(let i = 0; i<this.data.length; i++){
      uitvoer += this.data[i].titel + "<br>";
    }

    document.getElementById('uitvoer').innerHTML = uitvoer;

  }
}
