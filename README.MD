

### Socket.IO Events

- Emitted 'checkin': 

```
{
    name: <name of user>,
    gender: <gender of user>,
    number: <number for device>,
    time: <time of checkin>
}
```

- Emitted 'stand': Sends a json object with this format 

```
{ 
    number: "<number of the person>", 
    time: "<time when the message was sent>"
}
```

- Emitted 'reaction': Sends a json object with this format 

```
{ 
    number: "<number of the person>", 
    time: "<time when they reacted>"
}
```

- Emitted 'welcome': Sends a json object with this format 

```
{
    message: "Welcome!", 
    id: "<socket id>"
}
```