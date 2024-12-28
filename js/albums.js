
function downloadjson(){
  alert();
}















function addAlbumsInView() {










  return new Promise(async (resolve) => {
    try {
      let albums = [];

      let url = window.location.href;

      const json = await $.getJSON(`/data/albums.json`);

      console.log(json);

      //album-rush 
      for(var i = 0; i < json.length; i++) {

        let item = json[i]

        var html = `<div id"album-start" class="p-4 shadow album-box relative" id="album-1-1" style="background-image: url(${item.image})">
    
    
                    <div id="bar-nde"
                        class="album-bar bg-gray-800 text-gray-200 flex justify-between items-center p-4 rounded-lg shadow-md">
                        <!-- Left Side (bar-title) -->
                        <div class="bar-title flex items-center space-x-2">
                            <div><i class="fas fa-play text-blue-400"></i></div>
                            <div class="text-lg font-semibold">${item['albumName']}</div>
                        </div>
    
                        <!-- Right Side (bar-actions) -->
                        <div class="bar-actions flex items-center space-x-4">
                            <div>${item.songs.length} Songs</div>
                            <div><i class="fas fa-list text-gray-400 hover:text-white cursor-pointer"></i></div>
                        </div>
                    </div>
    
                </div>`;

        let cr = $("#album-rush");
        cr.append(html);

    }






    } catch (e) {
      console.log(e);
    }

    resolve();
  });
}

$(document).ready(async function () {
  await addAlbumsInView();
  // other functions?
});
