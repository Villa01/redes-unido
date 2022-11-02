export const peticion = async (endpoint, data, method = 'GET') => {
    console.log("data:",data)

    console.log("UEL",endpoint)

    const url = endpoint

    if (method === 'GET') {
        const resp = await fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json'
            }
         
        })

        return await resp.json()

    }
    else {

        const resp = await fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        return await resp.json();


    }



}