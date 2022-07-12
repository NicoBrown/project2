
function getPeriodicElements(cb){

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://periodic-table-elements-info.herokuapp.com/elements");
    xhr.send();
    
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
            getData(JSON.parse(this.responseText));
        }
    };
};