window.addEventListener('load', () => {
            let long;
            let lat;
            navigator.geolocation.getCurrentPosition(position => {
                    long = position.coords.longitude;
                    lat = position.coords.latitude;



                    fetch(`https://api.darksky.net/forecast/d1fe88072ae056c11882e10474506212/${lat},${long}`, { mode: 'no-cors' })
                        .then(response => {
                            console.log(response)
                            return response.json()
                        })
                        .then(data => {
                            // Work with JSON data here
                            console.log(data)
                        })
                        .catch(err => {
                            // Do something for an error here
                            console.log(err)
                            console.log("Das ist ein Error")
                        })
                }
            });