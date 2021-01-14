fetch(`https://ipinfo.io?token=`)
    .then(response => {
        return response.json();
    })
    .then(res => {
        console.log(res);
        let coordinates = res.postal;
        
        fetch(`/api/sessions`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: {
                "public": {
                    "country": {
                        "value": "BRA"
                    },
                    "postalCode": {
                        "value": coordinates
                    }
                }
            }
        }).then(res=>{
            vtexjs.session.getSession().done(e=>console.log(e))
        })
    });