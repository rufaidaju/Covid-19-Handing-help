let volunteers =[
    {
        name : "v1",
        address : "farum",
        availableTime: "12:00 - 16:30"
    },{
        name : "v2",
        address : "copenhagen",
        availableTime: "8:00 - 11:00"
    },{
        name : "v3",
        address : "valby",
        availableTime: "14:00 - 18:30"
    },{
        name : "v4",
        address : "farum",
        availableTime: "14:00 - 19:15"
    },
    {
        name : "v4",
        address : "farum",
        availableTime: "6:00 - 11:30"
    },{
        name : "v5",
        address : "copenhagen",
        availableTime: "10:00 - 12:00"
    },{
        name : "v6",
        address : "valby",
        availableTime: "15:00 - 17:30"
    },{
        name : "v7",
        address : "farum",
        availableTime: "11:00 - 13:15"
    }] ;

    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
    
    let address = getParameterByName('address');
    volunteers.map(function(item){
        if (address.toLowerCase() == item.address){
            console.log(item)
            document.querySelector(".volunteers").insertAdjacentHTML('beforeend',
            `<li>${item.name}is near you at ${item.availableTime}  <i class="far fa-envelope fa-3x"></i></li>`);
        }
    })
 