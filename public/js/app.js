var host = location.origin.replace(/^http/, 'ws');
var ws = new WebSocket(host);

//gets state of switches from server
ws.onmessage = function (event) {
  obj = JSON.parse(event.data);
  $('#userCount').html(obj.users);
}

function TestCtrl($scope) {
  $scope.title = 'Write a title here...';
};