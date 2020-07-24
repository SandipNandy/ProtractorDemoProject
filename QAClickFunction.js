var XLSX = require('xlsx');
var workbook = XLSX.readFile('C:/Users/SandipNandi/Videos/QAClickAcedamy_Data.xlsx');
var Worksheet1 = workbook.Sheets['Sheet1'];
var Worksheet2 = workbook.Sheets['Sheet2'];

let Phone_ColumnNumber = require('./PhoneColumnSelection.js');


module.exports = {
    Select_Gender: function (a) {
        element(by.cssContainingText("[id='exampleFormControlSelect1'] option", "" + a + "")).click();
    },

    Select_Products: function (c) {
        element.all(by.tagName('app-card')).each(function (products) {
            products.element(by.css('h4 a')).getText().then(function (text) {
                for (var k = 1; k <= 4; k++) {
                    let str = Phone_ColumnNumber.phoneName(k);
                   // browser.driver.sleep(1000);
                    if (text == Worksheet2[str + c].v) {
                        var EC = protractor.ExpectedConditions;
                        var CSSPATH=products.element(by.css('button[class*="btn-info"'));
                        browser.wait(EC.presenceOf(CSSPATH), 5000).then(function(){
                                 CSSPATH.click();
                        });
                        //products.element(by.css('button[class*="btn-info"')).click();
                    }
                }

            })

        })
       
    },
    Number_of_SelectedProducts:function(d){
        element(by.partialLinkText("Checkout")).getText().then(function (text1) {
            console.log(text1)
            var r = text1.split('(');
            var u = r[1].trim().charAt(0);
            console.log('u:' + u);
            expect(u).toBe('' + Worksheet1['G' + d].v + '');

        })
    },

    Validation_Total_Amount: function (b) {
        var e = 0;
        for (let j = 1; j <= Worksheet1['G' + b].v; j++) {
            element(by.xpath("//tr[" + j + "]//td[4]//strong[1]")).getText().then(function (text4) {
                console.log(text4);
                var rr = text4.split(' ');
                let rrs = Number(rr[1]);
                e = rrs + e;
                console.log('e:' + e);
                  //tr[3]/td[5]/h3[1]/strong[1]
                if (j == Worksheet1['G' + b].v) {
                   // add1(e);
                   element(by.xpath("//tr["+(j+1)+"]/td[@class='text-right']/h3[1]/strong[1]")).getText().then(function (text6) {
                    var yy = text6.split(' ');
                    var yys = parseInt(yy[1]);
                    expect(yys).toEqual(e);})
                    
                }

            })
        }
        /* function add1(s) {

       element(by.xpath("//tr["+k+"]//td[4]//strong[1]")).getText().then(function (text5) {
           console.log(text5);
           var tt = text5.split(' ');
           var tts = parseInt(tt[1]);
           console.log('tts:' + tts);
           add2(tts);
       })*/
       /* function add1(s) {
            element(by.css("td[class='text-right'] strong")).getText().then(function (text6) {
                var yy = text6.split(' ');
                var yys = parseInt(yy[1]);
                expect(yys).toEqual(s);
            })

        }*/

    }
};