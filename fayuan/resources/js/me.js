openKeyWordInfo = function(num) {
    console.log(num);
    console.log(newNameObj[num]);
    if (newNameObj[num]) {

        $(".nameInfoBox").append($('<div class="letter-group" "><span class="letter">' + num + '</span></div>'));
        for (var i = 0; i < newNameObj[num].length; i++) {
            var newStrUrl = newNameObj[num][i].url + '?id=' + newNameObj[num][i].id + '&name=' + newNameObj[num][i].value;
            console.log(newStrUrl);

            $(".nameInfoBox .letter-group").append($('<a href="' + newStrUrl + '">' + newNameObj[num][i].value + '</a>'));
        }
        $('.container-mid-padding').fadeOut(500);
        $('.nameInfoBox').delay(200).fadeIn(500);
        $('.closenameInfoBox').delay(200).fadeIn(500);
    }

}

closeKeyWordInfo = function() {
    console.log(1)
    $('.container-mid-padding').delay(200).fadeIn(500);
    $('.nameInfoBox').fadeOut(500);
    $('.closenameInfoBox').fadeOut(500);
    $(".nameInfoBox").empty();
}