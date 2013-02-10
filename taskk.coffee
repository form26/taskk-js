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

  #  Check if can authenticate
  login: (login, password) ->
    basic_auth = "Basic " + login + ":" + password
    $.ajax(
      type: 'POST' 
      url: domain + "auth/login/"
      beforeSend: (xhr) ->
       xhr.setRequestHeader(“Authorization”, basic_auth)
    )

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
  create_task: (title, estimate, list_id) ->
    $.post domain + "tasks/" + auth, {title: title, estimate: estimate, list_id: list_id}

  # create a list (title, description, color). Color = Hexidecimal. #FFFFFF
  create_list: (title, descriptiong, color) ->
    $.post domain + "lists/" + auth, {title: title, description: description, color: color}

  #  Update specific task (id, params)
  edit_task: (id, params) ->
    $.ajax(
      url: domain + "tasks/" + id + "/" + auth
      type: "PUT",
      data: params
    )

  #  Update specific list (id, params)
  edit_list: (id, params) ->
    $.ajax(
      url: domain + "tasks/" + id + "/" + auth
      type: "PUT",
      data: params
    )

window.TaskkAPI = TaskkAPI