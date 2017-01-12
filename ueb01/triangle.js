/**
 * Created by fabricebjl on 10/11/16.
 */

function Pascaltriangle(n){

    var i, j;
    var triangle = new Array();

    for(i = 0; i < n; i++){
        triangle[i] = new Array();
        triangle[i][0] = 1;

        for(j = 1; j < i; j++){
            triangle[i][j] = triangle[i-1][j] + triangle[i-1][j-1];
        }
        triangle[i][j] = 1;
    }

    for(i = 0; i < n; i++){
        for(var k = 0; k <= n - i; k++){
            document.write("<span style='font-family: monospace'>"  + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "</span>");
        }
        for(j = 0; j <= i; j++){
            //document.write("<span style='font-family: monospace'>" +triangle[i][j] + "</span>");
            if(triangle[i][j] < 9) {
                document.write("<span style='font-family: monospace'>" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + triangle[i][j] + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "</span>");
            }else if(triangle[i][j] < 99){
                document.write("<span style='font-family: monospace'>" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + triangle[i][j]  + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "</span>");
            }else{
                document.write("<span style='font-family: monospace'>" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + triangle[i][j] + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "</span>");
            }
        }
        document.write("<br/> <br/>");

    }
}