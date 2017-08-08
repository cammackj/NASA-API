function NasaService() {

    var images = []

    var apiKey = '?api_key=Nd1dYRtj4nQipLGd6ge9vQEifluEA8pRFAX5eRXL';
    var baseUrl = 'https://api.nasa.gov/planetary/apod';


    this.getNasaImage = function (cb) {

        $.get(baseUrl + apiKey).then(function (res) {
            nasaImage = res.url
            cb(nasaImage)
        })

    }


}
