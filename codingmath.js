window.onload = function() {
    let canvas = document.getElementById("canvas"),
        ctx = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;
    //ctx.fillRect(0, 0, width, height);

    for (let i = 0; i < 100; i++) {
        ctx.beginPath();
        ctx.moveTo(Math.random() * width, Math.random() * height);
        ctx.lineTo(Math.random() * width, Math.random() * height);
        ctx.stroke();
    }
};

let getDegrees = (rds) => {
    let dgs = (rds * 180)/Math.PI;
    return dgs;
}

let getRadians = (dgs) => {
    let rds = (dgs * Math.PI)/180;
    return rds;
}