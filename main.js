

$(function () {
    var i, canvas, context, points = [];
     
    canvas = $("#canvas")[0];
    context = canvas.getContext("2d");
    context.strokeStyle = "rgba(0, 0, 0, 0.2)";
     
    $("#canvas").mousemove(function (event) {
        var p0, p1, dx, dy, dist, max = 150;
        p0 = {x:event.pageX - this.offsetLeft, y:event.pageY - this.offsetTop};
        for(i = 0; i < points.length; i += 1) {
            p1 = points[i];
            dx = p1.x - p0.x;
            dy = p1.y - p0.y;
            dist = Math.sqrt(dx * dx + dy * dy);
            console.log(dist);
            if(dist < max) {
                context.beginPath();
                context.lineWidth = 1.0 - dist / max;
                context.moveTo(p0.x, p0.y);
                context.lineTo(p1.x, p1.y);
                context.stroke();
            }
        }
        points.push(p0);
    });
});