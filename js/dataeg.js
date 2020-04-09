
setInterval(function(){
    let myRquesteg = new XMLHttpRequest();
    myRquesteg.open("GET", "https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/latest?iso2=EG&onlyCountries=true", true);
    myRquesteg.send();
    let myDataeg = [];
    myRquesteg.onreadystatechange = function () {
        if (myRquesteg.readyState == 4 && myRquesteg.status == 200) {
            myDataeg = JSON.parse(myRquesteg.response);
            //showData();
       
            document.getElementById("confirmed-eg").innerHTML =  myDataeg[0].confirmed;
            document.getElementById("deathseg-eg").innerHTML =  myDataeg[0].deaths;
            document.getElementById("recovered-eg").innerHTML =  myDataeg[0].recovered;
        }
    };
 }, 500);