var text_title = "Overlay text";

// Image 1
var canvas = document.getElementById('imageCanvas');
var ctx = canvas.getContext('2d');
var img = new Image();
img.crossOrigin = "anonymous";

window.addEventListener('load', DrawPlaceholder(img, ctx, "#005A57", 'https://i.ibb.co/BG224jJ/Page-5.png', 450, 380));

// Image 2
var canvas1 = document.getElementById('imageCanvas1');
var ctx1 = canvas1.getContext('2d');
var img1 = new Image();
img1.crossOrigin = "anonymous";

window.addEventListener('load', DrawPlaceholder(img1, ctx1, "#A06F2C", 'https://i.ibb.co/Kz2X8Qf/3456a0a0-547e-47cf-91d0-d750b51f51be.png', 330, 384));


// Image 3
var canvas2 = document.getElementById('imageCanvas2');
var ctx2 = canvas2.getContext('2d');
var img2 = new Image();
img2.crossOrigin = "anonymous";

window.addEventListener('load', DrawPlaceholder(img2, ctx2, "#C5A34B", 'https://i.ibb.co/YpHjddH/greeting-1.png', 222, 352));

// Image 4
var canvas3 = document.getElementById('imageCanvas3');
var ctx3 = canvas3.getContext('2d');
var img3 = new Image();
img3.crossOrigin = "anonymous";

window.addEventListener('load', DrawPlaceholder(img3, ctx3, "#22535B", 'https://i.ibb.co/3RsSVzZ/image.png', 500, 380));

function DrawPlaceholder(photo, canv, clr, sorc, x, y) {
    photo.onload = function() {
        DrawOverlay(photo, canv);
        DrawText(canv, clr);
        DynamicText(canv, photo, clr, x, y)
    };
    photo.src = sorc;

}

function DrawOverlay(photo, canv) {
    canv.drawImage(photo, 0, 0);
    canv.fillStyle = 'rgba(0, 0, 0, 0)';
    canv.fillRect(0, 0, canvas.width, canvas.height);
}

function DrawText(canv, fillcolor) {
    canv.fillStyle = fillcolor;
    canv.textBaseline = 'middle';
    canv.font = " 23px Aref Ruqaa";
}

function DynamicText(canv, photo, clr, x, y) {
    document.getElementById('name').addEventListener('keyup', function() {
        canv.clearRect(0, 0, canvas.width, canvas.height);
        DrawOverlay(photo, canv);
        DrawText(canv, clr);
        text_title = this.value;
        canv.fillText(text_title, x, y);
        canv.textAlign = 'center';

    });
}



download_img = function(el) {
    var image = canvas.toDataURL("image/jpg");
    el.href = image;
};

download_img1 = function(el) {
    var image1 = canvas1.toDataURL("image/jpg");
    el.href = image1;
};

download_img2 = function(el) {
    var image2 = canvas2.toDataURL("image/jpg");
    el.href = image2;
};

download_img3 = function(el) {
    var image3 = canvas3.toDataURL("image/jpg");
    el.href = image3;
};

download_img4 = function(el) {
    var image4 = canvas4.toDataURL("image/jpg");
    el.href = image4;
};

download_img5 = function(el) {
    var image5 = canvas5.toDataURL("image/jpg");
    el.href = image5;
};

download_img6 = function(el) {
    var image6 = canvas6.toDataURL("image/jpg");
    el.href = image6;
};