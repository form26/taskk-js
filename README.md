taskk.js - Taskk API Wrapper
===================

![taskk](https://www.filepicker.io/api/file/Hb1JkakWS2aEmsBaWxfZ)

What's this?!
--------------
taskk.js is a Coffeescript/Javascript wrapper for working with the [taskk API](https://api.taskk.it).

It's something we use internally to speed up development. It gives you a head start when developing with our API.
  
**Requires:** jquery!

Get started:
------------
Make sure you include jquery before taskk.js!  
  
  
**Example in Coffeescript:**

    # Initialize the taskk api. With your api token. Get yours at https://api.taskk.it  
    taskk_api = new TaskkAPI('token')
    
    # Test your API key with the ping method
    ping = taskk_api.ping()
    
    # define what to do on success. Should say "pong" if you have a valid key.
    ping.success (data) -> alert(JSON.stringify(data))
    
    # define what to do on error
    ping.error (data) -> alert(JSON.stringify(data))
 
   
**Now, for something more fun...**

Lets create a taskk.
    
    # Create a task "Do homework" with an estimate of "1m" for list 1234
    new_task = taskk_api.create_task("Do homework", "1h", 1234)
    
    # define what to do on success.
    new_task.success (data) -> alert(JSON.stringify(data))
    
    # define what to do on error
    new_task.error (data) -> alert(JSON.stringify(data))



Contribute:
---------------------
Fork it and create a pull request!

We're friendly, talk to us: [@taskk_it](http://twitter.com/taskkit)!