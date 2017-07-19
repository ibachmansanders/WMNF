const sendData = (sql,name) => {
    //build SQL into JSON object
    var data = { "sql" : sql };
    //AJAX post (to server.js via api )
    $.ajax({
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json',
        url: 'http://localhost:8080/api',
        success: (response) => {
            console.log('Client-side success');
            if(response.success == true) {
                alert("Thank you, " + name +", your report has been received.");
            } else if (response.success == false) {
                alert ("There's been a " + response.content);
            };
        },
        error: (xhr, status, error) => {
            alert ("submission error: " + error);
        }
    });
}

export default sendData;