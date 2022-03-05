/**
 * 
 * @param ActiveRow 
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
  //Loop through active row and apply conversions
    for (var i = 0; i < activeRow.length; i++) 
    {
        //get the value of the cell
        var cellValue = activeRow[i].getValue();
        //get the value of the column
        var columnValue = activeRow[i].getColumn().getValue();
        //print column value
        console.log(columnValue);
        switch (columnVal) 
        {
            case "E":
                cellValue *= 0.05;
                break;
            case "F":
                cellValue *= 0.10;
                break;
            case "G":
                cellValue *= 0.25;
                break;
            case "H":
                cellValue *= 1.00;
                break;
            case "I":
                cellValue *= 2.00;
                break;
            case "J":
                cellValue *= 5.00;
                break;
            case "K":
                cellValue *= 10.00;
                break;
            case "L":
                cellValue *= 20.00;
                break;
            case "M":
                cellValue *= 50.00;
                break;
            case "N":
                cellValue *= 100.00;
                break;

        }
    }

    //Add cellValue to currencyArray
    currencyArray.push(cellValue);
    //loop through the currencyArray and sum the values
    var sum = 0;
    for (var i = 0; i < currencyArray.length; i++)
    {
        sum += currencyArray[i];
    }
    
    //format the sum to 2 decimal places with a dollar sign
    var sumFormatted = "$" + sum.toFixed(2);

    //debug print the sumFormatted
    console.log(sumFormatted);
    //return the sum
    return sumFormatted;
    
}

