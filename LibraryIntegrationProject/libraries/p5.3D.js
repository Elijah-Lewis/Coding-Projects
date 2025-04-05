p5.prototype.Picture3D = function(p, picture, depth, size, resolution, bevelled = false) {
    this.picture = picture; // Letter
    this.threshold = 60; // Magic number good for images

    this.create = function() {
        // Create the 2D graphic
        var graphic = p.createGraphics(this.resX, this.resY);

        // Draw the given picture in the corner
        graphic.background(255, 255, 255, 255);
        graphic.image(this.picture, -1, -1, this.resX, this.resY);

        return graphic;
    }

    p5.prototype.Object3D.call(this, p, depth, size, resolution, bevelled, this.threshold);

    // Redefine the resolution as a scaling of the width and height
    this.resX = int(this.picture.width*resolution);
    this.resY = int(this.picture.height*resolution);

    // Create the array using its own "create()" and Object3D's "toArray()"
    this.array = this.toArray(this.create(), 1);
    this.rects = p5.prototype.getRects(this.array, this.bevelled);
}

p5.prototype.createPicture3D = function(picture, depth = 6, size = 10, resolution = 50, bevelled = false) {
    return new p5.prototype.Picture3D(p = this, picture, depth, size, resolution, bevelled = false);
}