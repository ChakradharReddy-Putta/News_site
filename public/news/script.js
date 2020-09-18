window.onload = () => {
  let data = [
    {
      heading: "hello world heading 1",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi? ",
      link: "www.google.com",
      imageUrl:
        "https://lp-cms-production.imgix.net/2019-06/9483508eeee2b78a7356a15ed9c337a1-bengaluru-bangalore.jpg?auto=compress&fit=crop&fm=auto&sharp=10&vib=20&w=1200",
    },
    {
      heading: "hello world heading 2",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi? ",
      link: "www.google.com",
      imageUrl:
        "https://www.emparion.com/wp-content/uploads/2018/11/tahiti-bora-bora-french-polynesia-bungalows-wooden-hooks-covered-with-straw-sandy-beach.jpg",
    },
    {
      heading: "hello world heading 3",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi? ",
      link: "www.google.com",
      imageUrl: "https://www.w3schools.com/howto/img_nature_wide.jpg",
    },
  ];

  let str = "";

  for (let i = 0; i < data.length; i++) {
    str =
      str +
      `
        <div class="blog-slider__item swiper-slide">
      <div class="blog-slider__img">
        
        <img src="${data[i].imageUrl}" alt="">
      </div>
      <div class="blog-slider__content">
        <span class="blog-slider__code">26 December 2019</span>
        <div class="blog-slider__title">${data[i].heading}</div>
        <div class="blog-slider__text"> ${data[i].content} <br>
        Read More At ${data[i].link} 
        </div>
        
      </div>
    </div>
        
        `;
  }

  document.getElementById("news").innerHTML = str;

  var swiper = new Swiper(".blog-slider", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    mousewheel: {
      invert: false,
    },
    // autoHeight: true,
    pagination: {
      el: ".blog-slider__pagination",
      clickable: true,
    },
  });
};
