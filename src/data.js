<<<<<<< HEAD
   window.loadData = {
=======
window.loadData = {
>>>>>>> 1fa0cbb064e4bc702e77bcd4383ee2c348a6f721
    getCampuses: (url) => { /*obtener los paises en los que se encuentra Laboratoria*/
        let options = {
            method: 'GET',//método GET envía los datos usando la URL
            headers: {  //Añade un nuevo valor en un encabezado existente dentro de un Headersobjeto o agrega el encabezado si aún no existe.

                "Accept": "application/json"
            },
    
        };

        return fetch(url, options) //devuelve la promesa sea exitosa o no
         .then(response => {
            if (response.ok) { //si todo anda bien deberia devolver un 200
              return response.json()
            }
            return Promise.reject(Error('error'))//devuelve un Promiseobjeto que se rechaza con la razón dada.
        })
         
        .catch(error => {
            return Promise.reject(Error(error.message))
        });

    }, 

  getCohortsByIid: (url, data) => { //obtener la data de la api cohorts 
        let options = {
            method: 'GET',//método GET envía los datos usando la URL
            headers: {  //Añade un nuevo valor en un encabezado existente dentro de un Headersobjeto o agrega el encabezado si aún no existe.

                "Accept": "application/json"
            },
            data: data
        };
        
         return fetch(url, options) //devuelve la promesa sea exitosa o no
         .then(response => {
            if (response.ok) { //si todo anda bien deberia devolver un 200
              return response.json()
            }
            return Promise.reject(Error('error'))//devuelve un Promiseobjeto que se rechaza con la razón dada.
          })
         
        .catch(error => {
            return Promise.reject(Error(error.message))
        });

    },

    getUserLab: (url) =>{ //obtener la data de la api cohorts 
        let options = {
            method: "GET",
            headers: {  //Añade un nuevo valor en un encabezado existente dentro de un Headersobjeto o agrega el encabezado si aún no existe.

                "Accept": "application/json"
            },
    
        };

<<<<<<< HEAD
    getProgress: (url) =>{ //obtener la data de la api cohorts 
=======
    /*getProgress: (url) =>{ //obtener la data de la api cohorts 
>>>>>>> 1fa0cbb064e4bc702e77bcd4383ee2c348a6f721
            let options = {
                method: "GET",
                headers: {  //Añade un nuevo valor en un encabezado existente dentro de un Headersobjeto o agrega el encabezado si aún no existe.
    
                    "Accept": "application/json"
                },
        
<<<<<<< HEAD
            };
=======
            };*/
>>>>>>> 1fa0cbb064e4bc702e77bcd4383ee2c348a6f721
    
    

         return fetch(url, options) //devuelve la promesa sea exitosa o no
         .then(response => {
            if (response.ok) { //si todo anda bien deberia devolver un 200
              return response.json()
            }
            return Promise.reject(Error('error'))//devuelve un Promiseobjeto que se rechaza con la razón dada.
          })
         
        .catch(error => {
            return Promise.reject(Error(error.message))
        });

    },
}