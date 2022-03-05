/**
 * 
 * @param none 
 * @returns {Number}
 * @customfunction
 * @author: Matt Daly
 * @copyright: Matt Daly 2022 
 */



//traverse the active row and apply the formula to each cell
function CURRENCY_CONVERTER() 
{

  
  
  //create an empty array to store the values
    var currencyArray = [];
  //fetch active row
    var activeRow = SpreadsheetApp.getActiveSheet().getActiveCell().getRow();
    //get the values from the active row
    var values = SpreadsheetApp.getActiveSheet().getRange(activeRow, 1, 1, SpreadsheetApp.getActiveSheet().getLastColumn()).getValues();
    //break the values into a map{char, string} line by line with the char as the key starting at A
    var map = values[0].map((value, index) => ({ char: String.fromCharCode(65 + index), value: value }));

   
    
    
    

   
    

    //Loop through active row and apply conversions


    for (var i = 4; i < 14; i++) 
    {
        console.log("VALUE BEFORE CONVERSION IS " + map[i].value);
        
        switch (map[i].char) 
        {
            case "E":
                
                map[i].value *= 0.05;
                break;
            case "F":
                
                map[i].value *= 0.10;
                break;
            case "G":
                
                map[i].value *= 0.25;
                break;
            case "H":
                
                map[i].value *= 1.00;
                break;
            case "I":
                
                map[i].value *= 2.00;
                break;
            case "J":
                
                map[i].value *= 5.00;
                break;
            case "K":
                map[i].value *= 10.00;
                break;
            case "L":
                map[i].value *= 20.00;
                break;
            case "M":
                map[i].value *= 50.00;
                break;
            case "N":
                map[i].value *= 100.00;
                break;
            default:
                break;

        }
         //debug print value
        Logger.log(map[i].value + " VALUE AT " + map[i].char);
        
        //Add cellValue to currencyArray
        currencyArray.push(Number(map[i].value));
    }

    //debug print currencyArray
    Logger.log(currencyArray);

    var sum = 0;
    //loop through currencyArray and sum the values
    for(var i = 0; i < currencyArray.length; i++)
    {
        Logger.log(currencyArray[i] + " + " + sum);
        sum += currencyArray[i];
        Logger.log(" = " + sum);
    }
    

    

   return sum;
  
    
}

