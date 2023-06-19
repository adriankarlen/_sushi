import { useState, useEffect } from 'react';
import config from './config.json';

export default function Clock() {
    const [time, setTime] = useState(new Date());

    const tick = () => {
        setTime(new Date());
    };

    useEffect(() => {
        const timerID = setInterval(() => tick(), 30000); // Update clock every 30 seconds
        return function cleanup() {
            clearInterval(timerID);
        };
    });

    return (
        <section id='clock'>
            <h1 className='sr-only'>Clock</h1>
            <h1 id='time'>
                {time.toLocaleTimeString(config.timeFormat, config.timeOptions)}
            </h1>
        </section>
    );
}

// import config from './config.json';

// export default function Clock() {
//     const textClock = () => {
//         var newDate = new Date(),
//             day = newDate.getDay(),
//             hours = newDate.getHours(),
//             minutes = newDate.getMinutes().toString(),
//             seconds = newDate.getSeconds().toString();

//         if (hours > 12 && hours !== 0 && hours !== 23) {
//             hours = hours - 12;
//         }
//         if (minutes < 10) {
//             minutes = 0 + minutes;
//         }
//         if (seconds < 10) {
//             seconds = 0 + seconds;
//         }

//         var minsSecs = minutes + seconds;
//         if (minsSecs > 3230) {
//             hours++;
//         }

//         if (day == 5) {
//             $('#tgif').html('TGIF');
//         }

//         hoursObj = {
//             1: '#one',
//             2: '#two',
//             3: '#three',
//             4: '#four',
//             5: '#five-hr',
//             6: '#six',
//             7: '#seven',
//             8: '#eight',
//             9: '#nine',
//             10: '#ten-hr',
//             11: '#eleven',
//             12: '#twelve',
//             23: '#eleven',
//             24: '#midnight',
//             0: '#midnight'
//         };

//         updateHour(hoursObj[hours]);

//         if (
//             (minsSecs >= 5730 && minsSecs < 6000) ||
//             (minsSecs >= 0 && minsSecs < 230)
//         ) {
//             if (hours !== 24 && hours !== 0) {
//                 updateDesc('#oclock');
//             }
//         } else if (minsSecs >= 230 && minsSecs < 730) {
//             updateDesc('#five, #past');
//         } else if (minsSecs >= 730 && minsSecs < 1230) {
//             updateDesc('#ten, #past');
//         } else if (minsSecs >= 1230 && minsSecs < 1730) {
//             updateDesc('#quarter, #past');
//         } else if (minsSecs >= 1730 && minsSecs < 2230) {
//             updateDesc('#twenty, #past');
//         } else if (minsSecs >= 2230 && minsSecs < 2730) {
//             updateDesc('#twenty, #five, #past');
//         } else if (minsSecs >= 2730 && minsSecs < 3230) {
//             updateDesc('#half, #past');
//         } else if (minsSecs >= 3230 && minsSecs < 3730) {
//             updateDesc('#twenty, #five, #to');
//         } else if (minsSecs >= 3730 && minsSecs < 4230) {
//             updateDesc('#twenty, #to');
//         } else if (minsSecs >= 4230 && minsSecs < 4730) {
//             updateDesc('#quarter, #to');
//         } else if (minsSecs >= 4730 && minsSecs < 5230) {
//             updateDesc('#ten, #to');
//         } else if (minsSecs >= 5230 && minsSecs < 5730) {
//             updateDesc('#five, #to');
//         } else {
//             updateDesc();
//         }
//     };

//     const updateDesc = (classes) => {
//         $('.desc').removeClass('active');
//         $(classes).addClass('active');
//     };

//     const updateHour = (classes) => {
//         $('.hr').removeClass('active');
//         $(classes).addClass('active');
//     };

//     setInterval(function () {
//         textClock();
//     }, 1000);

//     return (
//         <div id='text-clock'>
//             <p id='line-1'>
//                 <span id='it' class='active'>
//                     IT
//                 </span>
//                 L
//                 <span id='is' class='active'>
//                     IS
//                 </span>
//                 AS<span id='tgif'>GTFI</span>
//             </p>
//             <p id='line-2'>
//                 AC
//                 <span id='quarter' class='desc'>
//                     QUARTER
//                 </span>
//                 BS
//             </p>
//             <p>
//                 <span id='twenty' class='desc'>
//                     TWENTY
//                 </span>
//                 <span id='five' class='desc'>
//                     FIVE
//                 </span>
//                 X
//             </p>
//             <p>
//                 <span id='half' class='desc'>
//                     HALF
//                 </span>
//                 B
//                 <span id='ten' class='desc'>
//                     TEN
//                 </span>
//                 F
//                 <span id='to' class='desc'>
//                     TO
//                 </span>
//             </p>
//             <p>
//                 <span id='past' class='desc'>
//                     PAST
//                 </span>
//                 ERU
//                 <span id='nine' class='hr'>
//                     NINE
//                 </span>
//             </p>
//             <p>
//                 <span id='one' class='hr'>
//                     ONE
//                 </span>
//                 <span id='six' class='hr'>
//                     SIX
//                 </span>
//                 <span id='three' class='hr'>
//                     THREE
//                 </span>
//             </p>
//             <p id='line-7'>
//                 <span id='four' class='hr'>
//                     FOUR
//                 </span>
//                 <span id='five-hr' class='hr'>
//                     FIVE
//                 </span>
//                 <span id='two' class='hr'>
//                     TWO
//                 </span>
//             </p>
//             <p id='line-8'>
//                 <span id='eight' class='hr'>
//                     EIGHT
//                 </span>
//                 <span id='eleven' class='hr'>
//                     ELEVEN
//                 </span>
//             </p>
//             <p id='line-9'>
//                 <span id='seven' class='hr'>
//                     SEVEN
//                 </span>
//                 <span id='twelve' class='hr'>
//                     TWELVE
//                 </span>
//             </p>
//             <p id='line-10'>
//                 <span id='ten-hr' class='hr'>
//                     TEN
//                 </span>
//                 SE
//                 <span id='oclock' class='desc'>
//                     OCLOCK
//                 </span>
//             </p>
//             <p id='line-11'>
//                 <span id='midnight' class='hr'>
//                     MIDNIGHT
//                 </span>
//             </p>
//         </div>
//     );
// }
