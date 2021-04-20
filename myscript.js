window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        exportEnabled: true,
        theme: "dark2", // "light1", "light2", "dark1", "dark2"
        title:{
            text: "Statistički podaci"
        },
        data: [{
            
            dataPoints: [
                { label: "Danska", y: 90 },
                { label: "Holandija", y: 88 },
                { label: "Finska", y: 85 },
                { label: "Svedska", y: 85 },
                { label: "Estonija", y: 79},
                { label: "Luksemburg", y: 75 },
                { label: "Velika Britanija", y: 69 },
                { label: "Belgija", y: 68 },
                { label: "Francuska", y: 62 },
                { label: "Nemačka", y: 61 },
                { label: "Srbija", y: 55 },
                { label: "Austria", y: 54},
                { label: "Letonija", y: 52 },
                { label: "Litvanija", y: 53},
                { label: "Češka", y: 55},
                { label: "Slovačka", y: 50 },
            ]
        }]
    });
    chart.render();
    
    }