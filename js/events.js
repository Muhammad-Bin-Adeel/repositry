document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper('.swiper-container', {
      loop: true,
      autoplay: {
          delay: 3000,
          disableOnInteraction: false,
      },
      effect: 'fade', // or 'slide' for a sliding effect
      fadeEffect: {
          crossFade: true,
      },
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      speed: 800, // Speed of transition
  });
});


function initializeSliders() {

  
  const carouselContent = document.getElementById("carousel-content");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const totalSlides = carouselContent.children.length;
  let currentIndex = 0;

  function updateCarousel(currentIndex) {
    carouselContent.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  prevBtn.addEventListener("click", () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : totalSlides - 1;
    updateCarousel(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = currentIndex < totalSlides - 1 ? currentIndex + 1 : 0;
    updateCarousel(currentIndex);
  });
}

function addSlides() {
  return new Promise(async (resolve) => {
    try {
      let url = window.location.href;

      const json = await $.getJSON("/data/events.json");
      console.log(json);

      for (var i = 0; i < json.length; i++) {
        let item = json[i];

        var html = `<div id="err" class="swiper-container w-full h-full flex-shrink-0 relative fade-in slide-in zoom-in ">
            <img class="h-screen w-full object-cover" src="${item["image"]}" alt="Carousel Image 1" />

            <div class="event-detail-box">
                <div class="text-left text-white p-4">
                    <h2 class="text-3xl font-bold">${item["event_name"]}</h2>
                    <p class="mt-2 text-lg">${item["description"]}</p>
                    <p class="mt-4 text-sm">Date: ${item["date"]} | Location: ${item["location"]}</p>
                    <button class="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
                        Buy Tickets $ ${item['ticket_price']}
                    </button>
                </div>
            </div>
        </div>`;

        let cr = $(".rett");
        cr.append(html);


        // add to table for events 

        // events-table-body

        var html2 = `<tr>
                <td class="date back-table">${item["date"]}</td>
                <td class="city back-table">${item["location"]}</td>
                <td class="venue back-table">${item["event_name"]}</td>
                <td class="flex justify-end back-table"><a href="#"
                        class="buy-now-btn bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">$ ${item['ticket_price']} </a></td>
            </tr>`


        let cf = $("#events-table-body");
        cf.append(html2);

























      }
    } catch (e) {
      console.log(e);
    }

    resolve();
  });
}

$(document).ready(async function () {
  await addSlides();
  initializeSliders();
});

//   carousel-content
