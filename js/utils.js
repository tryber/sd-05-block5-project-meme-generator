/* Made By Lizzard */

const Utils = function () {
  this.files = [];
  this.processFile = function (e) {
    let extAccepted = e.target.accept.replace(/ |\./g, '').split(',');
    let f = e.target.files || e.dataTransfer.files;
    for(let i=0 ; i<f.length ; i++){
      const ext = f[i].name.split('.')[1];
      let extValid = false;
      extAccepted.forEach((exta) => {
        if(exta === ext){
          extValid = true;
        }
      });
      if(!extValid) {
        return false;
      }
    }
    compressAndPreloadImages(f, 400);
    return true;
  };

  const compressAndPreloadImages = (fileArray, maxWidth) => {
    const runFiles = (fl) => {
      let reader = new FileReader();
      reader.onload = ((e) => {
        var image = new Image();
        image.src = e.target.result;
        image.onload = (() => {
          const elem = document.createElement('canvas');
          let newWidth = Math.min(maxWidth, image.width);
          const scaleFactor = newWidth / image.width;
          elem.width = newWidth;
          elem.height = image.height * scaleFactor;
          const ctx = elem.getContext('2d');
          ctx.drawImage(image, 0, 0, elem.width, elem.height);
            ctx.canvas.toBlob(blob => {
              let file = new File([blob], "temp", {
                type: 'image/jpeg',
                lastModified: Date.now()
              });
              const r = new FileReader();
              r.onload = ((ec) => {
                this.files.push(ec.target.result);
              });
              r.readAsDataURL(file);
            }, 'image/jpeg', 0.7);
        });
      });
    reader.readAsDataURL(fl);
    };
    [].forEach.call(fileArray, runFiles);
  };
}
