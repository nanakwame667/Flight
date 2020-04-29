
export function formatDate(format, date){
    
    if (typeof date === 'number' || typeof date === 'string')
        date = new Date(date);
    let dd = date.getDate();
    let dn = date.getDay();
    let mm = date.getMonth()+1;
    let yy = date.getFullYear();
    let hh = date.getHours();
    let MM = date.getMinutes();
    let ss = date.getSeconds();
    let ms = date.getMilliseconds();
    if (dd < 10) dd = '0'+dd;
    if (mm < 10) mm = '0'+mm;
    if (hh < 10) hh = '0'+hh;
    if (ss < 10) ss = '0'+ss;
    if (ms < 10) ms = '0'+ms;
    if (MM < 10) MM = '0'+MM;
    return format
            .replace('ms', ms)
            .replace('ss', ss).replace('SS', ss)
            .replace('hh', hh).replace('HH', hh)
            .replace('MM', MM)
            .replace('dd', dd).replace('DD', dd)
            .replace('dn', dn).replace('DN', dn)
            .replace('mm', mm)
            .replace('yyyy', yy).replace('YYYY', yy)
            .replace('yy', String(yy).slice(2)).replace('YY', String(yy).slice(2));
}