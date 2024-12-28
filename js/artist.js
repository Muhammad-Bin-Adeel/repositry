function fatchartists() {

    return new Promise(async (resolve) => {
        try {
            const json = await $.getJSON('/data/artists.json')

            for (var i = 0; i < json.length; i++) {
                let item = json[i]

                const details = await $.getJSON(`/data/artists/id${i + 1}.json`)
                console.log(details)
                let genra = details['genres'].join(" | ")







                var html =
                    ` <div  class="artist-box bg-gray-800 text-gray-200 rounded-lg shadow-md flex overflow-hidden">
                <!-- Left Column (Image Section) -->
                <div class="left-col w-1/3 relative">
                    <div class="image-with-bg h-full w-full relative bg-cover bg-center"
                        style="background-image: url(${item['image']});">
                        <div
                            class="tag-name bg-blue-600 text-white text-xs font-semibold px-2 py-1 absolute top-2 left-2 rounded">
                            Image Tag</div>
                                   
                    </div>
                </div>

                     <!-- Right Column (Details Section) -->
                     <div id="Artist" class="right-col w-2/3 p-6 flex flex-col justify-between" >
                     <div data-aos="fade-up">
                    <!-- Date Section -->
                    <!-- Artist Details Section -->

                    <div class="text-xl font-semibold text-white">${item['name']}</div>
                    <div class="text-gray-400 text-sm mb-2">${genra}</div>
                    <p class="text-gray-300 text-sm leading-relaxed">
                    <span>   ${details['origin']}   </span><br>
                    <span>   ${details['years_active']}   </span><br>
                    <span>   ${details['label']}   </span>
                    </p>
                    </div>
                </div>
            </div>`


                let cr = $(".artist-parent");
                cr.append(html);


            }

        } catch (error) {
            console.error(error)
        }

        resolve()
    })

}


$(document).ready(async function () {
    fatchartists()
})