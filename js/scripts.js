(function ($, scripts) {
	scripts = {
        apiLink: 'https://api.vagalume.com.br/rank.php?apikey=660a4395f992ff67786584e238f501aa&type=art&period=week&periodVal=201134&scope=all&limit=3',
        artistsBox: '#musicas-roadtrip .artistas',
    };
    
	scripts.Init = function () {
        scripts.GetArtists();
    };
    
    scripts.GetArtists = function() {
        $.ajax({
            type: "get",
            url: scripts.apiLink,
            success: function (response) {
                response.art.week.all.forEach(function(element) {
                    scripts.RenderArtist(element);
                });
            },
            error: function(err) {
                console.error(err);
            }
        });
    };

    scripts.RenderArtist = function(el) {
        var html = 
        '<figure> \
            <a href="' + el.url + '" title="' + el.name + '" target="_blank"> \
                <div class="play"></div> \
                <div class="img" style="background-image: url(' + el.pic_medium + ');"></div> \
                <figcaption>' + el.name + '</figcaption> \
            </a> \
        </figure>';

        $(scripts.artistsBox).append(html);
    }

	$(document).ready(function () {
		scripts.Init();
	});
}(jQuery, 'Private'));