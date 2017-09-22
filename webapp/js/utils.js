define([], function() {

    var _element = document.getElementById('global-message');
    var showMessage = function (msg) {
        _element.innerHTML =
            '<div class="alert alert-info alert-dismissible" role="alert">' +
            '  <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
            msg +
            '</div>';
        _element.style.display = 'block';

        logMessage(msg);
    };

    document.addEventListener('click', function (e) {
        _element.style.display = 'none';
    }, false);

    var _logElement = document.getElementById('project-log-message');
    var logMessage = function (msg) {
        _logElement.value += msg + '\n';
    }
    document.getElementById('clear-log-message').addEventListener('click', function (e) {
        e.preventDefault();
        _logElement.value = '';
    }, false);

    return {
        'logMessage': logMessage,
        'showMessage': showMessage,
    }

});