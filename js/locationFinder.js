
function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}


function registercookiestate(uf) {
    if (!readCookie("myuf")) {
        createCookie("myuf", uf, 1);
    } else {
        eraseCookie("myuf");
        createCookie("myuf", uf, 1);
    }
}



// geolocation https://www.googleapis.com/geolocation/v1/geolocate?key=YOUR_API_KEY


//let latitude = null;
//let longitude = null;
let coordinates = null;
let universalplaceVariable = "";

//let ufsaver = "";



$(".header-qd-v1-button-keep-location").click(() => {
    $(".header-qd-v1-location").fadeOut();

})


function showPosition(position) {
    //latitude = position.coords.latitude;
    // longitude = position.coords.longitude;
    coordinates = `${position.coords.latitude},${position.coords.longitude}`
    console.log(coordinates)
}






function gimmeDemIps() {
    //Get location via IP
    vtexjs.session.getSession().done(e => {
        console.log("session chamado")

        console.log("na existe ainda")
        fetch(`https://ipinfo.io?token=d66877ef7a2473`)
            .then(response => {
                return response.json();
            })
            .then(res => {
                console.log(res);
                let coordinates = res.postal;
                let city = res.city;
                console.log(city)
                $(".mylocation").text(city);

                fetch(`/api/sessions`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        "public": {
                            "country": {
                                "value": "BRA"
                            },
                            "postalCode": {
                                "value": coordinates
                            }
                        }
                    })
                }).then(res => {
                    vtexjs.session.getSession().done(e => console.log(e))

                    $('#header-location-modal').modal('hide');
                })
            });

    }
    )

}


$(document).ready(function () {

    if (sessionStorage.gotlocation != true) {
        setTimeout(function () {
            gimmeDemIps();
        }, 2000)

        sessionStorage.gotlocation = true

    }



    $(".use-location").click(() => {
        gimmeDemIps()
    })


    const mq = window.matchMedia("(max-width: 1100px)");
    if (mq.matches) {
        $("#autocomplete").on("click", function (e) {
            $("#intro-modal-text").fadeOut()
        });

    }



})









function initAutocomplete() {
    // Create the autocomplete object, restricting the search predictions to
    // geographical location types.
    autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('autocomplete'), { types: ['geocode'] });

    // Avoid paying for data that you don't need by restricting the set of
    // place fields that are returned to just the address components.
    autocomplete.setFields(['address_component']);

    // When the user selects an address from the drop-down, populate the
    // address fields in the form.
    autocomplete.addListener('place_changed', fillInAddress);
}

function fillInAddress() {
    // Get the place details from the autocomplete object.
    var place = autocomplete.getPlace();
    console.log(place.address_components)

    let mycep = "";
    let myCity = ""
    place.address_components.forEach((item) => {
        if (item.types[0] == "postal_code") {
            mycep = item.long_name
        }

        if (item.types[0] == "administrative_area_level_2") {
            myCity = item.long_name
        }
    })
    console.log(mycep)
    console.log(myCity)

    $(".mylocation").text(myCity)

    fetch(`/api/sessions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            "public": {
                "country": {
                    "value": "BRA"
                },
                "postalCode": {
                    "value": mycep
                }
            }
        })
    }).then(res => {
        vtexjs.session.getSession().done(e => console.log(e));
        $('#header-location-modal').modal('hide');
    })


    //console.log(cep);
    //let geocoder = new google.maps.Geocoder();
    /*  geocoder.geocode({ 'address': cep }, function (results, status) {
          if (status === "OK") {
              console.log(results)
              coordinates = `${results[0].geometry.location.lat()},${results[0].geometry.location.lng()}`;
              console.log(coordinates);
  
              //Save on VTEX SESSION
  
             
  fetch(`/api/sessions`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify( {
          "public": {
              "country": {
                  "value": "BRA"
              },
              "geoCoordinates": {
                  "value": `${coordinates}`
              }
          }
      })
  })
  
  
  
          } else {
              alert("Não conseguimos adquirir sua localização")
          }
  
      })*/

}

// Bias the autocomplete object to the user's geographical location,
// as supplied by the browser's 'navigator.geolocation' object.
function geolocate() {
    console.log("geo activated");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var geolocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            var circle = new google.maps.Circle(
                { center: geolocation, radius: position.coords.accuracy });
            autocomplete.setBounds(circle.getBounds());
        });
    }
}







/*vtexjs.session.getSession().done(e => {
    console.log(e);




}

)*/






