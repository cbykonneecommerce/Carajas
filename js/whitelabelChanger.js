$(document).ready(function () {
    setTimeout(function () {
        vtexjs.session.getSession().done(e => {
            console.log("session chamado")

            if (!e.namespaces.public.postalCode) {
                console.log("na existe ainda")
                fetch(`https://ipinfo.io?token=d66877ef7a2473`)
                    .then(response => {
                        return response.json();
                    })
                    .then(res => {
                        console.log(res);
                        let coordinates = res.postal;

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
                        })
                    });
            } else {
                console.log("Ja existia")
            }
        }
        )
    }, 1000)

})











