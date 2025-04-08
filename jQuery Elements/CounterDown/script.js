const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('May 29, 2022 03:55:00').getTime(),
    x = setInterval(function() {    

      let now = new Date().getTime(),
          distance = countDown - now;

        document.getElementById('days').innerText = Math.floor(distance / (day)),
            
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
            
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
            
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

      //do something later when date is reached
      if (distance <= 0) {
        clearInterval(x);
        //alert('This is my birthday');
          
    document.getElementById('days').innerText = 0,
            
    document.getElementById('hours').innerText = 0,
            
    document.getElementById('minutes').innerText = 0,
            
    document.getElementById('seconds').innerText = 0; 
          
    document.getElementById('heading').innerText = 'This is my birthday !';    
      }

    }, second)