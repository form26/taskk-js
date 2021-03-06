// Generated by CoffeeScript 1.5.0
(function() {
  var TaskkAPI;

  TaskkAPI = (function() {
    var auth, domain, make_base_auth;

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

    make_base_auth = function(user, password) {};

    TaskkAPI.prototype.login = function(login, password) {
      return $.ajax({
        type: "POST",
        url: domain + "auth/login/",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        beforeSend: function(xhr) {
          var basic_auth, hash, tok;
          tok = login + ":" + password;
          hash = btoa(tok);
          basic_auth = "Basic " + hash;
          xhr.setRequestHeader("Authorization", basic_auth);
        }
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

    TaskkAPI.prototype.create_task = function(params) {
      return $.ajax({
        url: domain + "tasks/" + auth,
        type: "POST",
        data: JSON.stringify({
          task: params
        }),
        contentType: "application/json; charset=utf-8",
        dataType: "json"
      });
    };

    TaskkAPI.prototype.create_list = function(params) {
      return $.ajax({
        url: domain + "lists/" + auth,
        type: "POST",
        data: JSON.stringify({
          list: params
        }),
        contentType: "application/json; charset=utf-8",
        dataType: "json"
      });
    };

    TaskkAPI.prototype.edit_task = function(id, params) {
      return $.ajax({
        url: domain + "tasks/" + id + "/" + auth,
        type: "PUT",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify({
          task: params
        })
      });
    };

    TaskkAPI.prototype.complete_task = function(id) {
      return $.ajax({
        url: domain + "tasks/" + id + "/complete" + auth,
        type: "PUT",
        contentType: "application/json; charset=utf-8",
        dataType: "json"
      });
    };

    TaskkAPI.prototype.edit_list = function(id, params) {
      return $.ajax({
        url: domain + "lists/" + id + "/" + auth,
        type: "PUT",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify({
          list: params
        })
      });
    };

    return TaskkAPI;

  })();

  window.TaskkAPI = TaskkAPI;

}).call(this);
