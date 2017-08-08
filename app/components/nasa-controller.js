function NasaController() {
    var nasaService = new NasaService()

    function drawImage(nasaImage) {
        var template = ''
        console.log(nasaImage)
        var imageElem = document.getElementById('nasa-image')

        // for (i = 0; i < nasaImage.length; i++) {
        //        var image = nasaImage[i]
                template +=`
                <img src="${nasaImage}" alt="" class="src">
                
                `
        // }
        imageElem.innerHTML=template
    }

    this.getNasaImage = function () {

        nasaService.getNasaImage(drawImage)
    
    }






}