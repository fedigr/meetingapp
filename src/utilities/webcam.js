export function webcam(){
    navigator.mediaDevices.getUserMedia({video:true,audio:true})
    .then(stream=>{
      return stream ;
    }).catch(err=>{
        throw new Error("cannot access the audio and video")
    })
}