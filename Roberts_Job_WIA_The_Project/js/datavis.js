/* Data Vis */

var radarChartData = {
    labels: ["Coding","Photography","Web Design"],
    datasets: [
        {
            label: "Weekends",
            fillColor: "rgba(81,188,238,.3)",
            strokeColor: "rgba(81,188,238,.3)",
            pointColor: "rgba(81,188,238,.3)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(81,188,238,.3)",
            data: [60,30,10]
        }
    ]
};

window.onload = function(){
    window.myRadar = new Chart(document.getElementById("canvas").getContext("2d")).Radar(radarChartData, {
        responsive: true
    });
}