
var images1 = [];
for (i = 42; i >= 1; i--) {
  images1.push("".concat("axial non-contrast 75330/",String(i), ".jpeg"))
}

images = images1;

function ImageStack (options) {
  
  var self = this;
    
  self.img_array = options.images;
  
  self.stack = document.createElement('div');
  self.stack.style.overflow = 'auto';
  self.stack.style.maxWidth = '100%';
  self.stack.style.height = options.height;
  self.stack.style.width = options.width;
  self.stack.style.backgroundSize = 'cover'
  self.stack.style.position = 'relative';
  
  var typeRegex = /(\D+)/
  var sizeType = options.height.match(typeRegex)[0]
  
  var numberRegex = /(\d+)/
  self.height_number = Number( options.height.match(numberRegex)[0] )
    
  self.wrapper = document.createElement('div');
  
  for (var i = 0; i < self.img_array.length; i++) {
    
    var image = document.createElement('img');
    image.src = self.img_array[i];
    
    image.style.display = 'none';
    image.style.position = 'absolute';
    image.style.width = options.width;
    image.style.height = options.height;
    image.style.top = 0;
    image.style.left = 0;
    image.dataset.iid = i;
    
    self.wrapper.appendChild(image);
    
  }
    
  self.image_elements = self.wrapper.querySelectorAll('img');
  
  self.scrollobject = document.createElement('div');
  self.scrollobject.style.width = '100%';
  self.scrollobject.style.position = 'absolute';
  self.scrollobject.style.zIndex = '2';
  self.img_count = (self.img_array.length > 15) ? self.img_array.length : 15;
  self.scrollobject_height = Math.floor( 0.1 * self.img_count * self.height_number );
  
  self.scrollobject.style.height = self.scrollobject_height + sizeType;
  
  self.scrollUpdate = function (e) {
    
    self.height_number = self.stack.getBoundingClientRect().height
    self.scrollobject_height = Math.floor( 0.1 * self.img_count * self.height_number );
    
    var sT = self.stack.scrollTop
    var hn05 = self.img_array.length - 1
    var hh = (self.scrollobject_height - self.height_number) / hn05
    scrollval = Math.floor(sT / (hh))
    
    self.currentimg = self.image_elements[scrollval].src
    
    self.stack.style.backgroundImage = 'url(' + self.currentimg + ')';
    
  }
  
  self.stack.addEventListener('scroll', self.scrollUpdate);
  
  self.currentimg = self.image_elements[0].src
  self.stack.style.backgroundImage = 'url(' + self.currentimg + ')';
      
  self.stack.appendChild(self.wrapper);
  self.stack.appendChild(self.scrollobject);
  
  return self.stack;
  
}

var image_height = '630px';
var image_width = '630px';

var stack1 = new ImageStack({
  images: images,
  height: image_height,
  width: image_width
});
var stack2 = new ImageStack({
  images: images,
  height: image_height,
  width: image_width
});
var stack3 = new ImageStack({
  images: images,
  height: '500px',
  width: '500px'
});

var stack4 = new ImageStack({
  images: images,
  height: '500px',
  width: '500px'
});
var stack5 = new ImageStack({
  images: images,
  height: '500px',
  width: '500px'
});
var stack6 = new ImageStack({
  images: images,
  height: '500px',
  width: '500px'
});
var stack7 = new ImageStack({
  images: images,
  height: '500px',
  width: '500px'
});

var stack8 = new ImageStack({
  images: images,
  height: '500px',
  width: '500px'
});
var stack9 = new ImageStack({
  images: images,
  height: '500px',
  width: '500px'
});
var stack10 = new ImageStack({
  images: images,
  height: '500px',
  width: '500px'
});
var stack11 = new ImageStack({
  images: images,
  height: '500px',
  width: '500px'
});

var stack12 = new ImageStack({
  images: images,
  height: '500px',
  width: '500px'
});
var stack13 = new ImageStack({
  images: images,
  height: '500px',
  width: '500px'
});
var stack14 = new ImageStack({
  images: images,
  height: '500px',
  width: '500px'
});
var stack15 = new ImageStack({
  images: images,
  height: '500px',
  width: '500px'
});

var stack16 = new ImageStack({
  images: images,
  height: '500px',
  width: '500px'
});
var stack17 = new ImageStack({
  images: images,
  height: '500px',
  width: '500px'
});
var stack18 = new ImageStack({
  images: images,
  height: '500px',
  width: '500px'
});
var stack19 = new ImageStack({
  images: images,
  height: '500px',
  width: '500px'
});

var stack20 = new ImageStack({
  images: images,
  height: '500px',
  width: '500px'
});
var stack21 = new ImageStack({
  images: images,
  height: '500px',
  width: '500px'
});
var stack22 = new ImageStack({
  images: images,
  height: '500px',
  width: '500px'
});
var stack23 = new ImageStack({
  images: images,
  height: '500px',
  width: '500px'
});

var stack24 = new ImageStack({
  images: images,
  height: '500px',
  width: '500px'
});
var stack25 = new ImageStack({
  images: images,
  height: '500px',
  width: '500px'
});
var stack26 = new ImageStack({
  images: images,
  height: '500px',
  width: '500px'
});
var stack27 = new ImageStack({
  images: images,
  height: '500px',
  width: '500px'
});
var stack28 = new ImageStack({
  images: images,
  height: '500px',
  width: '500px'
});
var stack29 = new ImageStack({
  images: images,
  height: '500px',
  width: '500px'
});
var stack30 = new ImageStack({
  images: images,
  height: '500px',
  width: '500px'
});
var stack31 = new ImageStack({
  images: images,
  height: '500px',
  width: '500px'
});
var stack32 = new ImageStack({
  images: images,
  height: '500px',
  width: '500px'
});
var stack33 = new ImageStack({
  images: images,
  height: '500px',
  width: '500px'
});
var stack34 = new ImageStack({
  images: images,
  height: '500px',
  width: '500px'
});
var stack35 = new ImageStack({
  images: images,
  height: '500px',
  width: '500px'
});
var stack36 = new ImageStack({
  images: images,
  height: '500px',
  width: '500px'
});
var stack37 = new ImageStack({
  images: images,
  height: '500px',
  width: '500px'
});
var stack38 = new ImageStack({
  images: images,
  height: '500px',
  width: '500px'
});
var stack39 = new ImageStack({
  images: images,
  height: '500px',
  width: '500px'
});
var stack40 = new ImageStack({
  images: images,
  height: '500px',
  width: '500px'
});
var stack41 = new ImageStack({
  images: images,
  height: '500px',
  width: '500px'
});
var stack42 = new ImageStack({
  images: images,
  height: '500px',
  width: '500px'
});
var stack43 = new ImageStack({
  images: images,
  height: '500px',
  width: '500px'
});
var stack44 = new ImageStack({
  images: images,
  height: '500px',
  width: '500px'
});
var stack45 = new ImageStack({
  images: images,
  height: '500px',
  width: '500px'
});
var stack46 = new ImageStack({
  images: images,
  height: '500px',
  width: '500px'
});

document.querySelector('.stack1').appendChild(stack1);
document.querySelector('.stack2').appendChild(stack2);
document.querySelector('.stack3').appendChild(stack3);
document.querySelector('.stack4').appendChild(stack4);
document.querySelector('.stack5').appendChild(stack5);
document.querySelector('.stack6').appendChild(stack6);
document.querySelector('.stack7').appendChild(stack7);
document.querySelector('.stack8').appendChild(stack8);
document.querySelector('.stack9').appendChild(stack9);
document.querySelector('.stack10').appendChild(stack10);
document.querySelector('.stack11').appendChild(stack11);
document.querySelector('.stack12').appendChild(stack12);
document.querySelector('.stack13').appendChild(stack13);
document.querySelector('.stack14').appendChild(stack14);
document.querySelector('.stack15').appendChild(stack15);
document.querySelector('.stack16').appendChild(stack16);
document.querySelector('.stack17').appendChild(stack17);
document.querySelector('.stack18').appendChild(stack18);
document.querySelector('.stack19').appendChild(stack19);
document.querySelector('.stack20').appendChild(stack20);
document.querySelector('.stack21').appendChild(stack21);
document.querySelector('.stack22').appendChild(stack22);
document.querySelector('.stack23').appendChild(stack23);
document.querySelector('.stack24').appendChild(stack24);
document.querySelector('.stack25').appendChild(stack25);
document.querySelector('.stack26').appendChild(stack26);
document.querySelector('.stack27').appendChild(stack27);
document.querySelector('.stack28').appendChild(stack28);
document.querySelector('.stack29').appendChild(stack29);
document.querySelector('.stack30').appendChild(stack30);
document.querySelector('.stack31').appendChild(stack31);
document.querySelector('.stack32').appendChild(stack32);
document.querySelector('.stack33').appendChild(stack33);
document.querySelector('.stack34').appendChild(stack34);
document.querySelector('.stack35').appendChild(stack35);
document.querySelector('.stack36').appendChild(stack36);
document.querySelector('.stack37').appendChild(stack37);
document.querySelector('.stack38').appendChild(stack38);
document.querySelector('.stack39').appendChild(stack39);
document.querySelector('.stack40').appendChild(stack40);
document.querySelector('.stack41').appendChild(stack41);
document.querySelector('.stack42').appendChild(stack42);
document.querySelector('.stack43').appendChild(stack43);
document.querySelector('.stack44').appendChild(stack44);
document.querySelector('.stack45').appendChild(stack45);
document.querySelector('.stack46').appendChild(stack46);
