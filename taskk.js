// Generated by CoffeeScript 1.4.0
(function() {
  var TaskkAPI;

  TaskkAPI = (function() {
    var auth, domain;

    domain = "https://api.taskk.it/v1/";

    auth = "";

    function TaskkAPI(token) {
      this.token = token;
      if (this.token) {
        this.set_token(this.token);
      }
    }

    TaskkAPI.prototype.set_token = function(token) {
      return auth = "?token=" + token;
    };

    TaskkAPI.prototype.ping = function() {
      return $.get(domain + "auth/ping/" + auth);
    };

    TaskkAPI.prototype.login = function(login, password) {
      return $.post(domain + "auth/login/" + auth, {
        login: login,
        password: password
      });
    };

    TaskkAPI.prototype.get_lists = function() {
      return $.get(domain + "lists/" + auth);
    };

    TaskkAPI.prototype.get_tasks = function() {
      return $.get(domain + "tasks/" + auth);
    };

    TaskkAPI.prototype.get_task = function(id) {
      return $.get(domain + "tasks/" + id + "/" + auth);
    };

    TaskkAPI.prototype.get_list = function(id) {
      return $.get(domain + "lists/" + id + "/" + auth);
    };

    TaskkAPI.prototype.create_task = function(title, estimate, list_id) {
      return $.post(domain + "tasks/" + auth, {
        title: title,
        estimate: estimate,
        list_id: list_id
      });
    };

    TaskkAPI.prototype.create_list = function(title, descriptiong, color) {
      return $.post(domain + "lists/" + auth, {
        title: title,
        description: description,
        color: color
      });
    };

    TaskkAPI.prototype.edit_task = function(id, params) {
      return $.ajax({
        url: domain + "tasks/" + id + "/" + auth,
        type: "PUT",
        data: params
      });
    };

    TaskkAPI.prototype.edit_list = function(id, params) {
      return $.ajax({
        url: domain + "tasks/" + id + "/" + auth,
        type: "PUT",
        data: params
      });
    };

    return TaskkAPI;

  })();

  window.TaskkAPI = TaskkAPI;

}).call(this);
