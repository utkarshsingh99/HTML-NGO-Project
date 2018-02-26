/*Creating an object that shall hold all info about an NGO*/
var ngo_template={Name:"-", Donation:"",YoEst:"", Where:"-", filter_display: "0"};
var ngos=[];
ngos.push(ngo_template);
ngos[0].Name="NGO1";
ngos[0].Donation="Money";
ngos[0].YoEst="1999";
ngos[0].Where="Hamirpur";
ngos[0].filter_display="0";
ngos.push(ngo_template);
ngos[1].Name="NGO2";
ngos[1].Donation="Clothes";
ngos[1].YoEst="1999";
ngos[1].Where="Hamirpur";
ngos[1].filter_display="0";

function filter_by_don(key){
  for(var i=0;i<ngos.length;i++){
    if(ngos[i].Donation.indexOf(key)>=0)     //if key will be present in Donation string, the index will be any positive number, else, it returns -1.
    {
        ngos[i].filter_display="1";
    }
  }
}
