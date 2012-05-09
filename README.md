### Spell Canvas. Wrap your app.
Everyone talk about Canvas. Canvas this, Canvas that, the new Flash, etc, etc, etc.
But...it is really easy to use? Not really, yet.
Build Canvas apps today is a CRAP. Theres a whole work you have to do before your project is ready to start.
I built this framework to easy your life. Correction: To easy my life. But im sure it can works for you too.

### How to start?
Its so easy to start using Spell-Canvas, all you need to do is clone the repository and setup your page to load it.

```
$ git clone git@github.com:renatodex/spell-canvas.git
```

### But how it works?
Spell is based on Stages (or Pages), like Scenes on Adobe Flash. All you need to do is create a new page based on the Project structure and start to work.

If you had a site made in canvas, you would create a Stage for each link you have. (Home, Services, Contact, etc)

The structure of a page is as follow:
```
define(['pages', 'draw'], function(Page, Draw) {
    return Page.extend({      
        init : function() {
            console.log('My page!');
        },
    });
});
```

Everytime you change the page, the Canvas is re-drawed.

### I should use it?
I do not recommend Spell for production environment yet, because its still at development stage.
But feel free to study the source code and see if you can contribute.

### Authors and Contributors
At least only me (@renatodex). If you want to contribute, talk to me!

### Support or Contact
Having trouble with something? Dont worry, this is not a documentation, and my support not the best for now, but im just implementing new things like Events, Animation, so, keep an eye open!