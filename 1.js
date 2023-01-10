
      const gap = 16;

      const carousel = document.getElementsByClassName("carousel")[0],
        content = document.getElementsByClassName("content")[0],
        next = document.getElementsByClassName("next")[0],
        prev = document.getElementsByClassName("prev")[0];

      next.addEventListener("click", (e) => {
        carousel.scrollBy(width + gap, 0);
        if (carousel.scrollWidth !== 0) {
          prev.style.display = "flex";
        }
        if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
          next.style.display = "none";
        }
      });
      prev.addEventListener("click", (e) => {
        carousel.scrollBy(-(width + gap), 0);
        if (carousel.scrollLeft - width - gap <= 0) {
          prev.style.display = "none";
        }
        if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
          next.style.display = "flex";
        }
      });

      let width = carousel.offsetWidth;
      console.log("aa", "width");
      window.addEventListener("resize", (e) => (width = carousel.offsetWidth));

        const element = document.querySelector(".carousel");
        element.addEventListener('wheel', (event) => {
        event.preventDefault();
        element.scrollBy({
        left: event.deltaY < 0 ? -500 : 500,    
        });
      });


        const el=document.getElementsByClassName("carousel")[0];
        const prevbtn=document.getElementsByClassName("prev")[0],
              nextbtn=document.getElementsByClassName("next")[0];
        prevbtn.addEventListener("mouseover", function handleMouseOver(){
            prevbtn.style.visibility = 'visible';
            nextbtn.style.visibility = 'visible';
        });
        nextbtn.addEventListener("mouseover", function handleMouseOver(){
            prevbtn.style.visibility = 'visible';
            nextbtn.style.visibility = 'visible';
        });
        el.addEventListener("mouseover", function handleMouseOver(){
            prevbtn.style.visibility = 'visible';
            nextbtn.style.visibility = 'visible';
        });
        el.addEventListener("mouseout", function handleMouseOut(){
            prevbtn.style.visibility = 'hidden';
            nextbtn.style.visibility = 'hidden';
        });
       
