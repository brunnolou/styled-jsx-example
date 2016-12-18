# Simple styled-jsx example
### What's in it?
A simple [styled-jsx](https://github.com/zeit/styled-jsx) example based on [react-webpack-babel](https://github.com/alicoding/react-webpack-babel) Starter Kit.

```jsx
export default class App extends Component {
  render() {
    return (
      <div className="root">
        <p>Only this paragraph will get the style :D</p>
        <p className="blue">This will be blue</p>
        { /* you can include <Component />s here that include
             other <p>s that don't get unexpected styles! */ }
        <style jsx>{`
          .root {
            display: flex;
            justify-content: space-around;
          }

          p {
            color: red;
          }

          .blue {
            color: blue;
          }
        `}</style>
      </div>
    )
  }
}
```
### What you can't do
Template literal expression [don't work](https://github.com/zeit/styled-jsx/issues/25):

```jsx
export default class App extends Component {
  render() {
		const blueColor = 'blue';

    return (
      <div>
        <p>Will not get the blue color :(</p>
        <style jsx>{`
          p {
            color: ${blueColor};
          }
        `}</style>
      </div>
    )
  }
}
```

### To run
* You'll need to have latest [node](https://nodejs.org/en/) installed in your system.
* Fork and clone the project:

```
git clone https://github.com/alicoding/react-webpack-babel.git
```

* Then install the dependencies:

```
yarn install
```

* Run development server:

```
yarn start
```

* Or you can run development server with [webpack-dashboard](https://github.com/FormidableLabs/webpack-dashboard):

```
yarn run dev
```

Open the web browser to `http://localhost:8888/`

### To build the production package

```
yarn run build
```

### Nginx Config

Here is an example Nginx config:
```
server {
  # ... root and other options

  gzip on;
  gzip_http_version 1.1;
  gzip_types text/plain text/css text/xml application/javascript image/svg+xml;

  location / {
    try_files $uri $uri/ /index.html;
  }

  location ~ \.html?$ {
    expires 1d;
  }

  location ~ \.(svg|ttf|js|css|svgz|eot|otf|woff|jpg|jpeg|gif|png|ico)$ {
    access_log off;
    log_not_found off;
    expires max;
  }
}
```

### Eslint
There is a .eslint.yaml config for eslint ready with React plugin.
To do the actual linting, run:

```
yarn run lint
```

### Contribute
Please contribute to the project if you know how to make it better, including this README :)
