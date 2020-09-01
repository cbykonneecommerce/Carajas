


$("#commit").click(()=>{
    event.preventDefault(); 
    //console.log($("#cl_email").val())
    let dados = {
            Email : $("#emailform").val()
    }

    fetch("/api/dataentities/NL/documents", {
        method: 'PATCH',
               headers: {
                "Content-Type": "application/json"
                  },
        body: JSON.stringify(dados)
    })
    .then((res) => {return res})
    .then(result =>{
        console.log(result);
        alert("Inscrição concluída");
    })
    .catch(err => console.log(err))
})
    
//{"token":"4aa0282ea8cc1d4e14f434074119f772"}


$("#commit").click(()=>{
    event.preventDefault(); 
    
   
})
    