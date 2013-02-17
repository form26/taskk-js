# Taskk API Javascript library.
# https://api.taskk.it.
# Taskk API V1

####################
# Example Usage:
#
# taskk_api = new TaskkAPI('token')
# ping = taskk_api.ping()
# ping.success (data) -> alert(JSON.stringify(data))
# ping.error (data) -> alert(JSON.stringify(data))
#
####################

class TaskkAPI
  domain = "https://api.taskk.it/v1/"
  auth = ""

  constructor: (@token) ->
    # Use token if present.
    if @token
      this.set_token(@token)

  set_token: (token) ->
    auth = "?token=" + token

  #  Check if can authenticate
  ping: ->
    $.get domain + "auth/ping/" + auth

  make_base_auth = (user, password) ->

  #  Check if can authenticate
  login: (login, password) ->
    $.ajax
      type: "POST"
      url: domain + "auth/login/"
      contentType:"application/json; charset=utf-8"
      dataType:"json"
      beforeSend: (xhr) ->
        tok = login + ":" + password
        hash = btoa(tok)
        basic_auth = "Basic " + hash
        xhr.setRequestHeader "Authorization", basic_auth
        return

  #  Get all lists
  get_lists: ->
    $.get domain + "lists/" + auth

  #  Get all tasks
  get_tasks: ->
    $.get domain + "tasks/" + auth

  #  Get specific task (id)
  get_task: (id) ->
    $.get domain + "tasks/" + id + "/" + auth

  #  Get specific list (id)
  get_list: (id) ->
    $.get domain + "lists/" + id + "/" + auth
  
  # create a task (title, estimate, list_id)
  create_task: (params) ->
    $.ajax(
      url: domain + "tasks/" + auth
      type: "POST"
      data: JSON.stringify({task: params})
      contentType:"application/json; charset=utf-8"
      dataType:"json"
    )

  # create a list (title, description, color). Color = Hexidecimal. #FFFFFF
  create_list: (params) ->
    $.ajax(
      url: domain + "lists/" + auth
      type: "POST"
      data: JSON.stringify({list: params})
      contentType:"application/json; charset=utf-8"
      dataType:"json"
    )

  #  Update specific task (id, params)
  edit_task: (id, params) ->
    $.ajax(
      url: domain + "tasks/" + id + "/" + auth
      type: "PUT"
      contentType:"application/json; charset=utf-8"
      dataType:"json"
      data: JSON.stringify({task: params})
    )

  #  Update specific list (id, params)
  edit_list: (id, params) ->
    $.ajax(
      url: domain + "lists/" + id + "/" + auth
      type: "PUT"
      contentType:"application/json; charset=utf-8"
      dataType:"json"
      data: JSON.stringify({list: params})
    )

window.TaskkAPI = TaskkAPI
