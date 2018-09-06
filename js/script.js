Quagga.init({
    inputStream: {
        name: "Live",
        type: "LiveStream",
        target: document.querySelector('#targetElement')
    },
    decoder: {
        readers: ["code_128_reader"]
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
    Quagga.stop();
});