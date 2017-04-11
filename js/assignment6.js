function CreateCustomer()
{
    var reqObject = new XMLHttpRequest();
    var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/CreateCustomer";
    
    var customerid = document.getElementById("customerid").value;
    var customername = document.getElementById("customername").value;
    var customercity = document.getElementById("customercity").value;
    
    var newcustomer = '{"CustomerID":"' + customerid + '","CompanyName":"' + customername + '","CompanyCity":"' + customercity + '"}';
    
    reqObject.onreadystatechange = function()
    {
        if (reqObject.readyState == 4 && reqObject.status == 200)
        {
            var result = JSON.parse(reqObject.responseText);
            OperationResult(result);
        }
    }
    
    reqObject.open("POST", url, true);
    reqObject.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    reqObject.send(newcustomer);
    
}
    
function OperationResult(output)
{

    if (output.WasSuccessful == 1)
    {
        document.getElementById("result").innerHTML = "The operation was successful!";
    }
    else
    {
        document.getElementById("result").innerHTML = "The operation was not successful!" + "<br>" + output.Exception;
    }
}

function ChangeAddress()
{
    var reqObject = new XMLHttpRequest();
    var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/updateOrderAddress";
    
    var ordernum = document.getElementById("ordernum").value;
    var shiptoname = document.getElementById("shiptoname").value;
    var streetaddress = document.getElementById("streetaddress").value;
    var city = document.getElementById("destcity").value;
    var postalcode = document.getElementById("postalcode").value;
    
    var newaddress= '{"OrderNum":"' + ordernum + '","ShiptoName":"' + shiptoname + '","StreetAddress":"' + streetaddress + '","City":"' + city + '","Postal Code":"' + postalcode + '"}';
    
    reqObject.onreadystatechange = function()
    {
        if (reqObject.readyState == 4 && reqObject.status == 200)
        {
            var result = JSON.parse(reqObject.responseText);
            OperationResulttwo(result);
        }
    }
    
    reqObject.open("POST", url, true);
    reqObject.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    reqObject.send(newaddress);
    
}
function OperationResulttwo(output)
{

    if (output.WasSuccessful == 1)
    {
        document.getElementById("result2").innerHTML = "The operation was successful!";
    }
    else
    {
        document.getElementById("result2").innerHTML = "The operation was not successful!" + "<br>" + output.Exception;
    }
}


function DeleteCustomer()
{
    var reqObject = new XMLHttpRequest();
    var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/deleteCustomer";
    
    var customerid2 = document.getElementById("custid2").value;

    reqObject.onreadystatechange = function()
    {
        if (reqObject.readyState == 4 && reqObject.status == 200)
        {
            var result = JSON.parse(reqObject.responseText);
            OperationResultthree(result);
        }
    }
    
    reqObject.open("GET", url, true);
    reqObject.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    reqObject.send(customerid2);
    
}
function OperationResultthree(output)
{

    if (output.WasSuccessful == 1)
    {
        document.getElementById("result3").innerHTML = "The operation was successful!";
    }
    else
    {
        document.getElementById("result3").innerHTML = "The operation was not successful!" + "<br>" + output.Exception;
    }
}

function checkResolve()
{
    confirm("Are you sure?");
}

function toggleSection1()
{
    var sect = document.getElementById('createCust');
    if (sect.style.display === 'none') {
        sect.style.display = 'block';
    } else {
        sect.style.display = 'none';
    }
}
function toggleSection2()
{
    var sect = document.getElementById('shipTo');
    if (sect.style.display === 'none') {
        sect.style.display = 'block';
    } else {
        sect.style.display = 'none';
    }
}
function toggleSection3()
{
    var sect = document.getElementById('deleteCust');
    if (sect.style.display === 'none') {
        sect.style.display = 'block';
    } else {
        sect.style.display = 'none';
    }
}