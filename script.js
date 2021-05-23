let myChart = document.getElementById('myChart').getContext('2d');


Chart.defaults.global.defaultFontFamily = 'Mukta';
Chart.defaults.global.defaultFontSize = 15;
Chart.defaults.global.defaultFontColor = '#777';

let massPopChart = new Chart(myChart, {
  type:'bar', 
  data:{
    labels:['Bilar Kör', 'Atteviks', 'Hermans bilar', 'Haralds cykel', 'Åverts familje bil', 'Alfons husbil'],
    datasets:[{
      label:'Sannolikheten för samlag',
      data:[
        100,
        90,
        80,
        50,
        62,
        3
      ],
     
      
      backgroundColor:[
        'rgba(15, 9, 12, 0.5)',
        'rgba(2, 12, 135, 0.5)',
        'rgba(55, 06, 86, 0.5)',
        'rgba(5, 92, 12, 0.5)',
        'rgba(253, 02, 255, 0.5)',
        'rgba(205, 59, 64, 0.5)',
        'rgba(155, 9, 132, 0.5)'
      ],
      borderWidth:1,
      borderColor:'#777',
      hoverBorderWidth:2,
      hoverBorderColor:'#000'
    }
    ,{
      label:'Coolhets faktor',
      data:[
        100,
        10,
        60,
        10,
        6,
        80
      ],
     
      
      backgroundColor:[
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
        'rgba(255, 99, 132, 0.5)'
      ],
      borderWidth:1,
      borderColor:'#777',
      hoverBorderWidth:2,
      hoverBorderColor:'#000'
    }]
  },
  options:{
    title:{
      display:true,
      text:'Märkvärdig statestik',
      fontSize:25
    },
    legend:{
      display:true,
      position:'right',
      labels:{
        fontColor:'#000'
      }
    },
    layout:{
      padding:{
        left:50,
        right:0,
        bottom:0,
        top:0
      }
    },
    tooltips:{
      enabled:true
    }
  }
}); //Chart js kod 

//Kod för köp menu

$('.minus-btn').on('click', function(e) {
  e.preventDefault();
  var $this = $(this);
  var $input = $this.closest('div').find('input');
  var value = parseInt($input.val());

  if (value > 1) {
    value = value - 1;
  } else {
    value = 0;
  }

  $input.val(value);

});

$('.plus-btn').on('click', function(e) {
  e.preventDefault();
  var $this = $(this);
  var $input = $this.closest('div').find('input');
  var value = parseInt($input.val());

  if (value < 100) {
    value = value + 1;
  } else {
    value =100;
  }

  $input.val(value);
});



