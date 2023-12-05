const InputText=document.getElementById('input-text');
const imgBox=document.getElementById('imgBox');
const QrImage=document.getElementById('qrImage');
const QrcodeGenerator=document.querySelector('.Qrcode-generator');


function qrGenerate (){

if(InputText.value.length>0){
    QrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+InputText.value;
    imgBox.classList.add("show-image");
}else{
    InputText.classList.add("error");
    setTimeout(()=>{
        InputText.classList.remove("error");
    },1000)
    
}
    
}

QrcodeGenerator.addEventListener('click',qrGenerate);