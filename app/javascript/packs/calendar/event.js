//インストールしたファイルたちを呼び出します。
import { Calendar} from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import bootstrapPlugin from '@fullcalendar/bootstrap';

import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';

//<div id='calendar'></div>のidからオブジェクトを定義してカレンダーを作っていきます。
document.addEventListener('turbolinks:load', function() {
    var calendarEl = document.getElementById('calendar');

    //カレンダーの中身を設定(月表示とか、クリックアクション起こしたいとか、googleCalendar使うととか)
    var calendar = new Calendar(calendarEl, {
        plugins: [ interactionPlugin, dayGridPlugin, timeGridPlugin, bootstrapPlugin ],


        //細かな表示設定
        events: [{
                title:"実験に伴う変更",
                start:"2021-05-30T05:20:00",
                end:"2021-05-30T06:20:00",
                },
                {
                title:"実験2",
                start:"2021-05-30T06:20:00",
                end:"2021-05-30T07:20:00",
                }],
        eventColor: '#378006',
        themeSystem: 'bootstrap',
        locale: 'ja',
        timeZone: 'Asia/Tokyo',
        firstDay: 1,
        editable: false,
        navLinks: true,
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        // 効いてない
        expandRows: true,
        // 日付がヘッダーに固定される
        stickyHeaderDates: true,
        buttonText: {
          today:    '今日',
          month:    '月',
          week:     '週',
          day:      '日',
          list:     'リスト'
        }, 
        bootstrapFontAwesome: {
          //  close: 'fa-times',
            prev: 'fa-chevron-left',
            next: 'fa-chevron-right',
          //  prevYear: 'fa-angle-double-left',
          //  nextYear: 'fa-angle-double-right'
        },
        //height: "auto",
        showNonCurrentDates: true,
        fixedWeekCount: false,
        validRange: function(nowDate) {
          return {
            start: '2021-05-01',
            end: '2021-06-01'
          };
        },
        eventTimeFormat: {
          hour: '2-digit',
          minute: '2-digit',
          meridiem: false
        },
        //height: window.innerHeight - 100,
        //windowResize: function () {
        //   $('#calendar').fullCalendar('option', 'height', window.innerHeight100);
        // },
        dateClick: function(info){
            //日付をクリックしたときのイベント(詳しくは次回の記事へ)
        },
        eventClick: function(info){
            //表示されたイベントをクリックしたときのイベント(詳しくは次回の記事へ)
        },
        eventClassNames: function(arg){
            //表示されたイベントにclassをcss用に追加する(詳しくは次回の記事へ)
        }

    });
    //カレンダー表示
    calendar.render();

});
