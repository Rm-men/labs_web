$('body').on('click', '.kodnaya-prokhod', function() {
    if ($('#kapavolsu-salockedun').attr('type') == 'password') {
        $(this).addClass('view');
        $('#kapavolsu-salockedun').attr('type', 'text');
    } else {
        $(this).removeClass('view');
        $('#kapavolsu-salockedun').attr('type', 'password');
    }
    return false;
});