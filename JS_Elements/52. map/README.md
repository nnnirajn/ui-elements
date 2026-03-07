# Leaflet.js Demos – 10 Customization Examples

Ten standalone HTML demos showing different ways to customize and use Leaflet.js. Open any file in a browser (no server needed). Uses Leaflet from CDN.

| File | What it demonstrates |
|------|----------------------|
| **index-1-basic.html** | Basic map with OpenStreetMap tiles and default controls |
| **index-2-custom-markers.html** | Custom marker icons (divIcon), colors, and popups |
| **index-3-shapes.html** | Circles, rectangles, and polygons with custom fill/stroke |
| **index-4-polylines.html** | Polylines, dashed routes, and circle markers along a path |
| **index-5-tile-layers.html** | Multiple tile layers and layer control (switch map styles) |
| **index-6-geojson.html** | GeoJSON overlay with styling and `onEachFeature` popups |
| **index-7-events.html** | Map events: click to add markers, mousemove, zoom, moveend |
| **index-8-custom-controls.html** | Custom control with buttons (reset view, zoom to place) |
| **index-9-popup-tooltip.html** | Styled popups and tooltips with custom CSS |
| **index-10-combined.html** | Combined: layers, markers, shapes, routes, legend, layer control |
| **index-11-interactive-hover.html** | Interactive regions: hover to highlight and show tooltip with info |

## How to run

Open any `index-*.html` file directly in your browser, or use a simple local server:

```bash
npx serve .
# or
python -m http.server 8000
```

Then visit e.g. `http://localhost:3000/index-1-basic.html`.

## Requirements

- Modern browser with JavaScript enabled
- Internet connection (for Leaflet and tile CDNs)
