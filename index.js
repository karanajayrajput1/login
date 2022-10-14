function onSighIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    $("#name").text(profile.getName());
    console.log('Name: ' + profile.getName());
    $("#email").text(profile.getEmail());
    $("#image").attr('src',profile.getImageUrl());
    $(".data").css("display","block");
    $(".g-signin2").css("display","none");
}
window.gapi.client
        .init({
          clientId:'642224205119-smmapin9cokl0q5t4576877uieal2kpa.apps.googleusercontent.com',
          scope: "email",
          plugin_name:'resume'
        });
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        alert("logged out");
        $(".g-sighin2").css("display","block");
        $(".data").css("display","none");
    });
}
