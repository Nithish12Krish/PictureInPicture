const videoElement=document.getElementById('video');
const button=document.getElementById('button');

//prompt to select media stream, pass to video element, then play
async function selectedMediaStream()
{
    try{
        const mediaStream=await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject=mediaStream;
        videoElement.onloadedmetadata=()=>{
            videoElement.play();
        }
    }catch(error){
        //
    }
}
button.addEventListener('click',async ()=>{
  //disable button
  button.disabled=true;
  //start PIP
  await videoElement.requestPictureInPicture();
  //Reset button
  button.disabled=false;
});
//onLoad
selectedMediaStream();