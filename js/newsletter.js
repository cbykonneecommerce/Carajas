
$("#commit").click(function (event) {
    event.preventDefault();
  

        let myname = $("#nameform").val();
        let myemail = $("#emailform").val();
        console.log(myname, myemail)
        __blc['id'] = "7b7cf8b423b8c4472176d1372701ecdd";

        try {

            lc.sendData({
                evento: "Novo Cadastro Newsletter",
                nm_email: myemail,
                vars: {
                    nome: myname,
                },
                vars_json: {

                },
                lista: {
                    nm_lista: "Carajas_Newsletter",
                    atualizar: "1",
                    nome: myname

                }
            });

          alert("Inscrição concluída!")

        } catch (e) {
            alert("Algo de errado aconteceu :( \n Tente mais tarde")
        }
    



})


$("#committ").click(function (event) {
    event.preventDefault();
  

        let myname = $("#nameformblack").val();
        let myemail = $("#emailformblack").val();
        console.log(myname, myemail)
        __blc['id'] = "7b7cf8b423b8c4472176d1372701ecdd";

        try {

            lc.sendData({
                evento: "Novo Cadastro Newsletter",
                nm_email: myemail,
                vars: {
                    nome: myname,
                },
                vars_json: {

                },
                lista: {
                    nm_lista: "Carajas_BlackFriday",
                    atualizar: "1",
                    nome: myname

                }
            });

          alert("Inscrição concluída!")

        } catch (e) {
            alert("Algo de errado aconteceu :( \n Tente mais tarde")
        }
    



})






