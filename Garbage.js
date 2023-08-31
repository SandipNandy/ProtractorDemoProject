it('Go inside Check out->Validate the Total Amount->Purchase by selecting country', function () {
    
    //element(by.css("li[class='nav-item active']")).click();
    
    QAClickAcademy_POM.Click_On_Checkout();
    
    /* element(by.xpath("//tr[1]//td[4]//strong[1]")).getText().then(function (text4) {
         console.log(text4);
         var rr = text4.split(' ');
         var rrs = parseInt(rr[1]);
         console.log('rrs:' + rrs);

         add1(rrs)

     })


     function add1(s) {

         element(by.xpath("//tr[2]//td[4]//strong[1]")).getText().then(function (text5) {
             console.log(text5);
             var tt = text5.split(' ');
             var tts = parseInt(tt[1]);
             console.log('tts:' + tts);
             add2(tts);
         })
         function add2(t) {
             element(by.css("td[class='text-right'] strong")).getText().then(function (text6) {
                 var yy = text6.split(' ');
                 var yys = parseInt(yy[1]);
                 var e = s + t;
                 console.log('e:' + e);
                 expect(yys).toEqual(e);
             })

         }
     }*/
    QAClickAcademy_Fun.Validation_Total_Amount(i);

    // element(by.className("btn btn-success")).click();
    QAClickAcademy_POM.Click_On_Checkout2();
    //element(by.css("input[id='country']")).sendKeys('india');
    QAClickAcademy_POM.Select_Suggested_Country(Worksheet1['I' + i].v);
    //browser.actions().mouseMove(element(by.className("suggestions"))).click().perform();
    let suggestion = QAClickAcademy_POM.Select_Suggested_Country();
    browser.actions().mouseMove(suggestion).click().perform();
    let termCondition = QAClickAcademy_POM.Term_ConditionCheck_Box();
    browser.actions().mouseMove(termCondition).click().perform();
    //element(by.xpath("//input[@class='btn btn-success btn-lg']")).click();
    QAClickAcademy_POM.Purchase_Item();
});
xit('Validation of Successful Purcahse', function () {
    //element(by.css("div[class*='dismissible'"))
    QAClickAcademy_POM.Last_Sucess_Message().getText().then(function (text7) {
        expect(text7).toBe('×\n' + 'Success! Thank you! Your order will be delivered in next few weeks :-).');
    })
    element(by.xpath("//a[contains(text(),'ProtoCommerce Home')]")).click();
});
