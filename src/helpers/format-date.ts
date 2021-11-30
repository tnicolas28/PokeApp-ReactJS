export default class DateFormatter {

    /**
     * 
     * @param date Date typescript
     * 
     * Renvoie une date sous format dd/MM/YYYY
     */
    public dateFormat(date : Date = new Date()): string {
        return `${new Date(date).getDate()}/${new Date(date).getMonth() + 1}/${new Date(date).getFullYear()}`;
    }
}