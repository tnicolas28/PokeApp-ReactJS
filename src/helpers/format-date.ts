export default class DateFormatter {

    /**
     * 
     * @param date Date typescript
     * 
     * Renvoie une date sous format dd/MM/YYYY
     */
    public dateFormat(date : Date): string {
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }
}