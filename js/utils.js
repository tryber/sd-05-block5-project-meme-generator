/*Made By Lizzard*/

let Utils = function () {
  this.files = [];
  accepted_extensions = {};
  this.processFile = function (e) {
    ext_accepted = e.target.accept.replace(/ |\./g, '').split(',');
    let f = e.target.files || e.dataTransfer.files;
    for(let i=0; i<f.length; i++){
      let ext = f[i].name.split('.')[1];
      let ext_verified = false;
      ext_accepted.forEach((exta) => {
        if(exta == ext){
          ext_verified = true;
        }
      });
      if(!ext_verified){
        return false;
      }
    }
    compressAndPreloadImages(f, 400);
  };

  compressAndPreloadImages = (f_array, max_w) => {
    let process_files = (fl) => {
      var reader = new FileReader();
      reader.onload = ((e) => {
        var image = new Image();
        image.src = e.target.result;
        image.onload = (() => {
          const elem = document.createElement('canvas');
          let new_width = Math.min(max_w, image.width);
          const scaleFactor = new_width / image.width;
          elem.width = new_width;
          elem.height = image.height * scaleFactor;
          const ctx = elem.getContext('2d');
          ctx.drawImage(image, 0, 0, elem.width, elem.height);
            ctx.canvas.toBlob((blob) => {
              file = new File([blob], "temp", {
                type: 'image/jpeg',
                    lastModified: Date.now()
              });
              let r = new FileReader();
              r.onload = ((ec) => {
                this.files.push(ec.target.result);
              });
              r.readAsDataURL(file);
            }, 'image/jpeg', .7);
        });
      });
    reader.readAsDataURL(fl);
    };
    [].forEach.call(f_array, process_files);
  };
}
