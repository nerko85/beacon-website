//  SHARE BUTTONS 

$(".__facebook").click(function() {
    this.preventDefault;
    $.ajax({
        type: 'POST',
        url: 'https://graph.facebook.com?access_token=EAAGMYkuggd8BALgw34ZAeS3ThxaokKzGeSLx2Hs02bcnL2oFRmL9Ny2ZAPxWBCwUuE7v3RRKq4OKOr4v8wkXyOy9SD5I0pmErTpayugif40kPbASHRkMvrLEEKfnFLDGbXKdHDAjiPHOKKSKZCpZCBZCuaz4KasL5ZBV3Au5bN6GBbvddIrC2npIDvQeQCHkYZD&id=' + url + '&scrape=true',
        success: function(data) {
            console.log(data);
        }
    });
});

if ($('.__facebook')[0]) {
    $('.__facebook')[0].dataset.shareUrl = window.location.href;

}
if ($('#sharetwitter')[0]) {
    $('#sharetwitter')[0].dataset.shareUrl = window.location.href;

}
if ($('#sharegoogleplus')[0]) {
    $('#sharegoogleplus')[0].dataset.shareUrl = window.location.href;

}
if ($('#sharepinterest')[0]) {
    $('#sharepinterest')[0].dataset.shareUrl = window.location.href;

}
if ($('#sharelinkedin')[0]) {
    $('#sharelinkedin')[0].dataset.shareUrl = window.location.href;

}