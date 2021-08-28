# Front End Technical Challenge

## Brief

We would like you to develop a web application that integrates with the [NASA Image and Video Library API](https://images.nasa.gov/). It should allow users to **search for assets** and then **select and view an asset**.

The following wireframes show a high-level representation of the content and user flow:

![Wireframes](./wireframes.png)

## API

### Example Usage

```js
q => fetch(`https://images-api.nasa.gov/search?&media_type=image&q=${q}`);
```

```js
q => fetch(`https://images-api.nasa.gov/asset/:id`);
```

```js
q => fetch(`https://images-assets.nasa.gov/image/:id/metadata.json`);
```
For title and description use `XMP:Title` & `XMP:Description`

### Docs

- https://images.nasa.gov/docs/images.nasa.gov_api_docs.pdf
- https://images.nasa.gov (website)

## Tools, libraries and frameworks

Use whatever tools, libraries and frameworks you feel most comfortable with. You may want to consider using a front-end framework or library (e.g. React) and a simple build process (e.g. Webpack).

We will run your app in an up-to-date version of Chrome, however, keep in mind it should be compatible with all modern browsers.

## Assessment

We will assess the task based on the following criteria:

- How clean, modular and extensible the code is
- Suitability of tools, libraries and frameworks used (for the app and any build processes)
- How it looks visually and the techniques used to style the application
- Responsive web design techniques used and the approach used for layout and accessibility
- Testing
- Anything above and beyond e.g. pagination, animation, routing, video playback etc.
