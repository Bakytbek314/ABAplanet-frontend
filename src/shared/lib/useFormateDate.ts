import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

export const useFormateDate = (dateString: Date) => {
    const date = new Date(dateString);
    return format(date, 'dd-MMMM yyyy', { locale: ru });
}