firebase.initializeApp(firebaseConfig);
var dbRef = firebase.database();
var dataaa = dbRef.ref("data");

const ctx = document.getElementById('myChart').getContext('2d');
            
var myChart = new Chart(ctx, {
type: 'line',
data: {
    labels: [],
    datasets: [{
        label: 'PPG',
        data: [],
        backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }]
},
options: {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    }
}
});

// console.log(myChart.data.labels);
// console.log(myChart.data.datasets[0].data);
// console.log(arrayRange(1,5,1));

dataaa.on("value", (snapshoot) => {
    let ir = JSON.stringify(snapshoot.child('ir').val());
    let millis = snapshoot.child('millis').val();

    // console.log(JSON.stringify(snapshoot))
    // console.log(snapshoot.numChildren())
    // let ir_val = [];
    // ir.forEach((data_ir) => {
    //     //   emg_val += JSON.stringify(emg.val().emg)
    //     //   timestamp_val += JSON.stringify(emg.val().timestamp)
    //     //   servo_val += emg.val()
    //     //   console.log(JSON.stringify(emg.servo))
    // });
    // console.log(ir_val)
    // console.log(timestamp_val)
    // console.log(servo_val)
    console.log(ir)
        // var data = snapshot.val();
        myChart.data.labels.push(millis);
        myChart.data.datasets[0].data.push(ir);
        myChart.update();
});