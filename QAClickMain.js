var XLSX = require('xlsx');
var workbook = XLSX.readFile('../Users/SandipNandi/Videos/QAClickAcedamy_Data.xlsx');
var QAClickAcademy_POM = require('./QAClickPom.js');
var QAClickAcademy_Fun = require('./QAClickFunction.js');

const { getMaxListeners } = require('process');

var Worksheet1 = workbook.Sheets['Sheet1'];

var Worksheet2 = workbook.Sheets['Sheet2'];
var a = Worksheet1['J2'].v;
var b = Worksheet1['K2'].v;

describe('Practice with QAClick Academy', function () {

    it('Launch the URL into Browser', function () {
        QAClickAcademy_POM.Get(Worksheet1['A2'].v);
        // browser.get("https://qaclickacademy.github.io/protocommerce/");
        browser.manage().window().maximize();
        browser.getTitle().then(function (title) {
            console.log(title);

        });
    });
    //var i=a;

    it('Registraction Form Fill ups', function () {
        for (var i = a; i <= b; i++) {
            QAClickAcademy_POM.Enter_Username(Worksheet1['B' + i].v);
            // element(by.name("name")).sendKeys("Black Panther");
            browser.driver.sleep(1000);
            //element(by.css("input[name='email']")).sendKeys("helloworld@gmail.com");
            QAClickAcademy_POM.Enter_Email(Worksheet1['C' + i].v);
            browser.driver.sleep(1000);
            //element(by.id("exampleInputPassword1")).sendKeys("password1");
            QAClickAcademy_POM.Enter_Password(Worksheet1['D' + i].v);
            browser.driver.sleep(1000);
            // element(by.css("input[type='checkbox']")).click();
            QAClickAcademy_POM.Click_Checkbox();
            browser.driver.sleep(1000);
            //element(by.cssContainingText("[id='exampleFormControlSelect1'] option", "Male")).click();
            QAClickAcademy_Fun.Select_Gender(Worksheet1['E' + i].v);
            browser.driver.sleep(1000);
            //element.all(by.name("inlineRadioOptions")).get(1).click();
            QAClickAcademy_POM.Select_RadioButton().get(Worksheet1['H' + i].v).click();
            browser.driver.sleep(1000);
            //element(by.css("input[type='date']")).sendKeys('12-11-2020');
            QAClickAcademy_POM.Give_DateOf_Birth(Worksheet1['F' + i].v);
            browser.driver.sleep(1000);
            //let list = element.all(by.css("[class='alert alert-danger']"));
            let list = QAClickAcademy_POM.Error_Count();
            expect(list.count()).toEqual(0);
            /*element(by.buttonText("Submit")).click().then(function () {
                element(by.css("div[class*='success'")).getText().then(function (text) {
                    browser.executeScript('window.scrollTo(0,0);');
                    expect(text).toBe('×\n' + 'Success! The Form has been submitted successfully!.');
                })
            })*/

            QAClickAcademy_POM.Click_Submit().click().then(function () {
                QAClickAcademy_POM.Show_Success().getText().then(function (text) {
                    browser.executeScript('window.scrollTo(0,0);');
                    expect(text).toBe('×\n' + 'Success! The Form has been submitted successfully!.');
                })
            })
            browser.refresh();
        }
    });

    it('Validation of Error Messages', function () {
        //element(by.name("name")).clear();
        let a = QAClickAcademy_POM.Enter_UsernameValidation()
        a.sendKeys('abcd');
        a.clear();
        a.sendKeys("B").then(function () {
            browser.driver.sleep(1000);
            //element.all(by.css("[class='alert alert-danger']")).get(0).getText().then(function (text) {
            QAClickAcademy_POM.Error_Message_Username().get(0).getText().then(function (text) {

                browser.driver.sleep(1000);
                expect(text).toBe('Name should be at least 2 characters');

            })
        })
        //let a = element(by.css("input[name='email']"));
        let b = QAClickAcademy_POM.email_Box_Validation();
        b.sendKeys('s')
        b.clear().then(function () {
            b.sendKeys('f').then(function () {
                browser.actions().mouseMove(b).sendKeys(protractor.Key.chord(protractor.Key.BACK_SPACE)).perform();
                browser.driver.sleep(1000);
                //   element.all(by.css("[class='alert alert-danger']"))
                QAClickAcademy_POM.Error_Meassage_Email().get(1).getText().then(function (text1) {
                    expect(text1).toBe('Email is required');
                })
            })
        })

        //element(by.xpath("//h4[contains(text(),'Two-way Data Binding example:')]//input[@name='name']"))
        QAClickAcademy_POM.Data_Binding_Example().click().then(function () {
            browser.driver.sleep(1000);
            browser.actions().sendKeys(protractor.Key.ARROW_DOWN).click().perform();

        })

    });
    it('Go inside the Shop', function () {

        for (var i = a; i <= b; i++) {
            // element(by.linkText('Shop')).click();
            QAClickAcademy_POM.Click_On_Shop();
            /*element.all(by.tagName('app-card')).each(function (products) {
                products.element(by.css('h4 a')).getText().then(function (text) {
                    if(text=='iphone X'){
                        products.element(by.css('button[class*="btn-info"')).click();
                    }
                   else if (text == 'Nokia Edge') {
                        products.element(by.css('button[class*="btn-info"')).click();
                    }
                    else if (text == 'Blackberry') {
                        products.element(by.css('button[class*="btn-info"')).click();
                    }
                })
    
            })*/
            QAClickAcademy_Fun.Select_Products(i);
            //element(by.partialLinkText("Checkout"));
            /* function one(){
                 var rr=Worksheet1['G'+i].v;
                 console.log('rr:'+rr);
                
                return rr
                 /*var myData = [];
                 myData.push(Worksheet1['G'+b].v);
                 return myData[b-2];*/
            //}

            /*QAClickAcademy_POM.Check_Out_Count().getText().then(function (text1) {
                console.log(text1)
                var r = text1.split('(');
                var u=r[1].trim().charAt(0);
                console.log('u:'+u);
               
                expect(b).toBe(''+value+'');
                
              })*/
            QAClickAcademy_Fun.Number_of_SelectedProducts(i);
            QAClickAcademy_POM.Click_On_Checkout();
            browser.driver.sleep(3000);
            QAClickAcademy_Fun.Validation_Total_Amount(i);
            // element(by.className("btn btn-success")).click();
            QAClickAcademy_POM.Click_On_Checkout2();
            //element(by.css("input[id='country']")).sendKeys('india');
            QAClickAcademy_POM.Give_Country(Worksheet1['I' + i].v);
            browser.driver.sleep(3000);
            //browser.actions().mouseMove(element(by.className("suggestions"))).click().perform();
            let suggestion = QAClickAcademy_POM.Select_Suggested_Country();
            browser.actions().mouseMove(suggestion).click().perform();
            let termCondition = QAClickAcademy_POM.Term_ConditionCheck_Box();
            browser.actions().mouseMove(termCondition).click().perform();
            //element(by.xpath("//input[@class='btn btn-success btn-lg']")).click();
            QAClickAcademy_POM.Purchase_Item();
            QAClickAcademy_POM.Last_Sucess_Message().getText().then(function (text7) {
                expect(text7).toBe('×\n' + 'Success! Thank you! Your order will be delivered in next few weeks :-).');
            })
            //element(by.xpath("//a[contains(text(),'ProtoCommerce Home')]")).click();
            QAClickAcademy_POM.Backto_ProtoCommerceHome();

        }
    });
    
    
    //i++;
    //}
});



