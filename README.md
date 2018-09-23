# Pexels Wrapper

Unofficial simple pexels photos wrapper.

## Installation

```sh
$ npm install @leandrino/pexels-wrapper --save
```

## How to use

### ES6

```js
// to import a specific method
import PexelsWrapper from 'pexels-wrapper';

const pexels = new PexelsWrapper({
  apiUrl: 'https://api.pexels.com/v1'  ,
  apiKey: 'YOUR_TOKEN_HERE'
});

// using  method
pexels.searchPhotos.default('dogs')
```

### CommonJS

```js
const PexelsWrapper = require('pexels-wrapper');

const pexels = new PexelsWrapper({
  apiUrl: 'https://api.pexels.com/v1'  ,
  apiKey: 'YOUR_TOKEN_HERE'
});
```


### UMD in Browser

```html
<script src="main.js"></script>

After that the library will be available to the Global as `PexelsWrapper`. Follow an example:

```js
const pexels = new Pexels.PexelsWrapper({
  apiUrl: 'https://api.pexels.com/v1'  
  apiKey: 'YOUR_TOKEN_HERE'
});

const dogs = pexels.searchPhotos.default('dogs');
```

## Methods

> Follow the methods that the library provides.

### searchPhotos.default(query)
   
   > Search photos with provided query.
   
   **Arguments**
   
   | Argument | Type    | Options                           |
   |----------|---------|-----------------------------------|
   |`query`   |*string* | 'Get photos related to this query'|
   
   
   **Example**
   
   ```js
   pexels.searchPhotos.default('dogs')
     .then(data => {
       // do what you want with the data
     })
   ```
  ### searchPhotos.withPagination(query, perPage, page)
  
  > Search photos with provided query and pagination.
  
  **Arguments**
  
  | Argument | Type    | Options                                 |
  |----------|---------|-----------------------------------------|
  |`query`   |*string* | Get photos related to this query'       |
  |`perPage` |*number* | 'Defines the number of results per page'|
  |`query`   |*string* | 'Defines the number of the page'        |
  
  
  **Example**
  
  ```js
  pexels.searchPhotos.withPagination('dogs', 20, 1)
    .then(data => {
      // do what you want with the data
    })
  ```

## License

This project is licensed under the MIT License
