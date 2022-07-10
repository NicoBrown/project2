
function getPeriodicElements(cb){
        
    $.get("https://periodic-table-elements-info.herokuapp.com/elements").then(function (response) {
        cb = response;
    },
        function (errorResponse) {
        if (errorResponse.status === 404){
            console.log(errorResponse.status);
        }
        else{
            console.log(errorResponse.responseJSON.message);
        }
    });
   
    //     var xhr = new XMLHttpRequest();
    
    //     xhr.open("GET", "https://periodic-table-elements-info.herokuapp.com/elements");
    //     xhr.send();
    
    // xhr.onreadystatechange = function () {
    //     if (this.readyState == 4 && this.status == 200) {
    //         cb(JSON.parse(this.responseText));
    //     }
    // };
};