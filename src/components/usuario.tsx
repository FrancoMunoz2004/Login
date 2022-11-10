


export const Usuario = (user:string, password:string) => {

    let datos = JSON.parse(localStorage.getItem("user") || '[]')
    let confirm1 = false;
    for (let i = 0; i < datos.length; i++){
        if (datos[i].user === user && datos[i].password === password) {
           confirm1 = true;
        }
     }   

 console.log(confirm1)

 
if(confirm1){
    alert(`Has iniciado correctamente ${user}`)
    window.location.href = `/Admin`;

    }else{
        alert("no existe")
    }
}



