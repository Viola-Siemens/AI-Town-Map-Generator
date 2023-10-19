# AI-Town-Map-Generator
A map generator website for AI Town

## Usage for this repo

### Install http-server

```
npm install -g http-server
```

### Clone this repo
```
git clone https://github.com/Viola-Siemens/AI-Town-Map-Generator.git
cd AI-Town-Map-Generator
```

### Start the http server
```
http-server -p 2333
```

Choose any port number you like! This example uses 2333.

Open your browser and visit http://your.ip.address:2333/. Default ip address is 127.0.0.1.

## Hints for generating a map

### Adding a Layer
The map can be multi-layered. If you place a sprite with transparent pixels, you may need to add another sprite under it - adding one more layer can work, and for most maps, it is recommend to add only two layers.

### Objects
You can also add some objects, for example, trees, wells and pools, in your map. Players in the town will try to avoid them while walking.

### Which file to edit?
Edit "convex/maps/firstmap.ts" in AI-town project. Variable `bgtiles` is for the multi-layered background, and `objmap` is for the objects. Click "Copy to Clipboard" button and copy the following content and drop it to corresponding position in your code.

## Usage for map painting

### Place as Background
First, select a layer to place the sprite. Please note that the layer with a smaller index is located lower, and will be obscured by the sprites with a larger layer index, so when editing a certain layer, other layers above this layer will not be displayed. Next, select the square that needs to be modified on the left, and then left click the sprite to be placed at that location from the palette on the right - you can also right-click the palette to do this and place an object.

### Erasing
Double-click the grid on the left to clear its background sprite on the current layer. If you want to clear the object, please operate in the right-click menu.

### Quick filling
Double-click a sprite in the palette on the right, and then click any grid on the left to quickly fill it. You can also hold down the left mouse button and drag on the left to fill more grids in batches. In addition, you can also choose to fill all grids of the current layer in the menu that pops up after right-clicking on a sprite in the palette.

### Offset
This tool can display up to 25x25 grids at the same time, but you can still change the map size, and see the background and objects of other grids outside the field of view by changing the map offset on the right side.
