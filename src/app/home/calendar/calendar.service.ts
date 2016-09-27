import {Injectable} from '@angular/core';

@Injectable()
export class CalendarService {

  constructor() {
  }

  getData() {

    return {
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      defaultDate: '2016-03-08',
      selectable: true,
      selectHelper: true,
      editable: true,
      eventLimit: true,
      events: [
        {
          title: 'All Day Event',
          start: '2016-03-01',
          color: '#1b70ef'
        },
        {
          title: 'Long Event',
          start: '2016-03-07',
          end: '2016-03-10',
          color: '#40daf1'
        },
        {
          title: 'Dinner',
          start: '2016-03-14T20:00:00',
          color: '#00abff'
        },
        {
          title: 'Birthday Party',
          start: '2016-04-01T07:00:00',
          color: '#3c4eb9'
        }
      ]
    };
  }
}
