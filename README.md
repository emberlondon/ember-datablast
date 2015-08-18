# Ember Datablast

Install dependencies:

```sh
ember install emberlondon/ember-datablast
ember install liquid-fire
```

Add the stylesheet to your index.html:

```html
<!-- app/index.html -->
<link rel="stylesheet" href="assets/vendor.css">
<link rel="stylesheet" href="assets/datablast.css">
<link rel="stylesheet" href="assets/your-app.css">
```

Mix `RouteStepper` into your router:

```js
// app/router.js

import RouteStepper from 'ember-datablast/mixins/route-stepper';

var Router = Ember.Router.extend(RouteStepper, {
  location: config.locationType
});
```

Define your transition:

```js
// app/transitions.js

export default function() {
  this.transition(
    this.use('fade')
  );
}
```

Setup the application template:

```hbs
{{! app/templates/application.hbs }}

{{liquid-outlet}}

{{db-controls}}
```

For each route in your presentation, use the `db-slide` component:

```hbs
{{! app/templates/index.hbs }}

{{#db-slide}}
  <h1>Welcome!</h1>
{{/db-slide}}
```

Note: Images *must* have at least a `height` attr.

## Contributing

### Installation

* `git clone` this repository
* `npm install`
* `bower install`

### Running

* `ember server`
* Visit your app at http://localhost:4200.

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
