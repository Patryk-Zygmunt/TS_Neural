import javax.swing.text.DateFormatter;
import java.time.DateTimeException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;

public class Codewars {
    public static void main(String[] args) {

        System.out.println(new Time().convertTime("12:05:45PM"));



    }


    static class  Time {
        public  String convertTime(String time){
            var spl = time.split("(?=P|A)");
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HH:mm:ss");
            LocalTime formatDateTime = LocalTime.parse(spl[0], formatter);
            if(spl[1].equals("M") && formatDateTime.getHour()  == 12) return formatter.format(formatDateTime.minusHours(12));
            return spl[1].equals("PM")?  formatter.format(formatDateTime.plusHours(12))
                    : formatter.format(formatDateTime);

        }

        public static String formatDate(String day, String month, String year){
            try{
                return  DateTimeFormatter.ofPattern("dd/MM/yyyy").format(LocalDate.of(Integer.parseInt(year),Integer.parseInt(month),Integer.parseInt(day)));
            }catch(DateTimeException e){
                return "Not a date";}
        }
    }










}
