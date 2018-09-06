Quagga.init({
    inputStream: {
        name: "Live",
        type: "LiveStream",
        target: document.querySelector('#targetElement'),
        constraints: {
            height: 300,
            width: 300
        }
    },
    decoder: {
        readers: ["code_39_reader"]
    }
}, function (err) {
    if (err) {
        console.log(err);
        return
    }
    console.log("Initialization finished. Ready to start");
    Quagga.start();
});

Quagga.onDetected(function (data) {
    console.log('on detected');
    document.getElementById('result').innerHTML = data.codeResult.code;
    console.log(data.codeResult.code);
    Quagga.stop();
});