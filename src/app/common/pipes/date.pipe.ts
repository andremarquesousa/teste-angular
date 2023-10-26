import { Pipe, PipeTransform } from '@angular/core';
import { format, parseISO } from 'date-fns';

@Pipe({
    name: 'formatDate'
})
export class DatePipe implements PipeTransform {
    transform(date: any) {
        const st = date.replace(/\//g, '.');
        const pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
        const dt = parseISO(st.replace(pattern,'$3-$2-$1'));
        return format(dt, 'dd/MM/yyyy');;
    }
}
