let QAClickAcedamyPom = function () {
    this.Get = function (url) {
        
       browser.get(url);
    };
 let enterusername =element(by.name("name"));
 this.Enter_Username = function (username) {
     
    enterusername.sendKeys(username);
     
 };
 this.Enter_UsernameValidation= function(){
     
     return enterusername;
     
 };
 let ErrorMessageUsernameEmail=element.all(by.css("[class='alert alert-danger']"));
    
 this.Error_Message_Username=function(){
     
    return ErrorMessageUsernameEmail;
 };
 let enteremail =  element(by.css("input[name='email']"));
 this.Enter_Email = function (email) {

    enteremail.sendKeys(email);;

 };
 let emailBoxValidation=element(by.css("input[name='email']"));
 this.email_Box_Validation=function(){
   return emailBoxValidation;
 };
 this.Error_Meassage_Email=function(){
    return ErrorMessageUsernameEmail;
 }


 let enterpassword = element(by.id("exampleInputPassword1"));
 this.Enter_Password = function (password) {

    enterpassword.sendKeys(password);

 };
 let ClickCheckbox= element(by.css("input[type='checkbox']"));
 this.Click_Checkbox=function(checkbox){
    ClickCheckbox.click();
 };
 let SelectRadioButton=  element.all(by.name("inlineRadioOptions"));
 this.Select_RadioButton=function(){
     return SelectRadioButton;
 };

 let GiveDateOfBirth = element(by.css("input[type='date']"));
 this.Give_DateOf_Birth= function (DB) {

    GiveDateOfBirth.sendKeys(DB);
 };

 let ErrorCount = element.all(by.css("[class='alert alert-danger']"));
 this.Error_Count = function () {

   return ErrorCount;

 };

 let ClickSubmit =  element(by.buttonText("Submit"));
 this.Click_Submit = function () {

   return ClickSubmit;

 };

 let ShowSuccess = element(by.css("div[class*='success'"));
 this.Show_Success = function(){
    return ShowSuccess;
};

let DataBindingExample=element(by.xpath("//h4[contains(text(),'Two-way Data Binding example:')]//input[@name='name']"));
this.Data_Binding_Example= function(){
    return DataBindingExample;
};
//Shopping Starts here.
let ClickOnShop= element(by.linkText("Shop"));
this.Click_On_Shop=function(){
ClickOnShop.click();
};
/*let CheckoutCount=element(by.partialLinkText("Checkout"));
this.Check_Out_Count=function(){
   return CheckoutCount;
};*/
let ClickOnCheckout=element(by.css("li[class='nav-item active']"));
this.Click_On_Checkout=function(){
    ClickOnCheckout.click();
}; 
let ClickOnCheckout2=element(by.className("btn btn-success"));
this.Click_On_Checkout2=function(){
    ClickOnCheckout2.click();
};
let GiveCountryName=element(by.css("input[id='country']"));
this.Give_Country=function(CN){
GiveCountryName.sendKeys(CN);
};
let SelectSuggestedCountry=element(by.className("suggestions"));
this.Select_Suggested_Country=function(){
   return SelectSuggestedCountry;
};
let TermConditionCheckBox=element(by.id('checkbox2'));
this.Term_ConditionCheck_Box=function(){
   return TermConditionCheckBox;
};
let PurchaseItem= element(by.xpath("//input[@class='btn btn-success btn-lg']"));
this.Purchase_Item=function(){
PurchaseItem.click();
};
let LastSucessMesage=element(by.css("div[class*='dismissible'"));
this.Last_Sucess_Message=function(){
    return LastSucessMesage;
};
let BacktoProtoCommerceHome=element(by.xpath("//a[contains(text(),'ProtoCommerce Home')]"));
this.Backto_ProtoCommerceHome=function(){
   BacktoProtoCommerceHome.click();
};

}

module.exports = new QAClickAcedamyPom();
